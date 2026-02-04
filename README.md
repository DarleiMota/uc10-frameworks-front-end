# GameMania

Documentação rápida do projeto

## Descrição
Projeto demonstrativo de e‑commerce (GameMania) criado com Angular, Angular Material e estilos SCSS. Contém páginas de `home`, `login`, componentes compartilhados (header) e assets de imagem.

---

## Pré-requisitos
- Node.js (>= 18 recomendado)
- npm (ou yarn)
- Angular CLI (opcional para gerar artefatos locais)

## Inicialização (desenvolvimento)
Instale dependências e inicie o servidor dev:

```bash
npm install
ng serve -o
```

A aplicação abrirá em `http://localhost:4200/` e recarregará automaticamente em mudanças.

## Scripts úteis
- `npm start` / `ng serve` — servidor de desenvolvimento
- `ng build` — build de produção
- `ng test` — testes unitários

---

## Estrutura principal
- `src/app/pages/` — páginas da aplicação (ex.: `home`, `login`)
- `src/app/shared/` — componentes compartilhados (ex.: `header`)
- `src/assets/images/` — imagens e ícones usados no projeto
- `src/styles.scss` — estilos globais e variáveis

---

## Convenções de layout e estilos
- Variável global de largura do conteúdo: `--content-max-width` (definida em `:root` em `src/styles.scss`).
- Classe utilitária `.container` — centraliza o conteúdo e aplica padding lateral consistente com o `toolbar`.
- Use `.container` em seções (`hero`, `produtos`, `footer`) para manter alinhamento.

Exemplo de uso:
```html
<section class="hero">
  <div class="container">...conteúdo...</div>
</section>
```

### Header (documentação rápida)
- Estrutura: `<mat-toolbar class="toolbar"><div class="toolbar-inner">...conteúdo...</div></mat-toolbar>`
- Blocos: `.left`, `.center`, `.right` (posicione logo, menu e ícones/entrada de busca respectivamente).
- Campo de busca: tem ícone prefix (`matPrefix`) e comportamento responsivo (escondido em telas muito pequenas).

---

## Assets / Imagens
- As imagens ficam em `src/assets/images/`.
- O build foi configurado (`angular.json`) para copiar `src/assets` para `/assets` no output, então referencie imagens assim:

```html
<img src="assets/images/arquivo.png" alt="..." />
```

Se uma imagem não aparecer, verifique se ela existe na pasta e reinicie o dev server (ou force reload).

---

## Fonts
- A fonte da logo (`Kavoon`) foi adicionada via `<link>` em `src/index.html`. Para alterar a fonte da logo edite esse arquivo ou a variável CSS `--font-logo` em `:root`.

---

## Boas práticas de commit
- Mensagens concisas e descritivas, ex: `feat(home): adicionar hero` ou `chore(styles): atualizar variáveis`.
- Se precisar abrir PRs, prefira branches curtas e específicas por recurso.

---

## Como contribuir / revisar
1. Faça alterações em uma branch com nome descritivo
2. Rode `npm install` e `ng serve` localmente
3. Faça commits pequenos e atômicos
4. Abra PR e solicite revisão


