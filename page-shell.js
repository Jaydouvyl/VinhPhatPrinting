'use strict';

// Thanh đầu trang và chân trang dùng chung cho các trang mới.
(() => {
  const data = window.SITE_DATA;
  if (!data) return;
  const currentPage = document.body.dataset.currentPage;
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  })[char]);
  const route = value => ({
    '#gioi-thieu':'gioi-thieu.html', '#dich-vu':'dich-vu.html', '#lien-he':'lien-he-va-bao-gia.html'
  })[value] || (value.startsWith('#') ? `index.html${value}` : value);
  const link = item => item.href ? `<a href="${escape(route(item.href))}">${escape(item.label)}</a>` : `<button type="button" class="footer-links-button">${escape(item.label)}</button>`;
  document.querySelector('link[rel="icon"]').href = data.site.favicon;
  const brand = document.querySelector('.brand');
  brand.href = 'index.html';
  brand.setAttribute('aria-label', `${data.site.logoAlt} — Trang chủ`);
  document.querySelectorAll('.brand img,.footer-about img').forEach(image => {
    image.src = data.site.logo;
    image.alt = data.site.logoAlt;
  });
  const phone = `tel:${data.contact.phone}`;
  const email = `mailto:${data.contact.email}`;
  document.querySelector('.topbar-contact').innerHTML = `<a href="${escape(phone)}">☎ <span>Hotline: ${escape(data.contact.phoneDisplay)}</span></a><a href="${escape(email)}">✉ <span>${escape(data.contact.email)}</span></a><span class="support"><span class="status-dot"></span> ${escape(data.contact.support)}</span>`;
  const navigation = document.querySelector('.nav');
  navigation.innerHTML = data.menu.map(item => item.disabled || !item.href ? `<a role="link" aria-disabled="true">${escape(item.label)}</a>` : `<a href="${escape(route(item.href))}"${route(item.href) === currentPage ? ' class="active" aria-current="page"' : ''}>${escape(item.label)}</a>`).join('');
  document.querySelector('.footer-company-name').textContent = data.footer.description;
  document.querySelector('.footer-address').textContent = data.contact.address;
  document.querySelectorAll('.footer-grid>div:not(.footer-about):not(.footer-contact)').forEach(column => column.remove());
  const footerContact = document.querySelector('.footer-contact');
  footerContact.insertAdjacentHTML('beforebegin', data.footer.columns.map(column => `<div><h2>${escape(column.title)}</h2>${column.links.map(link).join('')}</div>`).join(''));
  footerContact.innerHTML = `<h2>${escape(data.footer.contactTitle)}</h2><a href="${escape(phone)}"><span aria-hidden="true">☎</span> ${escape(data.contact.phoneDisplay)}</a><a href="${escape(email)}"><span aria-hidden="true">✉</span> ${escape(data.contact.email)}</a><p><span class="status-dot"></span> ${escape(data.contact.support)}</p>`;
  document.querySelector('.footer-bottom p').textContent = `© ${new Date().getFullYear()} ${data.site.name}.`;
  document.querySelector('.footer-bottom a').textContent = `${data.footer.backTopLabel} ↑`;
  const floating = document.querySelector('.floating-contact');
  floating.href = phone;
  floating.setAttribute('aria-label', `Gọi tư vấn: ${data.contact.phoneDisplay}`);

  const menuButton = document.querySelector('.menu-toggle');
  const closeMenu = () => {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Mở menu');
  };
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    navigation.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
  });
  navigation.addEventListener('click', event => { if (event.target.closest('a[href]')) closeMenu(); });
  document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navigation.classList.contains('is-open')) { closeMenu(); menuButton.focus(); }
  });
  matchMedia('(min-width:1281px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
  const backTop = document.querySelector('.back-top');
  const updateBackTop = () => { backTop.hidden = scrollY < 500; };
  window.addEventListener('scroll', updateBackTop, {passive:true});
  backTop.setAttribute('aria-label', data.footer.backTopLabel);
  backTop.addEventListener('click', () => {
    window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches ? 'instant' : 'smooth'});
    brand.focus({preventScroll:true});
  });
  updateBackTop();
})();
