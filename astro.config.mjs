import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  build: {
    assets: 'assets',
    assetsInlineLimit: 0 // Не инлайнить MP4 файлы
  },
  vite: {
    assetsInclude: ['**/*.mp4', '**/*.webm'],
    server: {
      fs: {
        allow: ['..']
      }
    },
    build: {
      rollupOptions: {
        external: ['/videos/*.mp4', '/videos/*.webm']
      }
    }
  }
}); 