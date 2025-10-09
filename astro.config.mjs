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
    tailwind(),
    mdx(),
    sitemap(),
    {
      name: 'copy-config',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          // Copiar config.yaml para dist
          const source = path.resolve(__dirname, './src/config.yaml');
          const dest = path.resolve(dir.pathname, './config.yaml');
          fs.copyFileSync(source, dest);
          console.log('✓ config.yaml copiado para dist');
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
  }
});