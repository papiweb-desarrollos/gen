import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const timestamp = Date.now();
    return {
      base: '/gen/', // Base path para GitHub Pages
      css: {
        postcss: './postcss.config.js'
      },
      build: {
        rollupOptions: {
          output: {
            entryFileNames: `assets/[name]-[hash]-${timestamp}.js`,
            chunkFileNames: `assets/[name]-[hash]-${timestamp}.js`,
            assetFileNames: `assets/[name]-[hash]-${timestamp}.[ext]`
          }
        }
      },
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
