import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';

// mode injected from vite
export default ({ mode }) => {
  return defineConfig({
    server: {
      port: 8080,
    },
    plugins: [vue()],
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.json', '.mjs'],
      alias: {
        '@app': path.resolve(__dirname, '../app/src'),
        '@ui': path.resolve(__dirname, '../ui/src'),
      },
    },
  });
};
