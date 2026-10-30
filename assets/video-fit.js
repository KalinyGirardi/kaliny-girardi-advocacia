/* Enquadra o player do Instagram do tamanho da tela, sem rolagem — PC e celular.
   O Instagram mostra o Reels em 4:5 com a barra do perfil (54 px) em cima; o rodapé dele (curtidas/comentário) fica de fora
   e o link "Abrir no Instagram" aparece abaixo do player. */
(function(){
  var HEADER=54,RATIO=1.25;
  function fit(frame){
    if(!frame||frame.hidden)return;
    var box=frame.closest('.video-modal,.kl-modal');if(!box)return;
    var vw=window.innerWidth,vh=window.innerHeight,pad=24,margin=vw<640?32:56;
    var maxW=Math.min(440,vw-margin-pad),w=maxW;
    for(var pass=0;pass<2;pass++){
      box.style.width=(w+pad)+'px';
      var other=0;[].forEach.call(box.children,function(c){if(c!==frame&&!c.contains(frame)&&getComputedStyle(c).position!=='absolute')other+=c.offsetHeight});
      w=Math.max(Math.min(326,maxW),Math.floor(Math.min(maxW,(vh-margin-pad-other-HEADER)/RATIO))); // 326 px: menor largura do player do Instagram
    }
    box.style.width=(w+pad)+'px';
    var cs=getComputedStyle(box),inner=box.clientWidth-parseFloat(cs.paddingLeft)-parseFloat(cs.paddingRight);if(inner>0)w=Math.min(w,Math.floor(inner));
    frame.style.width=w+'px';frame.style.height=Math.round(HEADER+w*RATIO)+'px';frame.setAttribute('scrolling','no');
  }
  function fitAll(){document.querySelectorAll('#videoFrame,#klFrame').forEach(fit)}
  window.kgFitVideo=fitAll;
  window.addEventListener('resize',fitAll);
  document.addEventListener('DOMContentLoaded',function(){
    ['videoOverlay','klOv'].forEach(function(id){var ov=document.getElementById(id);if(!ov)return;
      new MutationObserver(function(){if(ov.classList.contains('show'))requestAnimationFrame(fitAll)}).observe(ov,{attributes:true,attributeFilter:['class']})});
  });
})();
