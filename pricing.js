'use strict';

(() => {
  const data = window.PRICING_DATA;
  const shared = window.SITE_DATA;
  if (!data || !shared) return;
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char => ({
    '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'
  })[char]);
  const setText = (selector,value) => { document.querySelector(selector).textContent=value; };
  document.title=data.page.title;
  document.querySelector('meta[name="description"]').content=data.page.description;
  setText('.pricing-eyebrow span',data.page.eyebrow);
  document.querySelector('.pricing-title').innerHTML=`${escape(data.page.heading)}<span>${escape(data.page.titleHighlight)}</span>`;
  setText('.pricing-subtitle',data.page.subtitle);
  setText('.pricing-sheet-kicker',data.table.kicker);
  setText('#pricing-table-title',data.table.title);
  setText('.pricing-table caption',data.table.caption);
  document.querySelector('.pricing-table thead').innerHTML=`<tr>${data.table.columns.map(column=>`<th id="pricing-column-${escape(column.key)}" scope="col">${escape(column.label)}</th>`).join('')}</tr>`;
  const empty = `<span class="pricing-empty" aria-hidden="true">${escape(data.table.emptyText)}</span><span class="pricing-sr-only">${escape(data.table.emptyLabel)}</span>`;
  document.querySelector('.pricing-table tbody').innerHTML=data.table.rows.map((row,index)=>`<tr>${data.table.columns.map(column=>{
    let content;
    if(column.key==='product'){
      const name=row.href?`<a class="pricing-product-name" href="${escape(row.href)}">${escape(row.product)}</a>`:`<span class="pricing-product-name">${escape(row.product)}</span>`;
      content=`<div class="pricing-product">${row.icon?`<span class="pricing-product-icon"><img src="${escape(row.icon)}" width="25" height="25" alt=""></span>`:''}<div><span class="pricing-row-number">${String(index+1).padStart(2,'0')}</span>${name}</div></div>`;
    }else content=String(row[column.key]??'').trim()?escape(row[column.key]):empty;
    return `<td data-key="${escape(column.key)}" data-label="${escape(column.label)}" headers="pricing-column-${escape(column.key)}">${content}</td>`;
  }).join('')}</tr>`).join('');
  setText('.pricing-sheet-note p',data.table.note);
  setText('#pricing-guide-title',data.guide.title);
  setText('.pricing-guide-heading>p',data.guide.description);
  document.querySelector('.pricing-guide-grid').innerHTML=data.guide.items.map((item,index)=>`<li><span aria-hidden="true">${String(index+1).padStart(2,'0')}</span><h3>${escape(item.title)}</h3><p>${escape(item.description)}</p></li>`).join('');
  setText('.pricing-cta-kicker',data.cta.kicker);
  setText('#pricing-cta-title',data.cta.title);
  setText('.pricing-cta-description',data.cta.description);
  document.querySelector('.pricing-request').innerHTML=`${escape(data.cta.buttonLabel)} <span aria-hidden="true">↗</span>`;
  setText('.pricing-phone-label',data.cta.phoneLabel);
  const phone=document.querySelector('.pricing-phone');phone.textContent=shared.contact.phoneDisplay;phone.href=`tel:${shared.contact.phone}`;
  const email=document.querySelector('.pricing-email');email.textContent=`${data.cta.emailLabel} →`;email.href=`mailto:${shared.contact.email}`;
})();
