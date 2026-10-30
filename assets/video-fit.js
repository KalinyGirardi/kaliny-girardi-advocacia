/* Enquadra o player do Instagram no formato vertical (9:16) e do tamanho da tela, sem rolagem — PC e celular. */
(function(){
  var HEADER=54; // barra do Instagram acima do vídeo (perfil e "Ver perfil")
  function fit(frame){
    if(!frame||frame.hidden)return;
    var box=frame.closest('.video-modal,.kl-modal');if(!box)return;
    var other=0;[].forEach.call(box.children,function(c){if(c!==frame&&!c.contains(frame)&&getComputedStyle(c).position!=='absolute')other+=c.offsetHeight});
    var vw=window.innerWidth,vh=window.innerHeight,pad=24,margin=vw<640?40:56;
    var w=Math.floor(Math.min(440,vw-margin-pad,(vh-margin-pad-other-HEADER)*9/16));w=Math.max(220,w);
    frame.style.width=w+'px';frame.style.height=Math.round(HEADER+w*16/9)+'px';frame.setAttribute('scrolling','no');
  }
  function fitAll(){document.querySelectorAll('#videoFrame,#klFrame').forEach(fit)}
  window.kgFitVideo=fitAll;
  window.addEventListener('resize',fitAll);
  document.addEventListener('DOMContentLoaded',function(){
    ['videoOverlay','klOv'].forEach(function(id){var ov=document.getElementById(id);if(!ov)return;
      new MutationObserver(function(){if(ov.classList.contains('show'))requestAnimationFrame(fitAll)}).observe(ov,{attributes:true,attributeFilter:['class']})});
  });
})();
