'use strict';

// Menu mobile: hoạt động bằng bàn phím, đóng khi chọn mục hoặc nhấn Escape.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav');
function closeMenu(returnFocus = false) {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Mở menu');
  if (returnFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a[href]').forEach(link => link.addEventListener('click', () => closeMenu()));
document.addEventListener('click', event => {
  if (!event.target.closest('.header')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) closeMenu(true);
});
window.matchMedia('(min-width: 1281px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});

// Slider tự chuyển ảnh; phím mũi tên cho phép chọn ảnh thủ công.
const slider = document.querySelector('.slider');
const slides = [...slider.querySelectorAll('.slide')];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let slideIndex = 0;
let sliderTimer;
function showSlide(index) {
  if (!slides.length) return;
  slideIndex = (index + slides.length) % slides.length;
  slides.forEach((slide, current) => {
    slide.classList.toggle('is-active', current === slideIndex);
    slide.setAttribute('aria-hidden', String(current !== slideIndex));
  });
}
function updateTimer() {
  clearInterval(sliderTimer);
  if (slides.length > 1 && !reducedMotion.matches && !document.hidden) {
    sliderTimer = setInterval(() => showSlide(slideIndex + 1), Math.max(1500, Number(window.SITE_DATA?.hero.slideInterval) || 6000));
  }
}
slider.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault();
    showSlide(slideIndex + (event.key === 'ArrowRight' ? 1 : -1));
    updateTimer();
  }
});
document.addEventListener('visibilitychange', updateTimer);
reducedMotion.addEventListener('change', updateTimer);
updateTimer();

// Mục đang xem trong menu và nút về đầu trang.
const navLinks = [...navigation.querySelectorAll('a[href^="#"]')];
const sections = navLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
const backTop = document.querySelector('.back-top');
let scrollScheduled = false;
function updateScroll() {
  const marker = window.scrollY + 180;
  let active = sections[0];
  sections.forEach(section => { if (section.offsetTop <= marker && (!active || section.offsetTop >= active.offsetTop)) active = section; });
  navLinks.forEach(link => {
    const selected = link.getAttribute('href') === `#${active?.id}`;
    link.classList.toggle('active', selected);
    if (selected) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  backTop.hidden = window.scrollY < 500;
  scrollScheduled = false;
}
window.addEventListener('scroll', () => {
  if (!scrollScheduled) { requestAnimationFrame(updateScroll); scrollScheduled = true; }
}, { passive: true });
backTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  document.querySelector('.brand').focus({ preventScroll: true });
});
updateScroll();

// Nội dung tĩnh mở ngay trên trang; không yêu cầu API hoặc backend.
const articles = new Map((window.SITE_DATA?.news.items || []).map(article => [article.id, article]));
const articleDialog = document.querySelector('.article-dialog');
document.querySelectorAll('[data-article]').forEach(button => {
  button.addEventListener('click', () => {
    const article = articles.get(button.dataset.article);
    if (!article) return;
    document.querySelector('#article-title').textContent = article.title;
    document.querySelector('#article-content').replaceChildren(window.renderArticleContent(article.content));
    articleDialog.showModal();
    articleDialog.scrollTop = 0;
    document.body.classList.add('dialog-open');
  });
});
articleDialog.querySelector('.dialog-close').addEventListener('click', () => articleDialog.close());
articleDialog.addEventListener('click', event => {
  const bounds = articleDialog.getBoundingClientRect();
  if (event.target === articleDialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) articleDialog.close();
});
articleDialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
document.querySelector('#copyright-year').textContent = new Date().getFullYear();

