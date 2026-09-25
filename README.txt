KALINY GIRARDI ADVOCACIA — V8

Protótipo do site + dashboard.

Nesta versão, as calculadoras internas foram aprimoradas, especialmente a de inventário para o Paraná: patrimônio bruto, dívidas, meação, patrimônio transmitido, ITCMD de 4% como parâmetro atual, honorários ajustáveis, custos de cartório e registros informados pelo usuário, modalidade judicial/extrajudicial e memória do cálculo.

A calculadora continua sendo uma ferramenta de simulação e triagem. Custas, emolumentos, honorários e requisitos dependem do caso e das tabelas oficiais vigentes.

Abra index.html para o site.
A área interna não é mais vinculada pelo site institucional. O acesso administrativo fica em `gestao/` e o painel continua protegido por sessão.


V8 — Calculadora previdenciária: regra geral do RGPS com média salarial informada, coeficiente de 60% + 2 p.p. por ano excedente (15 anos mulheres / 20 homens), requisitos de referência e alertas sobre transições. Não substitui cálculo do CNIS ou análise individual.

V11 - Documentos por cliente
- A ficha do cliente agora possui abas Dados, Cálculos e Documentos.
- É possível adicionar arquivos por categoria, baixar e excluir documentos.
- Nesta versão local/protótipo, os metadados ficam em localStorage e os arquivos ficam em IndexedDB do navegador.
- Para uso real com dados de clientes, recomenda-se migrar para backend autenticado, armazenamento seguro e controle de permissões.


V17 — Segurança do protótipo
- Login com hash SHA-256 via Web Crypto em vez de senha em texto puro.
- Sessão com expiração de 30 minutos e renovação por atividade.
- Perfis: Administradora, Advogada e Assistente, com navegação por permissões.
- Registro de auditoria local para login, falhas, logout e criação de usuários.
- Ainda não é produção: autenticação, banco, arquivos e dados devem migrar para backend seguro antes de uso com clientes reais.
