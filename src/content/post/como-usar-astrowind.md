---
title: 'Como Usar o AstroWind no Seu Projeto'
description: 'Aprenda a integrar e personalizar o tema AstroWind no seu projeto Astro'
publishDate: 2025-10-08
category: 'Guia'
tags: ['astro', 'tutorial', 'astrowind', 'tailwind']
author: 'Lucrinho'
image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=630'
---

# Como Usar o AstroWind

O **AstroWind** é um tema poderoso e flexível para Astro que facilita a criação de sites modernos e performáticos.

## Estrutura do Projeto

O AstroWind organiza seus arquivos de forma lógica e intuitiva:

- `src/components/` - Componentes reutilizáveis
- `src/widgets/` - Widgets maiores como Hero, Features, etc.
- `src/layouts/` - Layouts de página
- `src/pages/` - Rotas do site
- `src/content/` - Conteúdo do blog
- `src/utils/` - Funções utilitárias

## Personalização

### 1. Configuração Básica

Edite o arquivo `src/config.yaml` para personalizar:

- Nome do site
- Descrição
- URLs de redes sociais
- Configurações de SEO

### 2. Estilização

O AstroWind usa Tailwind CSS 4. Você pode personalizar:

- Cores em `src/styles/global.css`
- Componentes em `tailwind.config.ts`
- Classes utilitárias customizadas

### 3. Componentes

Todos os widgets são altamente customizáveis:

```astro
<Hero
  title="Seu Título"
  subtitle="Seu subtítulo"
  actions={[
    { text: 'Ação', href: '/link' }
  ]}
/>
```

## Próximos Passos

1. Explore os componentes disponíveis
2. Personalize as cores e fontes
3. Adicione seus próprios widgets
4. Configure o SEO para seu domínio

Divirta-se construindo! 🎉


