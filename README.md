

# GameMania E-Commerce (UC10 – Frameworks Front-End)

Projeto demonstrativo de e-commerce (GameMania) desenvolvido em **Angular** com **Angular Material** e **SCSS**, com foco em layout responsivo, consistência visual e boas práticas de organização de código (páginas, componentes compartilhados e assets).

---

## Índice
1. [Finalidade](#finalidade)
2. [Escopo](#escopo)
3. [Visão geral](#visão-geral)
4. [Visão geral do produto](#visão-geral-do-produto)
5. [Posicionamento no mercado](#posicionamento-no-mercado)
6. [Equipe desenvolvedora e clientes](#descrição-da-equipe-desenvolvedora-e-dos-clientes)
7. [Alternativas e concorrências](#alternativas-e-concorrências)
8. [Restrições](#restrições)
9. [Requisitos do produto](#requisitos-do-produto)
10. [Modelagem de caso de uso](#modelagem-caso-de-uso)
11. [Definições, acrônimos e abreviações](#definição-acrônimos-e-abreviações)
12. [Referências](#referências)
13. [Como rodar o projeto](#como-rodar-o-projeto)
14. [Estrutura do projeto](#estrutura-do-projeto)

---

## Finalidade
Construir um **front-end de e-commerce** com foco em experiência do usuário e identidade visual consistente, servindo como projeto prático da **UC10 – Frameworks Front-End**.

Objetivos do projeto (briefing):
- Expandir vendas para todo o Brasil
- Alcançar clientes fora de São Paulo
- Metas de qualidade (indicadores):
  - +20% tempo de sessão
  - <30% taxa de rejeição
  - 90+ no Lighthouse

---

## Escopo
### Escopo atual (entrega inicial)
- **Frontend Angular**
- Páginas: **Home** e **Login**
- Componentes compartilhados: **Header/Toolbar**
- Estilização com **SCSS** e variáveis globais em `styles.scss`
- Uso de **Angular Material** (form fields, buttons, toolbar, icons)

### Escopo futuro (planejado)
- Catálogo de produtos (listagem/detalhe)
- Carrinho de compras e checkout
- Filtros e ordenação
- Integração com APIs (produtos, autenticação, carrinho)
- Backend com **C# / ASP.NET Core** (camada de serviços e endpoints)
- Persistência (ex.: SQL Server/PostgreSQL) e autenticação (JWT)

---

## Visão geral
O sistema apresenta uma interface de e-commerce com:
- Navegação principal via header com menu e campo de busca
- Seções de destaque na home (banners, categorias, produtos populares)
- Tela de login com formulário usando Angular Material

---

## Visão geral do produto
### Público-alvo (briefing)
- Gamers 14–40 anos
- Adultos 14–60 anos
- Localização: Brasil
- Perfil: compradores online de tecnologia/games/acessórios

### Principais páginas (briefing + implementação atual)
- Home ✅
- Login ✅  
Planejadas:
- Produtos (catálogo) ⏳
- Carrinho & Checkout ⏳
- Contato / Sobre ⏳

### Funcionalidades (briefing)
Implementadas:
- Menu responsivo (layout)
- Componentes visuais e seções da home
- Login (form UI)

Planejadas:
- Carrossel de imagens
- Filtros e ordenação
- Carrinho dinâmico
- Integrações com APIs

---

## Posicionamento no mercado
O GameMania se posiciona como um e-commerce com apelo visual moderno e foco em produtos de tecnologia e universo gamer, buscando:
- Interface direta e rápida (melhor experiência em dispositivos móveis)
- Identidade visual consistente
- Organização por categorias e destaques
- Evolução futura para catálogo + carrinho + checkout integrados

---

## Descrição da equipe desenvolvedora e dos clientes
### Equipe desenvolvedora
- **Darlei Mota** — Desenvolvedor único (UI/UX + Frontend Angular) e planejamento de backend em C#.

### Cliente
- **Game Mania** — empresa/projeto de e-commerce (briefing).

---

## Alternativas e concorrências
Referências e concorrentes indiretos (mercado):
- Marketplaces e e-commerces de eletrônicos e games (amplo catálogo, alta competitividade de preço)
- Lojas especializadas em nicho gamer (curadoria e foco no público)

Diferenciais pretendidos (projeto):
- Experiência visual e layout moderno
- Organização por seções e categorias com foco em conversão
- Base técnica preparada para evolução (integração futura com backend)

---

## Restrições
- **Projeto frontend inicialmente** (sem backend integrado na entrega atual).
- Funcionalidades de compra (checkout/pagamento) **planejadas**, não implementadas ainda.
- Integração com API **planejada** (necessita backend/serviço ou mock).
- Cronograma (briefing): **3 meses** (início: 20/09/2025; entrega: GitHub Repo).
- Dependência de assets (imagens em `src/assets/images/`).

---

## Requisitos do produto

### Requisitos funcionais (RF)
**RF01** — Exibir página Home com seções de destaque (hero, banners, categorias e produtos).  
**RF02** — Exibir header com logo, menu e campo de busca.  
**RF03** — Permitir navegação para a página de Login.  
**RF04** — Exibir formulário de Login com campos de e-mail e senha.  
**RF05** — Garantir consistência visual via variáveis globais de tema (cores, fontes e espaçamentos).  

Planejados:
**RF06** — Listar produtos com dados vindos de API.  
**RF07** — Permitir filtrar e ordenar produtos.  
**RF08** — Permitir adicionar/remover itens do carrinho.  
**RF09** — Finalizar compra (checkout).  

### Requisitos não funcionais (RNF)
**RNF01** — Responsividade: layout deve se adaptar a desktop, tablet e mobile.  
**RNF02** — Performance: meta 90+ no Lighthouse (principalmente Performance e Best Practices).  
**RNF03** — Acessibilidade: seguir recomendações WCAG (meta AA no que couber).  
**RNF04** — Manutenibilidade: organização por páginas e componentes compartilhados.  
**RNF05** — Padronização visual: uso de tokens globais e Angular Material.

### Requisitos técnicos (briefing)
- Angular (TypeScript)
- SCSS
- Angular Material
- SEO e performance (planejado/avaliado via Lighthouse)
- Acessibilidade (WCAG AA)

---

## Modelagem caso de uso

### Atores
- **Visitante/Cliente**: usuário que navega, busca produtos e realiza login (e futuramente compra).

### Diagrama (versão textual)
- **Cliente**
  - (UC01) Navegar pela Home
  - (UC02) Buscar produto (planejado)
  - (UC03) Visualizar produtos (planejado)
  - (UC04) Realizar Login
  - (UC05) Adicionar ao carrinho (planejado)
  - (UC06) Finalizar compra (planejado)

### Casos de uso (descrição resumida)
**UC01 — Navegar pela Home**  
Fluxo principal: acessar aplicação → visualizar seções e chamadas → explorar categorias/banners.  

**UC04 — Realizar Login**  
Fluxo principal: acessar /login → preencher e-mail e senha → acionar botão Login.  
Exceções: campos vazios / e-mail inválido (validações planejadas/expansíveis).  

> Observação: casos de uso de catálogo/carrinho/checkout estão listados como **planejados**, pois dependem de backend/API.

---

## Definição, acrônimos e abreviações
- **API**: Application Programming Interface (interface de comunicação entre sistemas)
- **CLI**: Command Line Interface
- **KPI**: Key Performance Indicator (indicador de desempenho)
- **RNF**: Requisito Não Funcional
- **RF**: Requisito Funcional
- **SCSS**: Sintaxe do Sass para folhas de estilo
- **SEO**: Search Engine Optimization
- **SPA**: Single Page Application
- **UI/UX**: User Interface / User Experience
- **WCAG**: Web Content Accessibility Guidelines
- **Lighthouse**: ferramenta de auditoria de performance/acessibilidade/boas práticas

---

## Referências
- Protótipo (Figma): https://www.figma.com/design/tV7DYaplqIxJ5Vj8eFItQL/UC09-DESAFIO-1?m=auto&t=DXJh3ECpollckKDk-1
- Repositório (GitHub)
- Angular Documentation
- Angular Material Documentation
- WCAG Guidelines
- Google Lighthouse / web.dev

---

## Como rodar o projeto
### Pré-requisitos
- Node.js (>= 18 recomendado)
- npm (ou yarn)
- Angular CLI (opcional)

### Inicialização (dev)
```bash
npm install
ng serve -o
````

A aplicação abrirá em `http://localhost:4200/`.

### Scripts úteis

* `npm start` / `ng serve` — servidor de desenvolvimento
* `ng build` — build de produção
* `ng test` — testes unitários

---

## Estrutura do projeto

* `src/app/pages/` — páginas (ex.: `home`, `login`)
* `src/app/shared/` — componentes compartilhados (ex.: `header`)
* `src/assets/images/` — imagens e ícones
* `src/styles.scss` — estilos globais e variáveis (tokens)

---

## Convenções de layout e estilos

* Variável global de largura do conteúdo: `--content-max-width` (em `:root` no `styles.scss`)
* Classe `.container`: centraliza o conteúdo e mantém padding consistente com o toolbar

Exemplo:

```html
<section class="hero">
  <div class="container">...</div>
</section>
```

---

## Boas práticas de commit

* Mensagens concisas e descritivas:

  * `feat(home): adicionar hero`
  * `feat(login): criar tela com material`
  * `chore(styles): atualizar tokens globais`

```

