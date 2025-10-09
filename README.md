# 🚀 Lucrinho - Astro + AstroWind

Um site moderno construído com **Astro 5** e **Tailwind CSS 4**, usando componentes inspirados no tema [AstroWind](https://github.com/arthelokyo/astrowind).

## ✨ Características

- ⚡ **Astro 5.14.1** - Framework web ultra-rápido e moderno
- 🎨 **Tailwind CSS 3.4.18** - Estilização utilitária estável e otimizada
- 📝 **Blog com MDX** - Sistema de blog completo com suporte a componentes
- 🔍 **SEO Otimizado** - Meta tags, sitemap e RSS configurados
- 🌙 **Modo Escuro** - Suporte completo a temas claro/escuro
- 📱 **Responsivo** - Design mobile-first com menu adaptativo
- 🎯 **TypeScript** - Tipagem estática para maior segurança
- ✨ **UI Moderna** - Componentes com animações e efeitos visuais

## 📁 Estrutura do Projeto

```
/
├── public/              # Arquivos estáticos
├── src/
│   ├── assets/         # Imagens e recursos
│   ├── components/     # Componentes Astro
│   │   ├── common/    # Componentes comuns (MetaTags, etc)
│   │   └── widgets/   # Widgets maiores (Hero, Features, etc)
│   ├── content/       # Content Collections (blog)
│   │   └── post/     # Posts do blog
│   ├── layouts/       # Layouts de página
│   ├── pages/         # Rotas do site
│   │   ├── blog/     # Páginas do blog
│   │   └── index.astro
│   ├── styles/        # Estilos globais
│   ├── utils/         # Funções utilitárias
│   ├── config.yaml    # Configuração do site
│   └── navigation.js  # Configuração de navegação
├── astro.config.mjs   # Configuração do Astro
├── tailwind.config.ts # Configuração do Tailwind
└── tsconfig.json      # Configuração do TypeScript
```

## 🚀 Começando

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:4321](http://localhost:4321)

### Build para Produção

```bash
npm run build
```

### Preview da Build

```bash
npm run preview
```

## 📝 Criando Posts no Blog

1. Crie um arquivo `.md` ou `.mdx` em `src/content/post/`
2. Adicione o frontmatter:

```yaml
---
title: 'Título do Post'
description: 'Descrição curta'
publishDate: 2025-10-09
category: 'Tutorial'
tags: ['astro', 'blog']
author: 'Seu Nome'
image: 'https://example.com/image.jpg'
---
```

3. Escreva seu conteúdo em Markdown
4. O post aparecerá automaticamente no blog!

**Posts de exemplo incluídos**:
- `exemplo-post.md` - Introdução ao blog
- `como-usar-astrowind.md` - Guia de uso

## 🎨 Personalização

### Configuração Geral

Edite `src/config.yaml` para personalizar:
- Nome e descrição do site
- SEO e metadados
- Configurações do blog
- Analytics

### Navegação

Edite `src/navigation.js` para personalizar:
- Links do header (já configurados: Início, Sobre, Serviços, Blog, Contato)
- Links do footer
- Redes sociais

### Estilos

- `src/styles/global.css` - Estilos globais e classes customizadas
- `tailwind.config.cjs` - Configuração do Tailwind CSS 3
- Cores personalizadas: primary (azul) e secondary (roxo)

### Versão do Tailwind

**Versão atual**: Tailwind CSS 3.4.18 (estável)

Para mais detalhes sobre a configuração do Tailwind, consulte `VERSAO_TAILWIND.md`

### Componentes

Todos os widgets em `src/components/widgets/` são personalizáveis:
- `Hero.astro` - Seção hero principal
- `Features.astro` - Grade de recursos
- `CallToAction.astro` - Chamada para ação
- `Header.astro` - Cabeçalho
- `Footer.astro` - Rodapé

## 🧩 Widgets Disponíveis

### Hero

```astro
<Hero
  title="Seu Título"
  subtitle="Seu subtítulo"
  actions={[
    { text: 'Botão', href: '/link', variant: 'primary' }
  ]}
/>
```

### Features

```astro
<Features
  title="Recursos"
  items={[
    { title: 'Item', description: 'Descrição', icon: '🚀' }
  ]}
/>
```

### CallToAction

```astro
<CallToAction
  title="Pronto?"
  actions={[
    { text: 'Começar', href: '#' }
  ]}
/>
```

## 📄 Páginas Disponíveis

- ✅ **/** - Página inicial com Hero, Features e CTA
- ✅ **/sobre** - Página sobre o projeto
- ✅ **/servicos** - Lista de serviços oferecidos
- ✅ **/blog** - Listagem de posts do blog
- ✅ **/blog/[slug]** - Posts individuais
- ✅ **/books** - Página de livros
- ✅ **/contato** - Formulário de contato

## 🎨 Melhorias de Layout

O layout foi otimizado com:
- ✨ Header com efeito de vidro fosco e logo gradiente
- 🌈 Hero section com background gradiente suave
- 🎴 Cards de features com animações hover
- 📱 Menu mobile totalmente funcional
- 🎨 Footer modernizado com melhor estrutura
- 💫 Transições e animações suaves

Para mais detalhes, consulte `CHANGELOG_LAYOUT.md`

## 📚 Recursos

- [Documentação do Astro](https://docs.astro.build)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- [AstroWind Original](https://github.com/arthelokyo/astrowind)
- [Tailwind Typography](https://github.com/tailwindlabs/tailwindcss-typography)

## 📄 Licença

MIT

---

Construído com ❤️ usando Astro 5 e Tailwind CSS 3
