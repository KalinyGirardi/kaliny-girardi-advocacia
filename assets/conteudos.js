/* Biblioteca de conteúdos (Reels do Instagram da Kaliny).
   Para incluir um vídeo novo, copie uma linha e troque: id (o código do link instagram.com/p/CODIGO/ ou /reel/CODIGO/),
   data (aaaa-mm-dd), área, título e descrição. Sem área/título, o vídeo aparece em "Outros temas".
   "capa" é opcional (arquivo em assets/conteudos/). Os mais novos ficam no topo. */
window.KG_CONTEUDOS=[
  {id:'DduRP6RBb90',data:'2026-09-25',area:'',titulo:'',descricao:'',capa:''},
  {id:'DczVs4wRCd1',data:'2026-09-02',area:'Cível',titulo:'Direitos e decisões do dia a dia.',descricao:'Conteúdos para compreender contratos, obrigações e questões cíveis com mais clareza.',capa:''},
  {id:'Db_78jXRFzT',data:'2026-08-13',area:'',titulo:'',descricao:'',capa:''},
  {id:'Daly9WZR1Tw',data:'2026-07-09',area:'',titulo:'',descricao:'',capa:''},
  {id:'DaTeb97OjFO',data:'2026-07-02',area:'Consumidor',titulo:'Conheça seus direitos como consumidor.',descricao:'Orientações práticas para relações de consumo e situações que fazem parte do cotidiano.',capa:''},
  {id:'DZn6_6gRm_e',data:'2026-06-15',area:'',titulo:'',descricao:'',capa:''},
  {id:'DZWBHDyxbDx',data:'2026-06-08',area:'Imobiliário',titulo:'Mais segurança para decisões imobiliárias.',descricao:'Informação sobre contratos, negócios e regularização de imóveis.',capa:''},
  {id:'DZD_Evbx-IL',data:'2026-06-01',area:'Previdenciário',titulo:'Planejar hoje pode fazer diferença amanhã.',descricao:'Conteúdos para entender benefícios, planejamento e direitos previdenciários.',capa:''},
  {id:'DXXwLDmhi_U',data:'2026-04-20',area:'Família e Sucessões',titulo:'Decisões importantes merecem orientação.',descricao:'Informação jurídica para momentos que envolvem família, patrimônio e sucessão.',capa:''},
  {id:'DW2Od7zBJnQ',data:'2026-04-07',area:'',titulo:'',descricao:'',capa:''},
  {id:'DWSHKzQEbgw',data:'2026-03-24',area:'',titulo:'',descricao:'',capa:''},
  {id:'DV9js9TkVfL',data:'2026-03-16',area:'',titulo:'',descricao:'',capa:''},
  {id:'DVhF8KLpF9_',data:'2026-03-05',area:'',titulo:'',descricao:'',capa:''},
  {id:'DVJ3mr7EX_k',data:'2026-02-24',area:'',titulo:'',descricao:'',capa:''},
  {id:'DUyycIUEZhC',data:'2026-02-15',area:'',titulo:'',descricao:'',capa:''},
  {id:'DUg70IykcpZ',data:'2026-02-08',area:'',titulo:'',descricao:'',capa:''}
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
  return `<span class="kc-cover kc-art" style="background:${a.grad}"><img src="${base}assets/icons/${a.icon}.jpg" alt="" loading="lazy" decoding="async"><b>${window.kgTitulo(item)}</b></span>`;
};
const KG_MESES=['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
window.kgMes=function(item){const m=/^(\d{4})-(\d{2})/.exec(item.data||'');return m?KG_MESES[+m[2]-1]+' de '+m[1]:''};
window.kgTitulo=function(item){return item.titulo||('Vídeo de '+(window.kgMes(item)||'Kaliny Girardi'))};
