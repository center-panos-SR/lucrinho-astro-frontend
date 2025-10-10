// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://lucrinho.com', // Atualize com seu domínio
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    mdx(),
    sitemap(),
    {
      name: 'copy-config',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          // Copiar config.yaml para dist
          const source = path.resolve(__dirname, './src/config.yaml');
          const destDir = fileURLToPath(dir);
          const dest = path.join(destDir, 'config.yaml');
          if (fs.existsSync(source)) {
            fs.copyFileSync(source, dest);
            console.log('✓ config.yaml copiado para dist');
          }
        },
      },
    },
    {
      name: 'cache-headers',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          // Criar arquivo _headers para Netlify ou similar
          const headersContent = `
# Cache de longo prazo para recursos estáticos
/_astro/*
  Cache-Control: public, max-age=31536000, immutable

/favicon-lucrinho.webp
  Cache-Control: public, max-age=31536000, immutable

/*.png
  Cache-Control: public, max-age=31536000, immutable

/*.jpg
  Cache-Control: public, max-age=31536000, immutable

/*.webp
  Cache-Control: public, max-age=31536000, immutable

/*.otf
  Cache-Control: public, max-age=31536000, immutable

/*.woff
  Cache-Control: public, max-age=31536000, immutable

/*.woff2
  Cache-Control: public, max-age=31536000, immutable

# Cache para HTML
/*.html
  Cache-Control: public, max-age=3600, must-revalidate
`;
          const destDir = fileURLToPath(dir);
          const headersPath = path.join(destDir, '_headers');
          fs.writeFileSync(headersPath, headersContent.trim());
          console.log('✓ Arquivo _headers criado com configurações de cache');
        },
      },
    },
    {
      name: 'copy-serve-config',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          // Copiar serve.json para dist
          const source = path.resolve(__dirname, './serve.json');
          const destDir = fileURLToPath(dir);
          const dest = path.join(destDir, 'serve.json');
          if (fs.existsSync(source)) {
            fs.copyFileSync(source, dest);
            console.log('✓ serve.json copiado para dist');
          }
        },
      },
    },
  ],
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
    build: {
      cssCodeSplit: true,
      minify: 'esbuild',
      target: 'esnext',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro']
          },
          assetFileNames: (assetInfo) => {
            let extType = assetInfo.name.split('.').at(1);
            if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(extType)) {
              extType = 'img';
            }
            return `_astro/${extType}/[name]-[hash][extname]`;
          },
          chunkFileNames: '_astro/js/[name]-[hash].js',
          entryFileNames: '_astro/js/[name]-[hash].js',
        }
      }
    },
    server: {
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    }
  },
  build: {
    inlineStylesheets: 'always',
    assets: '_astro'
  },
  compressHTML: true,
  output: 'static'
});