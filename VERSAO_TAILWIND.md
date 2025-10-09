# 📋 Versão do Tailwind CSS - Lucrinho AstroWind

## ✅ Versão Atual

```json
{
  "tailwindcss": "3.4.18",
  "@astrojs/tailwind": "6.0.2",
  "@tailwindcss/typography": "0.5.19"
}
```

## 🎯 Por que Tailwind CSS 3?

### ✅ Vantagens
1. **Estabilidade**: Versão LTS (Long Term Support) totalmente estável
2. **Compatibilidade**: Funciona perfeitamente no Windows sem dependências nativas problemáticas
3. **Performance**: Build rápido e otimizado
4. **Comunidade**: Vasta documentação e suporte
5. **Plugins**: Ecossistema maduro com todos os plugins disponíveis

### ❌ Problemas Evitados (Tailwind CSS 4)
- ❌ Dependências nativas (lightningcss) com problemas no Windows
- ❌ Módulos nativos faltando (`lightningcss.win32-x64-msvc.node`)
- ❌ Incompatibilidades com algumas ferramentas
- ❌ Documentação limitada (ainda em beta)
- ❌ Ecossistema de plugins em transição

## 🔧 Configuração Atual

### `tailwind.config.cjs`
```javascript
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'rgb(59 130 246)', // Azul
        secondary: 'rgb(139 92 246)', // Roxo
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Para estilizar conteúdo do blog
  ],
};
```

### `src/styles/global.css`
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Classes customizadas */
@layer base { ... }
@layer components { ... }
@layer utilities { ... }
```

## 📦 Integração com Astro

### `astro.config.mjs`
```javascript
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind(), // Integração oficial do Astro
    mdx(),
    sitemap(),
  ],
});
```

## 🎨 Recursos Disponíveis

### Utilitários Básicos
- ✅ Flexbox e Grid
- ✅ Spacing (margin, padding)
- ✅ Typography
- ✅ Colors (completo)
- ✅ Borders e Shadows
- ✅ Transitions e Animations
- ✅ Responsive Design

### Plugins Instalados
- ✅ **@tailwindcss/typography**: Estilização de conteúdo markdown/MDX

### Classes Customizadas
```css
/* Botões */
.btn, .btn-primary, .btn-secondary

/* Textos */
.text-default, .text-muted

/* Backgrounds */
.bg-page
```

## 🌙 Modo Escuro

Configurado com `darkMode: 'class'`:

```html
<!-- Adicione a classe 'dark' no elemento html -->
<html class="dark">
  <!-- Todo o conteúdo terá o tema escuro -->
</html>
```

Exemplo de uso:
```html
<div class="bg-white dark:bg-slate-900">
  <p class="text-gray-900 dark:text-white">
    Este texto muda de cor no modo escuro
  </p>
</div>
```

## 📱 Breakpoints

```javascript
{
  'sm': '640px',   // Tablets pequenos
  'md': '768px',   // Tablets
  'lg': '1024px',  // Laptops
  'xl': '1280px',  // Desktops
  '2xl': '1536px', // Telas grandes
}
```

Exemplo:
```html
<div class="w-full md:w-1/2 lg:w-1/3">
  Responsivo!
</div>
```

## 🚀 Performance

### Build de Produção
```bash
npm run build
```

O Tailwind CSS automaticamente:
- ✅ Remove CSS não utilizado (PurgeCSS)
- ✅ Minifica o CSS final
- ✅ Otimiza para produção

### Tamanho do CSS
- **Desenvolvimento**: ~3.5 MB (todos os utilitários)
- **Produção**: ~15-30 KB (apenas o usado)

## 🔄 Migração Futura (Tailwind CSS 4)

Quando o Tailwind CSS 4 estiver estável e sem problemas de dependências:

1. Atualizar dependências:
```bash
npm install tailwindcss@4 @tailwindcss/vite@4
```

2. Atualizar `astro.config.mjs`:
```javascript
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```

3. Atualizar `src/styles/global.css`:
```css
@import "tailwindcss";
```

## 📚 Recursos e Documentação

### Tailwind CSS
- [Documentação Oficial](https://tailwindcss.com/docs)
- [Playground](https://play.tailwindcss.com/)
- [UI Components](https://tailwindui.com/)

### Astro + Tailwind
- [Integração Astro](https://docs.astro.build/en/guides/integrations-guide/tailwind/)
- [Exemplos](https://github.com/withastro/astro/tree/main/examples)

### Plugins
- [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography)
- [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [@tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)

## 💡 Dicas de Uso

### 1. Adicionar Cores Personalizadas
```javascript
// tailwind.config.cjs
theme: {
  extend: {
    colors: {
      'brand': '#3B82F6',
      'accent': '#8B5CF6',
    },
  },
}
```

### 2. Fontes Personalizadas
```javascript
theme: {
  extend: {
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'display': ['Poppins', 'sans-serif'],
    },
  },
}
```

### 3. Animações Customizadas
```javascript
theme: {
  extend: {
    animation: {
      'fade-in': 'fadeIn 0.5s ease-in',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
    },
  },
}
```

## ✅ Status

- 🟢 **Instalado**: Tailwind CSS 3.4.18
- 🟢 **Configurado**: Sim
- 🟢 **Funcionando**: Sim
- 🟢 **Modo Escuro**: Sim
- 🟢 **Responsivo**: Sim
- 🟢 **Typography**: Sim
- 🟢 **Build**: Otimizado

---

**Última atualização**: 09/10/2025
**Versão do Projeto**: 1.0.0


