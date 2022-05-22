import { resolve } from 'path';

const root = resolve(__dirname, 'src');
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
