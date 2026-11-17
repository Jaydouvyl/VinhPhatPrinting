'use strict';

(() => {
  const data = window.SERVICES_DATA;
  const shared = window.SITE_DATA;
  if (!data || !shared) return;
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  })[char]);
  const copy = value => String(value ?? '').replaceAll('{{name}}', shared.site.name);
  const text = value => escape(copy(value));
  const setText = (selector,value) => { document.querySelector(selector).textContent = copy(value); };
  const html = (selector,value) => { document.querySelector(selector).innerHTML = value; };
  document.title = copy(data.page.title);
  document.querySelector('meta[name="description"]').content = copy(data.page.description);
  document.querySelector('main').style.setProperty('--services-background',data.page.background);
  setText('.svc-hero .svc-badge',data.page.badge);
  html('.svc-heading',`<span>${text(data.page.titleHighlight)}</span> ${text(data.page.heading)}`);
  setText('.svc-subtitle',data.page.subtitle);

  html('.svc-list',data.items.map(item => `<article class="svc-card" id="${escape(item.id)}"><div class="svc-photo"><img src="${escape(item.image)}" alt="${escape(item.imageAlt)}" width="800" height="680"></div><div class="svc-card-copy"><h2><img src="${escape(item.icon)}" alt="" width="24" height="24">${text(item.title)}</h2><p>${text(item.description)}</p>${item.tags?.length ? `<ul class="svc-tags">${item.tags.map(tag => `<li>${text(tag)}</li>`).join('')}</ul>` : ''}<div class="svc-card-actions"><a class="svc-contact-link" href="#bao-gia" data-quote-open data-quote-service="${escape(copy(item.title))}" aria-haspopup="dialog" aria-controls="quote-modal">${text(data.labels.contact)}</a><a class="svc-detail-link" href="#${escape(item.id)}" data-service-details="${escape(item.id)}" aria-haspopup="dialog" aria-controls="svc-detail">${text(data.labels.details)} <span aria-hidden="true">›</span></a></div></div></article>`).join(''));
  setText('.svc-section-heading>p',data.options.kicker);
  setText('.svc-section-heading h2',data.options.title);
  html('.svc-option-grid',data.items.map(item => `<article class="svc-option"><h3><span><img src="${escape(item.icon)}" width="27" height="27" alt=""></span>${text(item.title)}</h3>${item.specifications?.length ? `<div class="svc-specs">${item.specifications.map(spec => `<div class="svc-spec"><h4>${text(spec.title)}</h4><p>${text(spec.description)}</p></div>`).join('')}</div>` : `<p>${text(item.note || item.introduction)}</p>`}</article>`).join(''));
  const consultation = data.consultation;
  setText('.svc-consultation .svc-badge',consultation.badge);
  html('.svc-consultation h2',`${text(consultation.title)}<br><span>${text(consultation.titleHighlight)}</span>`);
  setText('.svc-consultation .svc-consult-description',consultation.description);
  html('.svc-benefits',consultation.benefits.map(item => `<li><span aria-hidden="true">⊙</span>${text(item)}</li>`).join(''));
  html('.svc-consult-button',`${text(consultation.buttonLabel)} <span aria-hidden="true">›</span>`);
  const consultImage = document.querySelector('.svc-consult-image img');
  consultImage.src = consultation.image;consultImage.alt = consultation.imageAlt;
  setText('.svc-cta h2',data.cta.title);
  setText('.svc-cta>p',data.cta.description);
  html('.svc-cta-buttons',data.cta.buttons.map(item => `<a href="${escape(item.href)}"${item.style === 'outline' ? ' class="svc-cta-outline"' : ''}>${text(item.label)}</a>`).join(''));

  const dialog = document.querySelector('.svc-dialog');
  const close = dialog.querySelector('.svc-dialog-close');
  close.setAttribute('aria-label',data.labels.close);
  setText('.svc-dialog-footer a',`${data.labels.dialogContact} ›`);
  const items = new Map(data.items.map(item => [item.id,item]));
  let opener;
  let currentId;
  let changingHistory = false;
  const hashId = () => {
    try { return decodeURIComponent(location.hash.slice(1)); } catch { return ''; }
  };
  const setHash = (id,replace=false) => {
    try {
      const url = `${location.pathname}${location.search}${id ? '#'+encodeURIComponent(id) : ''}`;
      history[replace ? 'replaceState' : 'pushState'](null,'',url);
    } catch { /* Không ảnh hưởng thao tác mở cửa sổ trên file cục bộ. */ }
  };
  function openDetails(id,trigger) {
    const item = items.get(id);
    if (!item) return;
    currentId = id;
    opener = trigger || document.getElementById(id)?.querySelector('[data-service-details]');
    const heroImage = dialog.querySelector('.svc-dialog-hero>img');
    heroImage.src = item.image;heroImage.alt = item.imageAlt;
    const icon = dialog.querySelector('.svc-dialog-category img');icon.src = item.icon;
    setText('.svc-dialog-category span',data.labels.dialogCategory);
    setText('#svc-detail-title',item.title);
    const specs = item.specifications?.length ? `<h3>${text(data.labels.specifications)}</h3><ul class="svc-dialog-specs">${item.specifications.map(spec => `<li><strong>${text(spec.title.replace(/^\d+\.\s*/,''))}:</strong> ${text(spec.description)}</li>`).join('')}</ul>` : item.note ? `<p>${text(item.note)}</p>` : '';
    html('.svc-dialog-body',`<p>${text(item.introduction)}</p>${specs}<h3>${text(data.labels.process)}</h3><ol class="svc-timeline">${(item.steps || data.process).map((step,index) => `<li><span class="svc-step-number">${index+1}</span><div class="svc-step-copy"><h4>${text(step.title)}</h4><p>${text(step.description)}</p></div></li>`).join('')}</ol>`);
    if (!dialog.open) dialog.showModal();
    dialog.querySelector('.svc-dialog-scroll').scrollTop = 0;
    document.body.classList.add('svc-detail-open');
    close.focus({preventScroll:true});
  }
  document.addEventListener('click',event => {
    const trigger = event.target.closest('[data-service-details]');
    if (!trigger) return;
    event.preventDefault();
    const id = trigger.dataset.serviceDetails;
    if (!items.has(id)) return;
    setHash(id);
    openDetails(id,trigger);
  });
  close.addEventListener('click',() => dialog.close());
  const outside = event => {
    const bounds = dialog.getBoundingClientRect();
    return event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
  };
  let backdropStart = false;
  dialog.addEventListener('pointerdown',event => { backdropStart = event.target === dialog && outside(event); });
  dialog.addEventListener('click',event => { if (backdropStart && event.target === dialog && outside(event)) dialog.close();backdropStart=false; });
  dialog.addEventListener('close',() => {
    document.body.classList.remove('svc-detail-open');
    if (!changingHistory && hashId() === currentId) setHash('',true);
    opener?.focus({preventScroll:true});
  });
  function syncHash() {
    const id = hashId();
    if (items.has(id)) {
      document.getElementById(id)?.scrollIntoView({block:'center',behavior:'instant'});
      openDetails(id);
    } else if (dialog.open) {
      changingHistory=true;
      dialog.close();
      // close được phát ở vòng sự kiện kế tiếp; giữ cờ đến khi xử lý xong.
      setTimeout(() => { changingHistory=false; },0);
    }
  }
  window.addEventListener('hashchange',syncHash);
  window.addEventListener('popstate',syncHash);
  syncHash();
})();
