'use strict';

(() => {
  const shared = window.SITE_DATA;
  const data = window.ABOUT_DATA;
  if (!shared || !data) return;
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
  const copy = value => String(value ?? '').replaceAll('{{name}}', shared.site.name);
  const text = (selector, value) => { document.querySelector(selector).textContent = copy(value); };
  const html = (selector, value) => { document.querySelector(selector).innerHTML = value; };
  const href = value => value === '#gioi-thieu' ? 'gioi-thieu.html' : value.startsWith('#') ? `index.html${value}` : value;
  const link = item => item.href ? `<a href="${escape(href(item.href))}">${escape(copy(item.label))}</a>` : `<button type="button" class="footer-links-button">${escape(copy(item.label))}</button>`;

  document.title = copy(data.page.title);
  document.querySelector('meta[name="description"]').content = copy(data.page.description);
  document.querySelector('link[rel="icon"]').href = shared.site.favicon;
  document.querySelector('main').style.setProperty('--about-background', data.page.background);
  document.querySelector('.brand').href = 'index.html';
  document.querySelector('.brand').setAttribute('aria-label', `${shared.site.logoAlt} — Trang chủ`);
  document.querySelectorAll('.brand img,.footer-about img').forEach(image => {
    image.src = shared.site.logo;
    image.alt = shared.site.logoAlt;
  });
  const phone = `tel:${shared.contact.phone}`;
  const email = `mailto:${shared.contact.email}`;
  html('.topbar-contact', `<a href="${escape(phone)}">☎ <span>Hotline: ${escape(shared.contact.phoneDisplay)}</span></a><a href="${escape(email)}">✉ <span>${escape(shared.contact.email)}</span></a><span class="support"><span class="status-dot"></span> ${escape(shared.contact.support)}</span>`);
  html('.nav', shared.menu.map(item => {
    if (item.disabled || !item.href) return `<a role="link" aria-disabled="true">${escape(item.label)}</a>`;
    const active = ['#gioi-thieu','gioi-thieu.html'].includes(item.href);
    return `<a href="${escape(href(item.href))}"${active ? ' class="active" aria-current="page"' : ''}>${escape(item.label)}</a>`;
  }).join(''));

  text('.about-page-title', data.page.heading);
  text('#overview-title', data.overview.title);
  const renderParagraphs = paragraphs => paragraphs.map(block => {
    if (typeof block === 'string') return `<p>${escape(copy(block))}</p>`;
    if (Array.isArray(block.list)) return `<ul>${block.list.map(item => `<li>${escape(copy(item))}</li>`).join('')}</ul>`;
    return '';
  }).join('');
  html('.overview-cards', data.overview.cards.map((card, index) => `<article class="intro-card" aria-labelledby="intro-title-${index}"><div class="intro-image"><img src="${escape(card.image)}" alt="${escape(copy(card.imageAlt))}" width="800" height="900" loading="lazy"></div><div class="intro-content"><span class="intro-number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span><h3 id="intro-title-${index}">${escape(copy(card.title))}</h3><div class="overview-copy">${renderParagraphs(card.paragraphs)}</div></div></article>`).join(''));
  html('.about-stats', data.overview.stats.map(item => `<div class="about-stat"><strong>${escape(item.value)}</strong><span>${escape(item.label)}</span></div>`).join(''));
  text('#values-title', data.overview.valuesTitle);
  html('.value-grid', data.overview.values.map(item => `<article class="value-card"><img src="${escape(item.icon)}" alt="" width="48" height="48"><h3>${escape(copy(item.title))}</h3><p>${escape(copy(item.description))}</p></article>`).join(''));
  text('#about-cta-title', data.cta.title);
  text('.about-cta > p', data.cta.description);
  html('.about-cta-buttons', data.cta.buttons.map(item => `<a href="${escape(href(item.href))}"${item.style === 'outline' ? ' class="cta-outline"' : ''}>${escape(item.label)}</a>`).join(''));

  text('.footer-company-name', shared.footer.description);
  document.querySelector('.footer-address').textContent = shared.contact.address;
  document.querySelectorAll('.footer-grid > div:not(.footer-about):not(.footer-contact)').forEach(column => column.remove());
  const footerContact = document.querySelector('.footer-contact');
  footerContact.insertAdjacentHTML('beforebegin', shared.footer.columns.map(column => `<div><h2>${escape(column.title)}</h2>${column.links.map(link).join('')}</div>`).join(''));
  footerContact.innerHTML = `<h2>${escape(shared.footer.contactTitle)}</h2><a href="${escape(phone)}"><span aria-hidden="true">☎</span> ${escape(shared.contact.phoneDisplay)}</a><a href="${escape(email)}"><span aria-hidden="true">✉</span> ${escape(shared.contact.email)}</a><p><span class="status-dot"></span> ${escape(shared.contact.support)}</p>`;
  html('.footer-bottom p', `© ${new Date().getFullYear()} ${escape(shared.site.name)}.`);
  text('.footer-bottom a', `${shared.footer.backTopLabel} ↑`);
  const floating = document.querySelector('.floating-contact');
  floating.href = phone;
  floating.setAttribute('aria-label', `Gọi tư vấn: ${shared.contact.phoneDisplay}`);


  const menu = document.querySelector('.nav');
  const menuButton = document.querySelector('.menu-toggle');
  const closeMenu = () => {
    menu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Mở menu');
  };
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    menu.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
  });
  menu.addEventListener('click', event => { if (event.target.closest('a[href]')) closeMenu(); });
  document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) { closeMenu(); menuButton.focus(); }
  });
  window.matchMedia('(min-width:1281px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
  const backTop = document.querySelector('.back-top');
  const updateBackTop = () => { backTop.hidden = window.scrollY < 500; };
  window.addEventListener('scroll', updateBackTop, {passive:true});
  backTop.setAttribute('aria-label', shared.footer.backTopLabel);
  backTop.addEventListener('click', () => {
    window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches ? 'instant' : 'smooth'});
    document.querySelector('.brand').focus({preventScroll:true});
  });
  updateBackTop();
})();
