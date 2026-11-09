/* Kaliny Girardi Advocacia — interações discretas de alto padrão.
   Tudo é opcional: sem JavaScript, ou com "reduzir movimento" ligado, o site continua completo. */
(function(){
  'use strict';
  var reduced=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine=window.matchMedia&&matchMedia('(hover: hover) and (pointer: fine)').matches;

  // 1) menu: destaca a seção visível
  var links=[].slice.call(document.querySelectorAll('.navlinks a[href^="#"]:not(.nav-cta)'));
  var map={};links.forEach(function(a){var id=a.getAttribute('href').slice(1);var s=document.getElementById(id);if(s)map[id]=a});
  if('IntersectionObserver' in window&&links.length){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){var a=map[e.target.id];if(!a)return;if(e.isIntersecting){links.forEach(function(l){l.classList.remove('is-active')});a.classList.add('is-active')}})},{rootMargin:'-45% 0px -50% 0px'});
    Object.keys(map).forEach(function(id){io.observe(document.getElementById(id))});
  }

  // 2) linha do tempo do atendimento
  var steps=document.querySelector('.service-steps');
  if(steps){if(reduced||!('IntersectionObserver' in window))steps.classList.add('in-view');else{var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){steps.classList.add('in-view');so.disconnect()}})},{threshold:.35});so.observe(steps)}}

  // 3) luz que acompanha o cursor nos cartões das áreas
  if(fine&&!reduced){document.querySelectorAll('.area').forEach(function(c){c.addEventListener('pointermove',function(ev){var r=c.getBoundingClientRect();c.style.setProperty('--mx',(ev.clientX-r.left)+'px');c.style.setProperty('--my',(ev.clientY-r.top)+'px')})})}

  // 4) botões principais com leve atração ao cursor
  if(fine&&!reduced){document.querySelectorAll('.hero-actions .btn,.cta-actions .btn,.faq-intro .btn').forEach(function(b){
    b.addEventListener('pointermove',function(ev){var r=b.getBoundingClientRect(),x=(ev.clientX-r.left-r.width/2)/r.width,y=(ev.clientY-r.top-r.height/2)/r.height;b.style.transform='translate('+(x*8).toFixed(1)+'px,'+(y*6).toFixed(1)+'px)'});
    b.addEventListener('pointerleave',function(){b.style.transform=''})})}

  // 5) profundidade suave nas fotos (hero e sobre)
  if(!reduced){var par=[].slice.call(document.querySelectorAll('.hero-visual>img,.about-photo img'));var ticking=false;
    var run=function(){ticking=false;var vh=innerHeight;par.forEach(function(img){var r=img.parentNode.getBoundingClientRect();if(r.bottom<0||r.top>vh)return;var c=(r.top+r.height/2-vh/2)/vh;img.style.transform='translate3d(0,'+(c*-26).toFixed(1)+'px,0)'})};
    addEventListener('scroll',function(){if(!ticking){ticking=true;requestAnimationFrame(run)}},{passive:true});run()}

  // 6) perguntas frequentes: abre e fecha com animação (sem JS, funciona do mesmo jeito)
  document.querySelectorAll('.faq-list details').forEach(function(d){
    var s=d.querySelector('summary'),body=d.querySelector('.faq-answer');if(!s||!body||reduced)return;
    s.addEventListener('click',function(ev){ev.preventDefault();
      if(d.open){var h=body.scrollHeight;body.animate([{height:h+'px',opacity:1},{height:'0px',opacity:0}],{duration:320,easing:'cubic-bezier(.22,.61,.36,1)'}).onfinish=function(){d.open=false}}
      else{d.open=true;var h2=body.scrollHeight;body.animate([{height:'0px',opacity:0},{height:h2+'px',opacity:1}],{duration:420,easing:'cubic-bezier(.16,1,.3,1)'})}
      s.setAttribute('aria-expanded',String(!d.open))});
  });

  // 7) nada fica escondido: se a animação de entrada não rodar, mostra o conteúdo
  setTimeout(function(){document.querySelectorAll('.js-reveal:not(.revealed),.reveal-left:not(.revealed),.reveal-right:not(.revealed)').forEach(function(el){var r=el.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)el.classList.add('revealed')})},1800);
})();
