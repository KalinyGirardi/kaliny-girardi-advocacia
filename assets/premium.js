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

/* ---------- assistente "Qual é o seu caso?" e próximos horários livres ---------- */
(function(){
  'use strict';
  var WD=['dom','seg','ter','qua','qui','sex','sáb'],pad=function(n){return String(n).padStart(2,'0')};
  var parse=function(s){var m=/^(\d{4})-(\d{2})-(\d{2})$/.exec(s||'');return m?new Date(+m[1],m[2]-1,+m[3],12):null};
  var WA='5545998434981';
  var AREAS={'Família e Sucessões':{slug:'familia-e-sucessoes',txt:'Divórcio, pensão, guarda, união estável, inventário e planejamento familiar, com escuta e cuidado.'},
    'Previdenciário':{slug:'previdenciario',txt:'Aposentadoria, benefícios do INSS e salário-maternidade: entender os seus direitos e o melhor caminho.'},
    'Imobiliário':{slug:'imobiliario',txt:'Compra e venda, contratos, aluguel e regularização de imóveis, com segurança em cada etapa.'},
    'Consumidor':{slug:'consumidor',txt:'Problemas com compras, serviços, bancos e cobranças: orientação para resolver a situação.'},
    'Cível':{slug:'civel',txt:'Contratos, dívidas, indenizações e conflitos do dia a dia, com estratégia e clareza.'},
    'Consulta jurídica geral':{slug:'',txt:'Sem problema não saber a área: na consulta você conta o que aconteceu e a Kaliny indica o caminho.'}};
  function nextSlots(cache,n){var out=[];Object.keys(cache||{}).sort().forEach(function(d){(cache[d]||[]).forEach(function(t){out.push({d:d,t:t})})});
    var now=new Date(),today=now.getFullYear()+'-'+pad(now.getMonth()+1)+'-'+pad(now.getDate()),hm=pad(now.getHours())+':'+pad(now.getMinutes());
    return out.filter(function(x){return x.d>today||(x.d===today&&x.t>hm)}).slice(0,n)}
  function slotBtn(x){var d=parse(x.d);return '<button type="button" class="slot" data-slot-d="'+x.d+'" data-slot-t="'+x.t+'"><small>'+WD[d.getDay()]+' · '+pad(d.getDate())+'/'+pad(d.getMonth()+1)+'</small><b>'+x.t+'</b></button>'}

  // ---- assistente ----
  var card=document.getElementById('guideCard');
  if(card){
    var st={area:'',mode:''},steps=[].slice.call(document.querySelectorAll('.guide-steps li'));
    var show=function(n){card.querySelectorAll('.guide-step').forEach(function(s){s.hidden=s.getAttribute('data-step')!==String(n)});
      steps.forEach(function(li,i){li.classList.toggle('on',i===n-1);li.classList.toggle('done',i<n-1)});
      var f=card.querySelector('.guide-step:not([hidden]) button');if(f&&document.activeElement&&card.contains(document.activeElement))f.focus({preventScroll:true})};
    var result=function(){var a=AREAS[st.area]||AREAS['Consulta jurídica geral'],geral=st.area==='Consulta jurídica geral';
      document.getElementById('guideTitle').innerHTML=geral?'Uma <em>consulta jurídica geral</em> é o melhor começo.':'A área indicada é <em>'+st.area+'</em>.';
      document.getElementById('guideText').textContent=a.txt+' Atendimento '+(st.mode==='Online'?'online, por videochamada.':'presencial, no escritório em Cascavel.');
      var more=document.getElementById('guideMore');if(a.slug){more.hidden=false;more.href='areas/'+a.slug+'.html';more.textContent='Saiba mais sobre '+st.area+' →'}else more.hidden=true;
      document.getElementById('guideWa').href='https://wa.me/'+WA+'?text='+encodeURIComponent('Olá! Vim pelo site da Kaliny Girardi Advocacia. Tenho uma dúvida sobre '+(geral?'um assunto jurídico':st.area)+' e gostaria de atendimento '+st.mode.toLowerCase()+'.');
      var box=document.getElementById('guideSlots');
      if(window.kgSlots){box.innerHTML='<span class="slot-loading">Buscando os próximos horários…</span>';window.kgSlots().then(function(c){var l=nextSlots(c,4);box.innerHTML=l.length?'<span class="slot-label">Próximos horários livres</span>'+l.map(slotBtn).join(''):''}).catch(function(){box.innerHTML=''})}else box.innerHTML='';
      show(3)};
    card.addEventListener('click',function(e){var b=e.target.closest('button,a');if(!b)return;
      if(b.hasAttribute('data-g-area')){st.area=b.getAttribute('data-g-area');card.querySelectorAll('[data-g-area]').forEach(function(x){x.classList.toggle('on',x===b)});setTimeout(function(){show(2)},180)}
      else if(b.hasAttribute('data-g-mode')){st.mode=b.getAttribute('data-g-mode');card.querySelectorAll('[data-g-mode]').forEach(function(x){x.classList.toggle('on',x===b)});setTimeout(result,180)}
      else if(b.hasAttribute('data-g-back'))show(1);
      else if(b.hasAttribute('data-g-restart')){st={area:'',mode:''};card.querySelectorAll('.on').forEach(function(x){x.classList.remove('on')});show(1)}
      else if(b.hasAttribute('data-g-book')){if(window.kgBook)window.kgBook({area:st.area,mode:st.mode})}
      else if(b.hasAttribute('data-slot-d')){if(window.kgBook)window.kgBook({area:st.area,mode:st.mode,date:b.getAttribute('data-slot-d'),time:b.getAttribute('data-slot-t')})}});
  }

  // ---- próximos horários na seção de agendamento ----
  var wrap=document.getElementById('ctaSlots'),list=document.getElementById('ctaSlotsList');
  if(wrap&&list&&window.kgSlots){
    var fill=function(){window.kgSlots().then(function(c){var l=nextSlots(c,6);if(!l.length){wrap.hidden=true;return}
      list.innerHTML=l.map(slotBtn).join('')+'<button type="button" class="slot more" data-slot-all>Ver todos →</button>';wrap.hidden=false}).catch(function(){wrap.hidden=true})};
    if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){if(es.some(function(e){return e.isIntersecting})){io.disconnect();fill()}},{rootMargin:'400px 0px'});io.observe(wrap.closest('section')||wrap)}else fill();
    list.addEventListener('click',function(e){var b=e.target.closest('button');if(!b||!window.kgBook)return;
      if(b.hasAttribute('data-slot-all'))window.kgBook({});else window.kgBook({date:b.getAttribute('data-slot-d'),time:b.getAttribute('data-slot-t')})});
  }
})();

