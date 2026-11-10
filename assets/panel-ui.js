/* Kaliny Girardi Advocacia — painel: ícones de traço fino no lugar dos emojis,
   telas vazias com a próxima ação e esqueleto de carregamento no primeiro acesso.
   Só mexe em rótulos do sistema: nunca em campos de texto nem em conteúdo digitado. */
(function(){
  'use strict';
  var C=function(cx,cy,r){return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'"/>'},R=function(x,y,w,h,rx){return '<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="'+(rx||2)+'"/>'},P=function(d){return '<path d="'+d+'"/>'};
  var I={
    alert:P('M12 3.5 2.8 19.5h18.4z')+P('M12 10v4.2M12 17h.01'),
    scale:P('M12 4v16M6 20h12M4.5 7.5h15')+P('M7.5 7.5 4.5 14a3 3 0 0 0 6 0zM16.5 7.5l-3 6.5a3 3 0 0 0 6 0z'),
    file:P('M14 3H6.5v18h11V6.5z')+P('M14 3v3.5h3.5M9 12.5h6M9 16h6'),
    clock:C(12,12,8.5)+P('M12 7.5V12l3 1.8'),
    message:P('M20.5 12a8.5 8.5 0 0 1-12.3 7.6L3.5 21l1.4-4.6A8.5 8.5 0 1 1 20.5 12z'),
    calendar:R(3.5,5,17,15.5,2)+P('M3.5 10h17M8 3v4M16 3v4'),
    trash:P('M4.5 7h15M9.5 7V4.5h5V7M6.5 7l.9 12.5h9.2L17.5 7M10.3 10.8v5.4M13.7 10.8v5.4'),
    money:C(12,12,8.5)+P('M14.6 9.6c-.6-.9-1.6-1.4-2.7-1.4-1.5 0-2.6.8-2.6 1.9 0 2.6 5.5 1.3 5.5 3.9 0 1.1-1.2 2-2.8 2-1.2 0-2.3-.5-2.9-1.4M12 6.6v1.6M12 15.9v1.5'),
    timer:C(12,13.5,7.5)+P('M12 10v3.7l2.4 1.4M10 3h4'),
    sparkle:P('M12 3.5l1.7 4.6 4.6 1.7-4.6 1.7L12 16.1l-1.7-4.6L5.7 9.8l4.6-1.7zM18.5 15.5l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7z'),
    edit:P('M4.5 19.5h4l10.5-10.5-4-4L4.5 15.5zM13.5 6.5l4 4'),
    calc:R(5,3,14,18,2)+P('M8.5 7h7M8.5 11.5h.01M12 11.5h.01M15.5 11.5h.01M8.5 15h.01M12 15h.01M15.5 15h.01'),
    receipt:P('M6 3.5h12v17l-3-2-3 2-3-2-3 2zM9 8.5h6M9 12h6M9 15.5h3.5'),
    user:C(12,8,3.6)+P('M5 20c.9-3.7 3.7-5.8 7-5.8s6.1 2.1 7 5.8'),
    users:C(9,8.5,3.2)+P('M3 19.5c.7-3.3 3.1-5 6-5s5.3 1.7 6 5M15.5 5.2a3.2 3.2 0 0 1 0 6.2M17.7 14.8c1.6.7 2.7 2.3 3.1 4.7'),
    help:C(12,12,8.5)+P('M9.6 9.4a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1.1.8-1.1 1.5v.6M12 16.8h.01'),
    bell:P('M6.5 15.5V11a5.5 5.5 0 1 1 11 0v4.5l1.5 2h-14zM10 20a2 2 0 0 0 4 0'),
    phone:R(7,2.5,10,19,2)+P('M11 18h2'),
    chart:P('M4 20h16M7.5 16v-4.5M12 16V7.5M16.5 16v-7'),
    home:P('M4 11 12 4l8 7M6.5 9.5V20h11V9.5'),
    clipboard:R(5.5,4.5,13,16.5,2)+P('M9 4.5V3h6v1.5M9 10h6M9 13.5h6M9 17h3.5'),
    star:P('M12 3.8l2.5 5.1 5.6.8-4.1 4 1 5.6-5-2.6-5 2.6 1-5.6-4.1-4 5.6-.8z'),
    search:C(11,11,6.5)+P('M16 16l4.5 4.5'),
    check:C(12,12,8.5)+P('M8.3 12.4l2.5 2.5 4.9-5.3'),
    folder:P('M3.5 6.5h5.5l2 2h9.5V19H3.5z'),
    clip:P('M19.5 11.5l-7.8 7.8a4.8 4.8 0 0 1-6.8-6.8l8.2-8.2a3.2 3.2 0 0 1 4.6 4.6l-8.2 8.2a1.6 1.6 0 0 1-2.3-2.3l7.6-7.6'),
    cloud:P('M7 18.5a4.5 4.5 0 0 1-.6-9 6 6 0 0 1 11.6 1.6 3.7 3.7 0 0 1-.5 7.4z'),
    hand:P('M3 11.5 7 7.5l3.5 1.5 2.5-1.5 3.5.5 4.5 4.5M7 7.5l-4 4 5.5 5.5 1.8-1M20.9 12l-6.4 6.4-2.6-.8M10.3 16l2-2M12.7 17.3l2-2'),
    pin:P('M12 21s6.5-5.7 6.5-11.2a6.5 6.5 0 1 0-13 0C5.5 15.3 12 21 12 21z')+C(12,9.8,2.3),
    moon:P('M19.5 14.6A7.8 7.8 0 0 1 9.4 4.5a7.8 7.8 0 1 0 10.1 10.1z'),
    bulb:P('M9.5 18h5M10.5 21h3M12 3a6 6 0 0 0-3.6 10.8c.6.5 1.1 1.2 1.1 2V16h5v-.2c0-.8.5-1.5 1.1-2A6 6 0 0 0 12 3z'),
    idcard:R(3,5,18,14,2)+C(8.8,11,2)+P('M5.8 16c.5-1.4 1.6-2.2 3-2.2s2.5.8 3 2.2M14.5 10h4M14.5 13.5h4'),
    shield:P('M12 3.2 5 6v5.4c0 4.4 3 8 7 9.4 4-1.4 7-5 7-9.4V6z'),
    upload:P('M12 19V5.5M6.5 11 12 5.5 17.5 11'),
    gear:C(12,12,3)+P('M19.2 14.8a1.5 1.5 0 0 0 .3 1.6l.1.1a1.9 1.9 0 1 1-2.7 2.7l-.1-.1a1.5 1.5 0 0 0-1.6-.3 1.5 1.5 0 0 0-.9 1.4v.2a1.9 1.9 0 1 1-3.8 0v-.1a1.5 1.5 0 0 0-1-1.4 1.5 1.5 0 0 0-1.6.3l-.1.1a1.9 1.9 0 1 1-2.7-2.7l.1-.1a1.5 1.5 0 0 0 .3-1.6 1.5 1.5 0 0 0-1.4-.9h-.2a1.9 1.9 0 1 1 0-3.8h.1a1.5 1.5 0 0 0 1.4-1 1.5 1.5 0 0 0-.3-1.6l-.1-.1a1.9 1.9 0 1 1 2.7-2.7l.1.1a1.5 1.5 0 0 0 1.6.3h.1a1.5 1.5 0 0 0 .9-1.4v-.2a1.9 1.9 0 1 1 3.8 0v.1a1.5 1.5 0 0 0 .9 1.4 1.5 1.5 0 0 0 1.6-.3l.1-.1a1.9 1.9 0 1 1 2.7 2.7l-.1.1a1.5 1.5 0 0 0-.3 1.6v.1a1.5 1.5 0 0 0 1.4.9h.2a1.9 1.9 0 1 1 0 3.8h-.1a1.5 1.5 0 0 0-1.4.9z'),
    grid:R(3.5,3.5,7,7,1.5)+R(13.5,3.5,7,7,1.5)+R(3.5,13.5,7,7,1.5)+R(13.5,13.5,7,7,1.5),
    wallet:P('M3.5 7.5h15a2.5 2.5 0 0 1 2.5 2.5v8.5H3.5zM3.5 7.5l11-3.5v3.5M16.5 13h.01'),
    swap:P('M16.5 3.5l3.5 3.5-3.5 3.5M4 7h16M7.5 20.5 4 17l3.5-3.5M20 17H4'),
    pie:P('M21 12a9 9 0 1 1-9-9v9z M14 2.3A9 9 0 0 1 21.7 10H14z'),
    checksq:R(3.5,3.5,17,17,2.5)+P('M8 12.2l2.8 2.8 5.2-5.6'),
    logout:P('M14.5 4h4.5v16h-4.5M10 8l-4 4 4 4M6 12h10'),
    pencil:P('M12 20h8M16.5 3.5a2.1 2.1 0 0 1 3 3L7.5 18.5l-4 1 1-4z'),
    lock:R(5,10.5,14,10,2)+P('M8 10.5V7.5a4 4 0 0 1 8 0v3')
  };
  // emojis do sistema -> ícone (null = só remove o emoji decorativo)
  var MAP={'⚠':'alert','⚖':'scale','📄':'file','⏳':'clock','💬':'message','📅':'calendar','🗓':'calendar','🗑':'trash','💰':'money','💲':'money','⏱':'timer','🎉':'sparkle','✨':'sparkle',
    '📝':'edit','✍':'pencil','🧮':'calc','🧾':'receipt','👤':'user','👥':'users','👨':'user','👩':'user','👧':'user','👵':'user','❓':'help','🔔':'bell','📱':'phone','☎':'phone','📊':'chart','🏠':'home',
    '📋':'clipboard','⭐':'star','🔎':'search','✅':'check','📂':'folder','📎':'clip','☁':'cloud','🤝':'hand','📍':'pin','💤':'moon','💡':'bulb','🪪':'idcard','🛡':'shield','⬆':'upload','⚙':'gear','👋':null,'🔒':'lock'};
  var NAV={'◈':'grid','♙':'users','▣':'calendar','◫':'wallet','⇄':'swap','◔':'pie','⚖':'scale','☑':'checksq','⌁':'calc','▤':'folder','⚙':'gear','❓':'help','↩':'logout'};
  var keys=Object.keys(MAP).sort(function(a,b){return b.length-a.length}).map(function(k){return k.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')});
  var RE=new RegExp('('+keys.join('|')+')\\uFE0F?','g'),NAVRE=/^\s*([◈♙▣◫⇄◔⚖☑⌁▤⚙❓↩])️?\s*/;
  var svg=function(name){return '<svg class="ki" viewBox="0 0 24 24" aria-hidden="true" focusable="false">'+I[name]+'</svg>'};
  var SKIP={TEXTAREA:1,INPUT:1,SELECT:1,OPTION:1,SCRIPT:1,STYLE:1,NOSCRIPT:1,PRE:1,CODE:1,svg:1,SVG:1};
  var userContent='[contenteditable],.note-text,.history-item p,.tm-com,.cp-note,.doc-preview,.ki-skip';
  function convertText(t){
    var p=t.parentNode;if(!p||SKIP[p.nodeName]||(p.closest&&p.closest(userContent)))return;
    var s=t.nodeValue;if(!s)return;
    // menu lateral: símbolo no começo do botão
    if(p.closest&&p.closest('.dash-nav')&&NAVRE.test(s)){var m=NAVRE.exec(s);var span=document.createElement('span');span.className='ki-wrap';span.innerHTML=svg(NAV[m[1]]);p.insertBefore(span,t);t.nodeValue=s.replace(NAVRE,'');return}
    RE.lastIndex=0;if(!RE.test(s))return;RE.lastIndex=0;
    var frag=document.createDocumentFragment(),last=0,m2;
    while((m2=RE.exec(s))){if(m2.index>last)frag.appendChild(document.createTextNode(s.slice(last,m2.index)));var name=MAP[m2[1]];
      if(name){var w=document.createElement('span');w.className='ki-wrap';w.innerHTML=svg(name);frag.appendChild(w)}last=RE.lastIndex}
    var rest=s.slice(last);if(rest)frag.appendChild(document.createTextNode(rest));
    // emoji decorativo removido: tira o espaço que sobrava
    p.replaceChild(frag,t);
  }
  function scan(root){if(!root)return;if(root.nodeType===3){convertText(root);return}if(root.nodeType!==1||SKIP[root.nodeName])return;
    var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,null),list=[],n;while((n=w.nextNode()))list.push(n);list.forEach(convertText)}
  var pending=[],timer=0;
  function flush(){timer=0;var l=pending;pending=[];l.forEach(scan)}
  var mo=new MutationObserver(function(ms){ms.forEach(function(m){if(m.type==='characterData')pending.push(m.target);else m.addedNodes.forEach(function(n){pending.push(n)})});if(!timer)timer=requestAnimationFrame(flush)});
  function start(){scan(document.body);mo.observe(document.body,{childList:true,subtree:true,characterData:true});emptyStates();loading()}
  // ---------- telas vazias com a próxima ação ----------
  var COLLAB=(typeof session!=='undefined'&&session&&session.role==='colaboradora');
  var ACT=[
    {sel:'#page-finance .fa-empty',label:'+ Novo lançamento',run:function(){if(window.openFinanceForm)window.openFinanceForm('')}},
    {sel:'#page-processes .empty',label:'+ Novo processo',run:function(){var b=document.getElementById('newProcess');if(b)b.click()}},
    {sel:'#page-clients .empty',label:'+ Novo cliente',run:function(){var b=document.getElementById('newClient');if(b)b.click()}},
    {sel:'#page-overview .empty,#page-agenda .empty',match:/Agenda livre/,label:'+ Novo compromisso',run:function(){var b=document.getElementById('newEvent');if(b)b.click()}}
  ];
  function emptyStates(){if(COLLAB)return;ACT.forEach(function(a){document.querySelectorAll(a.sel).forEach(function(el){if(el.querySelector('.empty-act'))return;if(a.match&&!a.match.test(el.textContent))return;
    var b=document.createElement('button');b.type='button';b.className='d-btn light empty-act';b.textContent=a.label;b.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();a.run()});el.appendChild(document.createElement('br'));el.appendChild(b)})})}
  var emo=new MutationObserver(function(){if(!emo.t)emo.t=setTimeout(function(){emo.t=0;emptyStates()},60)});
  // ---------- esqueleto no primeiro carregamento ----------
  function loading(){var badge=document.getElementById('syncStatus');var d=(typeof data!=='undefined'&&data)||{};var empty=!((d.clients||[]).length||(d.finance||[]).length||(d.processes||[]).length);
    if(!badge||!empty)return;document.body.classList.add('kg-loading');
    var done=function(){document.body.classList.remove('kg-loading');bo.disconnect()};
    var bo=new MutationObserver(function(){if(!/Sincronizando/i.test(badge.textContent))done()});bo.observe(badge,{childList:true,characterData:true,subtree:true});setTimeout(done,9000)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){start();emo.observe(document.body,{childList:true,subtree:true})});else{start();emo.observe(document.body,{childList:true,subtree:true})}
  window.kalinyIcons={svg:svg,scan:scan};
})();

