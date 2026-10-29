KALINY GIRARDI ADVOCACIA — site institucional + painel administrativo
Versão: V145.15

ESTRUTURA
- index.html ............ site público (agendamento online, áreas, conteúdos, contato)
- privacidade.html ...... Política de Privacidade (LGPD)
- gestao/index.html ..... login do painel
- dashboard.html ........ painel (todo o JavaScript fica embutido neste arquivo)
- assets/appointment-config.js ... URL do Apps Script usada pelo site e pelo painel
- css/style.css ......... estilos do site e do painel
- robots.txt, sitemap.xml, 404.html, CNAME

ONDE FICAM OS DADOS
- Planilha Google (via Apps Script): Agendamentos, Clientes, Processos (com prazos e
  movimentações) e Financeiro. Sincronizam entre computador e celular.
- Somente no navegador: documentos anexados, anotações e histórico de cálculos.
  Use Configurações > Exportar backup (JSON) de vez em quando.

APPS SCRIPT (não fica neste repositório)
- O Code.gs fica apenas no projeto do Apps Script. Não publique o Code.gs aqui:
  o repositório é público.
- Ao atualizar: Implantar > Gerenciar implantações > editar > Nova versão
  (nunca "Nova implantação", que muda a URL).

HISTÓRICO
- V145.14: mobile aprovado (cards, menu à direita).
- V145.15: segurança do servidor, sincronização de Processos/Financeiro, backup diário
  da planilha, Política de Privacidade, consentimento no agendamento e SEO.
