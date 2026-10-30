const APPOINTMENTS_API_URL = 'https://script.google.com/macros/s/AKfycbwkIeXM0JvPMjNXXmSRiDKrxc1w8hxJlC_papvR2GQAEo7sg0Dga0MwxDWweVP7lyk9XQ/exec';

/* Perfil da Empresa no Google. Quando o perfil estiver verificado, cole em "avaliar" o link de
   "Pedir avaliações" (algo como https://g.page/r/XXXX/review). Enquanto estiver vazio, os botões abrem o perfil. */
window.KG_GOOGLE = {
  perfil: 'https://www.google.com/maps/search/?api=1&query=Kaliny+Girardi+Advocacia+Cascavel+PR',
  avaliar: ''
};
window.kgReviewLink = function(){ var g = window.KG_GOOGLE || {}; return g.avaliar || g.perfil; };