/* ---------- interações mais visíveis ---------- */
(function(){
  'use strict';
  var reduced=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine=window.matchMedia&&matchMedia('(hover: hover) and (pointer: fine)').matches;
  // 1) título do topo em linhas (cortina)
  var h1=document.querySelector('.hero-copy h1');
  if(h1&&!reduced&&!h1.querySelector('.ln')){var parts=[[]];[].slice.call(h1.childNodes).forEach(function(n){if(n.nodeName==='BR')parts.push([]);else parts[parts.length-1].push(n)});
    h1.innerHTML='';parts.forEach(function(ns){var ln=document.createElement('span');ln.className='ln';var inner=document.createElement('span');ns.forEach(function(n){inner.appendChild(n)});ln.appendChild(inner);h1.appendChild(ln)})}
  // 2) palavras dos títulos
  var heads=[].slice.call(document.querySelectorAll('main h2:not(#areaModalTitle):not(#videoTitle):not(#appointmentTitle):not(.guide-step h3), section.reviews h2, section.location h2'));
  var split=function(el){var i=0;var walk=function(node){[].slice.call(node.childNodes).forEach(function(n){
      if(n.nodeType===3){var frag=document.createDocumentFragment();n.textContent.split(/(\s+)/).forEach(function(t){if(!t)return;if(/^\s+$/.test(t)){frag.appendChild(document.createTextNode(t));return}
        var w=document.createElement('span');w.className='w';var s=document.createElement('span');s.textContent=t;s.style.setProperty('--i',i++);w.appendChild(s);frag.appendChild(w)});node.replaceChild(frag,n)}
      else if(n.nodeType===1&&n.nodeName!=='BR')walk(n)})};walk(el);el.classList.add('split')};
  if(!reduced&&'IntersectionObserver' in window){heads.forEach(function(h){if(h.closest('[aria-hidden="true"]'))return;split(h)});
    var hio=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('words-in');hio.unobserve(e.target)}})},{threshold:.2});
    document.querySelectorAll('h2.split').forEach(function(h){hio.observe(h)});
    setTimeout(function(){document.querySelectorAll('h2.split:not(.words-in)').forEach(function(h){var r=h.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)h.classList.add('words-in')})},2000)}
  // 3) fotos em cortina
  if(!reduced&&'IntersectionObserver' in window){var imgs=[].slice.call(document.querySelectorAll('.about-photo img,.guide-card'));
    var go=function(el){if(el.tagName==='IMG'&&!el.complete){el.addEventListener('load',function(){el.classList.add('wiped')},{once:true});el.addEventListener('error',function(){el.classList.add('wiped')},{once:true});setTimeout(function(){el.classList.add('wiped')},4000)}else el.classList.add('wiped')};
    var wio=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){go(e.target);wio.unobserve(e.target)}})},{threshold:.15,rootMargin:'0px 0px 200px 0px'});
    imgs.forEach(function(im){if(im.classList.contains('guide-card'))return;im.classList.add('img-wipe');wio.observe(im)});
    setTimeout(function(){document.querySelectorAll('.img-wipe:not(.wiped)').forEach(function(el){var r=el.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)el.classList.add('wiped')})},2000)}
  // 4) foto do topo inclina com o mouse
  var hv=document.querySelector('.hero-visual');
  if(hv&&fine&&!reduced){var card=hv.querySelector('.hero-card');
    hv.addEventListener('pointermove',function(ev){var r=hv.getBoundingClientRect(),x=(ev.clientX-r.left)/r.width-.5,y=(ev.clientY-r.top)/r.height-.5;hv.style.transform='rotateY('+(x*5).toFixed(2)+'deg) rotateX('+(-y*4).toFixed(2)+'deg)';if(card)card.style.transform='translate3d('+(x*-18).toFixed(1)+'px,'+(y*-14).toFixed(1)+'px,0)'});
    hv.addEventListener('pointerleave',function(){hv.style.transform='';if(card)card.style.transform=''});hv.style.transition='transform .8s cubic-bezier(.16,1,.3,1)';hv.style.transformStyle='preserve-3d'}
  // 5) cursor dourado
  if(fine&&!reduced){var ring=document.createElement('div'),dot=document.createElement('div');ring.className='kg-cursor';dot.className='kg-cursor-dot';ring.setAttribute('aria-hidden','true');dot.setAttribute('aria-hidden','true');document.body.appendChild(ring);document.body.appendChild(dot);
    var mx=-100,my=-100,rx=-100,ry=-100,raf=0;
    var loop=function(){rx+=(mx-rx)*.18;ry+=(my-ry)*.18;ring.style.transform='translate3d('+rx.toFixed(1)+'px,'+ry.toFixed(1)+'px,0)';raf=(Math.abs(mx-rx)>.1||Math.abs(my-ry)>.1)?requestAnimationFrame(loop):0};
    addEventListener('pointermove',function(e){if(e.pointerType!=='mouse')return;mx=e.clientX;my=e.clientY;dot.style.transform='translate3d('+mx+'px,'+my+'px,0)';ring.classList.add('on');dot.classList.add('on');if(!raf)raf=requestAnimationFrame(loop);
      var t=e.target,inter=t.closest&&t.closest('a,button,summary,select,input,textarea,label,[role=button]'),dk=t.closest&&t.closest('.values,.guide,.cta,footer,.marquee,.area:hover');ring.classList.toggle('big',!!inter);ring.classList.toggle('dark',!!dk)},{passive:true});
    document.addEventListener('pointerleave',function(){ring.classList.remove('on');dot.classList.remove('on')});
    addEventListener('blur',function(){ring.classList.remove('on');dot.classList.remove('on')})}
})();
