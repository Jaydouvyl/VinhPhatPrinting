'use strict';

(() => {
  const data = window.POLICY_DATA;
  const shared = window.SITE_DATA;
  if (!data || !shared) return;
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  })[char]);
  const inline = value => escape(value).replace(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi, email => `<a href="mailto:${email}">${email}</a>`);
  const list = items => `<ul>${items.map(item => typeof item === 'string'
    ? `<li>${inline(item)}</li>`
    : `<li>${inline(item.text)}${list(item.children || [])}</li>`).join('')}</ul>`;
  const blocks = items => items.map(block => {
    if (block.type === 'heading') return `<h3>${escape(block.text)}</h3>`;
    if (block.type === 'list') return list(block.items);
    return `<p>${inline(block.text)}</p>`;
  }).join('');
  const number = index => String(index + 1).padStart(2, '0');
  const hero = `<div class="policy-hero"><p class="policy-eyebrow"><img src="assets/icons/shield.svg" width="18" height="18" alt="">${escape(data.page.eyebrow)}</p><h1>${escape(data.page.heading)} <span>${escape(data.page.highlight)}</span></h1><p class="policy-introduction">${escape(data.page.introduction)}</p></div>`;
  const layout = `<div class="policy-layout"><aside class="policy-sidebar"><nav class="policy-toc" aria-label="${escape(data.page.contentsLabel)}"><p class="policy-toc-label">${escape(data.page.contentsLabel)}</p><p class="policy-toc-note">${escape(data.page.contentsNote)}</p><ol>${data.sections.map((section,index) => `<li><a class="policy-toc-link" href="#${escape(section.id)}"><span aria-hidden="true">${number(index)}</span>${escape(section.navLabel)}</a></li>`).join('')}</ol></nav></aside><div class="policy-articles">${data.sections.map((section,index) => `<section class="policy-card" id="${escape(section.id)}" aria-labelledby="${escape(section.id)}-title"><div class="policy-card-header"><span class="policy-icon" aria-hidden="true"><img src="${escape(section.icon)}" width="28" height="28" alt=""></span><div><p class="policy-section-number">${number(index)} / ${escape(section.navLabel)}</p><h2 id="${escape(section.id)}-title">${escape(section.title)}</h2></div></div><div class="policy-copy">${blocks(section.blocks)}</div></section>`).join('')}<section class="policy-help" aria-labelledby="policy-help-title"><div><h2 id="policy-help-title">${escape(data.page.contactTitle)}</h2><p>${escape(data.page.contactDescription)}</p><a class="policy-help-email" href="mailto:${escape(shared.contact.email)}">${escape(shared.contact.email)}</a></div><a class="button button-gold" href="lien-he-va-bao-gia.html">${escape(data.page.contactButton)} <span aria-hidden="true">↗</span></a></section></div></div>`;
  // Dùng cùng một bộ dựng nội dung cho bản HTML dự phòng và khi chạy trên trình duyệt.
  window.POLICY_VIEW = { hero, layout };
  if (typeof document === 'undefined') return;
  document.title = data.page.title;
  document.querySelector('meta[name="description"]').content = data.page.description;
  document.querySelector('.policy-shell').innerHTML = hero + layout;

  const links = [...document.querySelectorAll('.policy-toc a')];
  const setCurrent = id => links.forEach(link => {
    if (link.hash === `#${id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  setCurrent(location.hash.slice(1) || data.sections[0]?.id);
  links.forEach(link => link.addEventListener('click', () => setCurrent(link.hash.slice(1))));
  window.addEventListener('hashchange', () => setCurrent(location.hash.slice(1)));
  // Theo dõi mục đang đọc, kể cả khi cuộn bằng tay.
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const sections = [...document.querySelectorAll('.policy-card')];
      const offset = (parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0)
        + (parseFloat(getComputedStyle(sections[0]).scrollMarginTop) || 0) + 2;
      const current = sections.filter(section => section.getBoundingClientRect().top <= offset).at(-1) || sections[0];
      if (current) setCurrent(current.id);
      ticking = false;
    });
  }, {passive:true});
  // Khôi phục vị trí khi mở trực tiếp liên kết chính sách từ trang khác.
  if (location.hash) {
    requestAnimationFrame(() => {
      const target = document.getElementById(location.hash.slice(1));
      if (target?.classList.contains('policy-card')) target.scrollIntoView({behavior:'instant'});
    });
  }
})();
