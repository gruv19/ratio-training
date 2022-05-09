import { resolve } from 'path';

const root = resolve(__dirname, 'src', 'pages');
const outDir = resolve(__dirname, 'dist');

export default {
  root,
  server: {
    port: 4040,
    host: '0.0.0.0'
  },
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        about: resolve(root, 'about.html'),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '',
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
}