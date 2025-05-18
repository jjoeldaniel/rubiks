// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    worker: {
      // Attempt to force the output format of web workers to ES modules
      format: 'es',
      rollupOptions: {
        output: {
          // You can also try explicitly setting the format for worker chunks here
          format: 'es'
        }
      }
    },
    optimizeDeps: {
      exclude: [
        'cubing']
    }
  }
});
