'use strict';

// href trong data.js → footer.socials để trống thì dùng button, không chuyển trang.
(() => {
  const container = document.querySelector('.footer-socials');
  if (!container) return;
  const icons = {
    facebook: '<path d="M14.2 22v-9h3l.5-3.5h-3.5V7.3c0-1 .3-1.7 1.8-1.7h1.9V2.5a25 25 0 0 0-2.8-.2c-2.8 0-4.7 1.7-4.7 4.8v2.4H7.3V13h3.1v9z"/>',
    youtube: '<path fill-rule="evenodd" d="M22.5 7.3a3 3 0 0 0-2.1-2.1C18.5 4.7 12 4.7 12 4.7s-6.5 0-8.4.5a3 3 0 0 0-2.1 2.1A30 30 0 0 0 1 12a30 30 0 0 0 .5 4.7 3 3 0 0 0 2.1 2.1c1.9.5 8.4.5 8.4.5s6.5 0 8.4-.5a3 3 0 0 0 2.1-2.1A30 30 0 0 0 23 12a30 30 0 0 0-.5-4.7ZM10 15.5v-7l6 3.5z"/>',
    chat: '<path d="M12 3C6.5 3 2 6.6 2 11c0 2.3 1.2 4.4 3.2 5.9L4 21l5-2.3c1 .2 2 .3 3 .3 5.5 0 10-3.6 10-8S17.5 3 12 3z"/>'
  };
  const fragment = document.createDocumentFragment();
  (window.SITE_DATA?.footer.socials || []).forEach(item => {
    const linked = Boolean(item.href?.trim());
    const control = document.createElement(linked ? 'a' : 'button');
    control.className = 'footer-social-button';
    control.setAttribute('aria-label', item.label);
    control.title = item.label;
    if (linked) {
      control.href = item.href;
      control.target = '_blank';
      control.rel = 'noopener noreferrer';
    } else control.type = 'button';
    control.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">${icons[item.icon] || icons.chat}</svg>`;
    fragment.append(control);
  });
  container.replaceChildren(fragment);
})();
