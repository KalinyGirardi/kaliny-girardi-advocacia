/* Biblioteca de conteúdos (Reels do Instagram da Kaliny).
   Para incluir um vídeo novo, copie uma linha e troque: id (o código do link instagram.com/p/CODIGO/ ou /reel/CODIGO/),
   área, título e descrição. "capa" é opcional (arquivo em assets/conteudos/). Os mais novos ficam no topo. */
window.KG_CONTEUDOS=[
  {id:'DczVs4wRCd1',area:'Cível',titulo:'Direitos e decisões do dia a dia.',descricao:'Conteúdos para compreender contratos, obrigações e questões cíveis com mais clareza.',capa:''},
  {id:'DXXwLDmhi_U',area:'Família e Sucessões',titulo:'Decisões importantes merecem orientação.',descricao:'Informação jurídica para momentos que envolvem família, patrimônio e sucessão.',capa:''},
  {id:'DaTeb97OjFO',area:'Consumidor',titulo:'Conheça seus direitos como consumidor.',descricao:'Orientações práticas para relações de consumo e situações que fazem parte do cotidiano.',capa:''},
  {id:'DZD_Evbx-IL',area:'Previdenciário',titulo:'Planejar hoje pode fazer diferença amanhã.',descricao:'Conteúdos para entender benefícios, planejamento e direitos previdenciários.',capa:''},
  {id:'DZWBHDyxbDx',area:'Imobiliário',titulo:'Mais segurança para decisões imobiliárias.',descricao:'Informação sobre contratos, negócios e regularização de imóveis.',capa:''}
];
window.KG_AREA_INFO={
  'Cível':{icon:'civel',slug:'civel',grad:'linear-gradient(150deg,#6d4f3c,#b5967c)'},
  'Família e Sucessões':{icon:'familia',slug:'familia-e-sucessoes',grad:'linear-gradient(150deg,#5a3b2b,#a88969)'},
  'Consumidor':{icon:'consumidor',slug:'consumidor',grad:'linear-gradient(150deg,#4a3023,#9c7d62)'},
  'Previdenciário':{icon:'previdenciario',slug:'previdenciario',grad:'linear-gradient(150deg,#7b5b46,#c8b19a)'},
  'Imobiliário':{icon:'imobiliario',slug:'imobiliario',grad:'linear-gradient(150deg,#3f2a1f,#8c6b55)'}
};
/* Capa: usa a imagem quando existir; senão, desenha uma capa com o ícone e o título da área. */
window.kgCoverHTML=function(item,base){
  base=base||'';const a=window.KG_AREA_INFO[item.area]||{icon:'agenda',grad:'linear-gradient(150deg,#5a3b2b,#a88969)'};
  if(item.capa)return `<span class="kc-cover" style="background-image:url('${base}assets/conteudos/${item.capa}')"></span>`;
  return `<span class="kc-cover kc-art" style="background:${a.grad}"><img src="${base}assets/icons/${a.icon}.jpg" alt="" loading="lazy" decoding="async"><b>${item.titulo}</b></span>`;
};