/* ---------- resposta imediata às ações (curta, sem atrasar quem trabalha rápido) ---------- */
(function(){
  'use strict';
  var reduced=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;if(reduced)return;
  var ATTRS=['data-fa-toggle','data-fa-edit','data-tm-toggle','data-tm-edit','data-k-done','data-tm-comment'];
  var pend=null;
  var rowOf=function(el){return el&&el.closest&&el.closest('.fa-row,.tm-card,.tm-l,.history-item,.k-row,tr')};
  var flash=function(){if(!pend)return;var p=pend;var els=[].slice.call(document.querySelectorAll('['+p.a+'="'+(window.CSS&&CSS.escape?CSS.escape(p.v):p.v)+'"]')).filter(function(x){return x.offsetWidth||x.offsetHeight||x.getClientRects().length});var rows=els.map(rowOf).filter(Boolean);if(!rows.length)return;
    // se a lista for redesenhada durante o destaque, a linha nova também pisca (até o fim do mesmo 1,1 s)
    var fresh=!p.until;if(fresh){p.until=Date.now()+1100;setTimeout(function(){if(pend===p)pend=null},1100)}
    rows.forEach(function(row){if(!fresh&&row.classList.contains('kg-flash'))return;row.classList.remove('kg-flash');void row.offsetWidth;row.classList.add('kg-flash');setTimeout(function(){row.classList.remove('kg-flash')},Math.max(0,p.until-Date.now()))})};
  document.addEventListener('click',function(e){var t=e.target&&e.target.closest&&e.target.closest(ATTRS.map(function(a){return '['+a+']'}).join(','));if(!t)return;
    for(var i=0;i<ATTRS.length;i++){var v=t.getAttribute(ATTRS[i]);if(v){pend={a:ATTRS[i]==='data-fa-edit'?'data-fa-edit':ATTRS[i],v:v,edit:/edit|comment/.test(ATTRS[i]),at:Date.now()};break}}
    if(pend&&!pend.edit)setTimeout(flash,30)},true);
  // edição: destaca a linha quando a janela fecha salvando
  document.addEventListener('submit',function(e){if(pend&&pend.edit&&e.target&&e.target.closest&&e.target.closest('#modal'))setTimeout(flash,60)},true);
  var mo=new MutationObserver(function(){if(!pend)return;if(pend.until?Date.now()<pend.until:(!pend.edit&&Date.now()-pend.at<4000))flash()});mo.observe(document.body,{childList:true,subtree:true});
})();
