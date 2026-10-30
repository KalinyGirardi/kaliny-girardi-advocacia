KALINY GIRARDI ADVOCACIA — site institucional + painel administrativo
Versão: V145.35

ESTRUTURA
- index.html ............ site público (agendamento online, áreas, conteúdos, contato)
- privacidade.html ...... Política de Privacidade (LGPD)
- gestao/index.html ..... login do painel
- dashboard.html ........ painel (todo o JavaScript fica embutido neste arquivo)
- assets/appointment-config.js ... URL do Apps Script usada pelo site e pelo painel
- css/style.css ......... estilos do site e do painel
- areas/*.html .......... páginas de cada área de atuação (SEO; textos para a Kaliny revisar)
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
- V145.26: Agenda (semana com consultas e prazos, próximos 30 dias, mês; pedidos do
  site para confirmar em um toque) e Dashboard "Comece por aqui" com a lista do que
  fazer primeiro e atalhos com os números do momento.
- V145.27: Calculadoras com cartões didáticos (para que serve / quando usar) e
  últimos cálculos; Documentos como central (todos os arquivos, gerar documento
  por cliente, relatórios de cálculo, anexar arquivo).
- V145.28: Calculadoras refeitas com resultado ao vivo e memória do cálculo com a
  base legal — Aposentadoria (5 regras da EC 103/2019 com data projetada, tempo
  especial convertido, carência, teto e mínimo editáveis), Pensão (líquido,
  cenários 15–30%, 13º e férias, extras proporcionais) e Inventário (meação por
  regime, concorrência do cônjuge, reserva de 1/4, ascendentes, ITCMD por herdeiro,
  caminho cartório/judicial). Teto, mínimo, ITCMD e honorários ficam lembrados.
- V145.29: Ficha do cliente com aba "Resumo": próxima consulta, próximo prazo,
  em aberto e recebido; "Precisa de atenção" (prazos até 15 dias, parcelas
  vencidas com cobrança no WhatsApp, cadastro incompleto, falta de procuração ou
  contrato); ações rápidas; e linha do tempo com tudo do cliente, com filtros.
- V145.30: Pedido de consulta do site ganha o botão "Cadastrar cliente" (nome,
  telefone, e-mail e área já preenchidos; a consulta fica ligada à cliente na hora).
  Campo de e-mail no "Novo cliente". Teste de integração de ponta a ponta: site →
  agenda → cliente → processo → contrato/financeiro → Drive → calculadora →
  iPhone → Google Agenda.
- V145.31: Site — agendamento em 2 passos (dias e horários livres em botões,
  "prefiro outra data" com calendário), telefone formatado, resumo final com
  "adicionar à agenda" (.ics) e WhatsApp; WhatsApp com mensagem por área e botão
  flutuante; 5 páginas de área (areas/*.html) com perguntas frequentes para o Google;
  fontes sem @import e fotos em WebP (carrega mais rápido no celular).
- V145.32: Site — menu do celular funcionando (antes o ☰ não abria), fontes servidas
  pelo próprio site (assets/fonts; sem Google Fonts), favicon/ícones e manifest,
  imagem de prévia 1200×630 para WhatsApp/Facebook (assets/og-image.jpg), fotos
  responsivas, textos pequenos mais legíveis e 404 com endereços absolutos.
  Lighthouse (celular): desempenho, acessibilidade e SEO 100.
- V145.33: Modelos novos no papel timbrado — recibo de honorários (valor por
  extenso; também pelo botão 🧾 de um pagamento recebido no Financeiro),
  notificação extrajudicial, substabelecimento, termo de acordo extrajudicial
  (com testemunhas) e declaração de comparecimento. Cada modelo tem campos próprios
  no editor. Assinaturas espaçadas e mantidas juntas na mesma página.
  Apps Script V145.24: encontra a agenda compartilhada da Kaliny mesmo com endereço
  próprio (…@group.calendar.google.com); função diagnosticoAgenda.
- V145.34: Guia do painel — "❓ Como usar" (menu lateral e topo) com 15 tarefas do dia
  a dia em passos curtos, busca e "Me leve lá" (abre a tela e destaca o botão);
  aviso de boas-vindas no primeiro acesso.
- V145.35: RG e CPF da advogada saem do código público — os modelos usam
  {{adv_rg}} e {{adv_cpf}}, buscados no servidor depois do login (Configurações →
  "Dados da advogada"). Apps Script V145.25: officeProfile / officeProfileSave.
