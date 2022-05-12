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
        blog: resolve(root, 'blog.html'),
      },
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/style/vars-and-mixins.scss';`,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
}
