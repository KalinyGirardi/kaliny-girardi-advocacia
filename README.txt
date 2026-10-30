KALINY GIRARDI ADVOCACIA — site institucional + painel administrativo
Versão: V145.25

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
- V145.20 (Apps Script): consultas confirmadas e prazos na Google Agenda da Kaliny.
- V145.21: código de acesso por e-mail no login (lembrar aparelho por 30 dias),
  limpeza do formato antigo da senha e painel mais leve (logotipo do contrato em
  assets/contract-logo.png).
- V145.22: cartão "Status do sistema" em Configurações (senha, código por e-mail,
  lembretes, resumo, backup, Google Agenda, cota de e-mails) — dispensa rodar
  verificarSeguranca no editor. A parte do servidor exige o Code.gs V145.22.
- V145.23: ficha do cliente com dados para documentos (gênero, RG, nacionalidade,
  representante legal); edição do cliente enviada à planilha; procuração,
  declaração de hipossuficiência e de residência no layout do escritório
  ("Documentos rápidos" na aba Documentos da ficha).
- V145.24: Financeiro novo — período (mês com setas, 30 dias, ano, tudo), busca e
  filtros, cartões clicáveis, abas (lançamentos, a receber, a pagar, fluxo de caixa,
  por cliente, categorias), marcar pago com 1 toque e "desfazer", lançamento rápido
  com categorias, parcelamento e repetição mensal.
- V145.25: Clientes e Processos interativos — cartões clicáveis, filtros em botões,
  selos (processos, prazo, valor vencido, cadastro incompleto), ações rápidas;
  processos em lista, prazos (concluir em 1 toque) e quadro por situação.
