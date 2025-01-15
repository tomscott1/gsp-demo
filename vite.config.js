import { defineConfig } from 'vite';
import { ghPages } from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [ghPages()],
  base: '/gsp-demo/', // Replace with your repository name
  server: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
});
