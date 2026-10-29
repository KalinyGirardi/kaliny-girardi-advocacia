KALINY GIRARDI ADVOCACIA — site institucional + painel administrativo
Versão: V145.19

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
  movimentações), Financeiro, Anotações, Cálculos, Previdenciário e Documentos
  (metadados). Sincronizam entre computador e celular.
- Google Drive: arquivos anexados, na pasta "Documentos — Kaliny Girardi Advocacia",
  com uma subpasta por cliente (até 15 MB por arquivo).

APPS SCRIPT (não fica neste repositório)
- O Code.gs fica apenas no projeto do Apps Script. Não publique o Code.gs aqui:
  o repositório é público.
- Ao atualizar: Implantar > Gerenciar implantações > editar > Nova versão
  (nunca "Nova implantação", que muda a URL).

HISTÓRICO
- V145.14: mobile aprovado (cards, menu à direita).
- V145.15: segurança do servidor, sincronização de Processos/Financeiro, backup diário
  da planilha, Política de Privacidade, consentimento no agendamento e SEO.
- V145.16: anotações, cálculos e dossiê previdenciário sincronizados; e-mail diário de
  prazos e parcelas vencidas (7h); lembrete por WhatsApp na agenda; parcelas vencidas
  nos Pontos de atenção.
- V145.17: calculadora de prazos processuais (dias úteis do CPC, feriados nacionais,
  Carnaval/Corpus Christi, recesso forense, Justiça Federal, feriados municipais
  editáveis) com gravação do vencimento no processo.
- V145.18: documentos e contratos no Google Drive (envio automático, download no
  outro aparelho, exclusão vai para a lixeira do Drive); botão "Adicionar documento"
  da ficha do cliente corrigido.
- V145.19: relatório financeiro (mês/ano, gráfico, por área e cliente, vencidas,
  exportação CSV para Excel e PDF) e cobrança/lembrete de parcela por WhatsApp.
