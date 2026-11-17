'use strict';

// File hiển thị dữ liệu. Chỉ cần sửa data.js để thay nội dung website.
(() => {
  const data = window.SITE_DATA;
  if (!data) return;

  // Mọi chữ trong data.js được xử lý như văn bản, không thực thi HTML.
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
  const lines = value => escape(value).replace(/\n/g, '<br>');
  const number = index => String(index + 1).padStart(2, '0');
  const html = (selector, value) => { document.querySelector(selector).innerHTML = value; };
  const text = (selector, value) => { document.querySelector(selector).textContent = value; };
  const link = item => item.href ? `<a href="${escape(item.href)}">${escape(item.label)}</a>` : `<button type="button" class="footer-links-button">${escape(item.label)}</button>`;
  const button = item => `<a class="button button-${['wine', 'white', 'gold'].includes(item.style) ? item.style : 'wine'}" href="${escape(item.href)}"${item.action === 'quote' ? ' data-quote-open aria-haspopup="dialog" aria-controls="quote-modal"' : ''}>${escape(item.label)} <span aria-hidden="true">${escape(item.arrow || '↗')}</span></a>`;
  const heading = (selector, section) => {
    text(`${selector} .section-kicker`, section.kicker);
    document.querySelector(`${selector} .section-kicker`).hidden = !section.kicker;
    text(`${selector} h2`, section.title);
    text(`${selector} .section-heading p:last-child`, section.description);
  };

  document.title = data.site.title;
  document.querySelector('meta[name="description"]').content = data.site.description;
  document.querySelector('link[rel="icon"]').href = data.site.favicon;
  document.querySelectorAll('.brand img, .footer-about img').forEach(image => {
    image.src = data.site.logo;
    image.alt = data.site.logoAlt;
  });
  document.querySelector('.brand').setAttribute('aria-label', `${data.site.logoAlt} — Trang chủ`);

  const phoneHref = `tel:${data.contact.phone}`;
  const emailHref = `mailto:${data.contact.email}`;
  html('.topbar-contact', `<a href="${escape(phoneHref)}">☎ <span>Hotline: ${escape(data.contact.phoneDisplay)}</span></a><a href="${escape(emailHref)}">✉ <span>${escape(data.contact.email)}</span></a><span class="support"><span class="status-dot"></span> ${escape(data.contact.support)}</span>`);
  html('.nav', data.menu.map(item => item.disabled || !item.href
    ? `<a role="link" aria-disabled="true">${escape(item.label)}</a>`
    : link(item)).join(''));

  const hero = data.hero;
  html('.eyebrow', `<img src="assets/icons/carton.svg" width="16" height="16" alt=""> ${escape(hero.eyebrow)}`);
  html('#hero-title', `<span>${lines(String(hero.titleHighlight ?? '').trim())}</span><br>${lines(String(hero.title ?? '').trim())}`);
  text('.hero-description', hero.description);
  html('.hero-actions', hero.buttons.map(button).join(''));
  const badgeIcons = { carton: 'assets/icons/carton.svg', shield: 'assets/icons/shield.svg' };
  html('.trust-tags', hero.badges.map(item => `<span><span aria-hidden="true">${badgeIcons[item.icon] ? `<img src="${badgeIcons[item.icon]}" width="18" height="18" alt="">` : escape(item.icon)}</span> ${escape(item.text)}</span>`).join(''));
  html('.slides', hero.slides.map((item, index) => `<img class="slide${index === 0 ? ' is-active' : ''}" src="${escape(item.src)}" alt="${escape(item.alt)}" width="1920" height="1080" ${index === 0 ? 'fetchpriority="high"' : 'aria-hidden="true"'}>`).join(''));
  html('.stats', hero.stats.map(item => `<div><strong>${escape(item.value)}<span>${escape(item.suffix)}</span></strong><span>${escape(item.label)}</span></div>`).join(''));
  document.querySelector('.stats').setAttribute('aria-label', `${data.site.name} qua những con số`);

  // Giữ biểu tượng SVG thuộc giao diện, tách biệt với chữ và ảnh trong dữ liệu.
  const icons = {
    carton: 'assets/icons/carton.svg',
    'paper-box': 'assets/icons/paper-box.svg',
    notebook: 'assets/icons/notebook.svg',
    'paper-bag': 'assets/icons/paper-bag.svg'
  };
  heading('.services', data.services);
  html('.service-grid', data.services.items.map((item, index) => `<article class="service-card"><span class="card-number" aria-hidden="true">${number(index)}</span><div class="service-icon"><img src="${icons[item.icon] || icons['paper-box']}" width="28" height="28" alt=""></div><h3>${lines(item.title)}</h3><p>${escape(item.description)}</p><a class="text-link" href="${escape(item.href)}">${escape(item.linkLabel)} <span aria-hidden="true">↗</span></a></article>`).join(''));

  const about = data.about;
  const aboutImage = document.querySelector('.about-visual > img');
  aboutImage.src = about.image;
  aboutImage.alt = about.imageAlt;
  html('.experience', `<p class="experience-label">${escape(about.experienceLabel)}</p><p class="experience-value"><strong>${escape(about.experience)}${escape(about.experienceSuffix)}</strong> <span>${escape(about.experienceUnit)}</span></p>`);
  text('.about-copy .section-kicker', about.kicker);
  document.querySelector('.about-copy .section-kicker').hidden = !about.kicker;
  html('#about-title', `${lines(about.title)}<span>${lines(about.titleHighlight)}</span>${lines(about.titleSuffix || '')}`);
  text('.about-intro', about.description);
  document.querySelector('.about-intro').hidden = !about.description;
  html('.reason-list', about.reasons.map((item, index) => `<li><span class="reason-number">${number(index)}</span><div><h3>${escape(item.title)}</h3><p>${escape(item.description)}</p></div></li>`).join(''));
  document.querySelector('.about-copy > .button').outerHTML = button(about.button);


  heading('.news', data.news);
  html('.news-heading-note', data.news.note.split('·').map(part => `<span class="news-note-item">${escape(part.trim())}</span>`).join(''));
  html('.news-grid', data.news.items.map((item, index) => `<article class="news-card"><div class="news-image"><img src="${escape(item.image)}" width="640" height="400" alt="${escape(item.imageAlt)}" loading="lazy"><span>${escape(item.category)}</span></div><div class="news-body"><p class="news-meta"><span class="news-step">${number(index)}</span>${escape(item.meta)} <span>·</span> ${escape(item.readTime)}</p><h3>${escape(item.title)}</h3><p>${escape(item.description)}</p><button class="text-link" type="button" data-article="${escape(item.id)}">${escape(data.news.linkLabel)} <span aria-hidden="true">↗</span></button></div></article>`).join(''));
  html('.news-support', `<div><h3>${escape(data.news.support.title)}</h3><p>${escape(data.news.support.description)}</p></div><a class="button button-wine" href="${escape(data.news.support.href)}">${escape(data.news.support.label)} <span aria-hidden="true">↗</span></a>`);
  text('.article-dialog .section-kicker', data.news.dialogLabel);
  const dialogContact = document.querySelector('.article-dialog > .button');
  dialogContact.href = emailHref;
  dialogContact.innerHTML = `${escape(data.news.contactLabel)} <span aria-hidden="true">↗</span>`;

  heading('.partners', data.partners);
  const partnerViewport = document.querySelector('.partner-logos');
  const partnerGroup = duplicate => `<div class="partner-group" ${duplicate ? 'aria-hidden="true"' : 'role="list" aria-label="Đối tác và khách hàng"'}>${data.partners.items.map(item => `<div class="partner-logo" ${duplicate ? '' : 'role="listitem"'}><img src="${escape(item.image)}" width="220" height="145" alt="${duplicate ? '' : escape(item.name)}"></div>`).join('')}</div>`;
  partnerViewport.innerHTML = `<div class="partner-track">${partnerGroup(false)}${partnerGroup(true)}</div>`;
  partnerViewport.style.setProperty('--partner-duration', `${Math.max(10, Number(data.partners.scrollDuration) || 32)}s`);
  partnerViewport.style.setProperty('--partner-width', `${Math.max(100, Number(data.partners.logoWidth) || 220)}px`);
  partnerViewport.style.setProperty('--partner-height', `${Math.max(70, Number(data.partners.logoHeight) || 145)}px`);
  partnerViewport.hidden = data.partners.items.length === 0;

  const contact = data.contactBanner;
  text('#contact-title', contact.title);
  text('.contact-banner > div > p:last-child', contact.description);
  html('.contact-actions', `<a class="button button-wine" href="${escape(contact.buttonHref)}">${escape(contact.buttonLabel)}</a>`);

  const footer = data.footer;
  text('.footer-company-name', footer.description);
  document.querySelector('.footer-address').textContent = data.contact.address;
  document.querySelectorAll('.footer-grid > div:not(.footer-about):not(.footer-contact)').forEach(column => column.remove());
  const footerContact = document.querySelector('.footer-contact');
  footerContact.insertAdjacentHTML('beforebegin', footer.columns.map(column => `<div><h2>${escape(column.title)}</h2>${column.links.map(link).join('')}</div>`).join(''));
  footerContact.innerHTML = `<h2>${escape(footer.contactTitle)}</h2><a href="${escape(phoneHref)}"><span aria-hidden="true">☎</span> ${escape(data.contact.phoneDisplay)}</a><a href="${escape(emailHref)}"><span aria-hidden="true">✉</span> ${escape(data.contact.email)}</a><p><span class="status-dot"></span> ${escape(data.contact.support)}</p>`;
  html('.footer-bottom p', `© <span id="copyright-year">${new Date().getFullYear()}</span> ${escape(data.site.name)}.`);
  text('.footer-bottom a', `${footer.backTopLabel} ↑`);
  document.querySelector('.back-top').setAttribute('aria-label', footer.backTopLabel);
  const floatingContact = document.querySelector('.floating-contact');
  floatingContact.href = phoneHref;
  floatingContact.setAttribute('aria-label', `Gọi tư vấn: ${data.contact.phoneDisplay}`);

  // Chỉ dựng nội dung bài khi mở, với createElement/textContent để chữ luôn an toàn.
  window.renderArticleContent = blocks => {
    const fragment = document.createDocumentFragment();
    blocks.forEach(block => {
      const element = document.createElement(block.type === 'list' ? 'ul' : 'p');
      if (block.type === 'list') {
        block.items.forEach(value => {
          const item = document.createElement('li');
          item.textContent = value;
          element.append(item);
        });
      } else element.textContent = block.text;
      fragment.append(element);
    });
    return fragment;
  };
})();
