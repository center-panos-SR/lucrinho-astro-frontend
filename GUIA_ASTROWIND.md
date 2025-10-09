# 📘 Guia de Uso do AstroWind

## ✅ O que foi Integrado

### 🎨 Componentes e Widgets

1. **Layout Principal** (`src/layouts/Layout.astro`)
   - Header com navegação responsiva
   - Footer com links e redes sociais
   - Meta tags para SEO
   - Suporte a modo escuro

2. **Widgets Disponíveis** (`src/components/widgets/`)
   - `Hero.astro` - Seção hero com título, subtítulo e botões
   - `Features.astro` - Grade de recursos/características
   - `CallToAction.astro` - Chamada para ação com fundo gradiente
   - `Header.astro` - Cabeçalho navegável
   - `Footer.astro` - Rodapé com links

3. **Blog Completo**
   - Sistema de posts com Content Collections
   - Suporte a Markdown e MDX
   - Categorias e tags
   - Página de listagem (`/blog`)
   - Páginas individuais de posts (`/blog/[slug]`)

### ⚙️ Configuração

1. **`src/config.yaml`** - Configuração central do site
   - Informações do site (nome, URL, descrição)
   - Metadados de SEO
   - Configurações do blog
   - Idioma e direção do texto

2. **`src/navigation.js`** - Configuração de navegação
   - Links do header
   - Links do footer
   - Redes sociais

3. **`tailwind.config.ts`** - Configuração do Tailwind
   - Tema customizado
   - Plugin de tipografia
   - Cores personalizadas

## 🚀 Como Usar

### Criar uma Nova Página

```astro
---
import Layout from '~/layouts/Layout.astro';
import Hero from '~/components/widgets/Hero.astro';

const metadata = {
  title: 'Minha Página',
  description: 'Descrição da página',
};
---

<Layout {...metadata}>
  <Hero
    title="Título da Página"
    subtitle="Subtítulo"
  />
  
  <!-- Seu conteúdo aqui -->
</Layout>
```

### Adicionar um Novo Post

1. Crie `src/content/post/meu-post.md`:

```markdown
---
title: 'Título do Meu Post'
description: 'Descrição curta'
publishDate: 2025-10-09
category: 'Tutorial'
tags: ['astro', 'web']
author: 'Seu Nome'
image: 'https://exemplo.com/imagem.jpg'
---

# Conteúdo do Post

Escreva seu conteúdo aqui em Markdown!
```

2. O post aparecerá automaticamente em `/blog`

### Personalizar o Header

Edite `src/navigation.js`:

```javascript
export const headerData = {
  links: [
    { text: 'Início', href: '/' },
    { text: 'Sobre', href: '/sobre' },
    { text: 'Blog', href: '/blog' },
    // Adicione mais links aqui
  ],
  actions: [
    { text: 'CTA Button', href: '#', target: '_blank' }
  ],
};
```

### Personalizar Cores

Edite `src/styles/global.css`:

```css
@layer base {
  :root {
    --color-primary: 59 130 246;    /* Azul */
    --color-secondary: 139 92 246;  /* Roxo */
  }
}
```

### Adicionar um Widget na Página

```astro
<Features
  tagline="Recursos"
  title="Nossos Melhores Recursos"
  subtitle="Veja o que oferecemos"
  items={[
    {
      title: 'Rápido',
      description: 'Performance incrível',
      icon: '⚡',
    },
    {
      title: 'Seguro',
      description: 'Proteção total',
      icon: '🔒',
    },
  ]}
/>
```

## 📝 Páginas Criadas

- ✅ **/** - Página inicial com Hero, Features e CTA
- ✅ **/blog** - Listagem de posts
- ✅ **/blog/[slug]** - Posts individuais
- ✅ **/books** - Página de livros (atualizada com novo design)
- ✅ **/sobre** - Página sobre (exemplo)

## 🎨 Estilos Disponíveis

### Classes de Botões

```html
<a class="btn btn-primary">Botão Primário</a>
<a class="btn btn-secondary">Botão Secundário</a>
```

### Classes Utilitárias

```html
<div class="text-default">Texto padrão</div>
<div class="text-muted">Texto secundário</div>
<div class="bg-page">Fundo da página</div>
```

### Tipografia (para conteúdo do blog)

```html
<div class="prose prose-lg dark:prose-invert">
  <!-- Seu conteúdo markdown renderizado aqui -->
</div>
```

## 🔧 Próximos Passos Recomendados

1. **Personalizar o Logo**
   - Edite `src/components/Logo.astro`
   - Adicione seu logo em `public/`

2. **Adicionar Imagens**
   - Coloque em `src/assets/images/`
   - Use com: `import minhaImagem from '~/assets/images/foto.jpg'`

3. **Configurar SEO**
   - Atualize `src/config.yaml` com suas informações
   - Adicione imagens Open Graph

4. **Adicionar Analytics**
   - Configure Google Analytics em `src/config.yaml`

5. **Criar Mais Widgets**
   - Veja exemplos em `src/components/widgets/`
   - Crie seus próprios seguindo o padrão

## 📚 Estrutura de Arquivos Importantes

```
src/
├── components/
│   ├── common/
│   │   └── MetaTags.astro      # Meta tags para SEO
│   ├── widgets/
│   │   ├── Hero.astro           # Seção hero
│   │   ├── Features.astro       # Grade de recursos
│   │   ├── CallToAction.astro   # CTA
│   │   ├── Header.astro         # Cabeçalho
│   │   └── Footer.astro         # Rodapé
│   └── Logo.astro               # Logo do site
├── content/
│   ├── config.ts                # Configuração do blog
│   └── post/                    # Posts do blog
├── layouts/
│   └── Layout.astro             # Layout principal
├── pages/
│   ├── index.astro              # Página inicial
│   ├── sobre.astro              # Página sobre
│   ├── books.astro              # Página de livros
│   └── blog/
│       ├── index.astro          # Listagem do blog
│       └── [slug].astro         # Post individual
├── styles/
│   └── global.css               # Estilos globais
├── utils/
│   ├── config.ts                # Utilitários de configuração
│   └── permalinks.ts            # Geração de links
├── config.yaml                  # Configuração do site
└── navigation.js                # Configuração de navegação
```

## 🎯 Comandos Úteis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Verificar erros
npm run check
```

## 💡 Dicas

1. Use o alias `~` para imports: `import Layout from '~/layouts/Layout.astro'`
2. Todos os widgets aceitam propriedades customizáveis
3. O modo escuro é automático baseado na preferência do sistema
4. As imagens em `src/assets/` são otimizadas automaticamente
5. O blog suporta MDX - você pode usar componentes React/Vue/Svelte

## 🆘 Suporte

- [Documentação do Astro](https://docs.astro.build)
- [Documentação do Tailwind](https://tailwindcss.com/docs)
- [AstroWind no GitHub](https://github.com/arthelokyo/astrowind)

---

**Aproveite seu novo site com AstroWind! 🚀✨**


