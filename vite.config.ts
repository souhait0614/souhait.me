import build from '@hono/vite-build/cloudflare-workers';
import adapter from '@hono/vite-dev-server/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import jsxPruneClassName from '@taiyme/vite-plugin-jsx-prune-classname';
import honox from 'honox/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    host: true,
  },
  plugins: [
    jsxPruneClassName(),
    honox({
      devServer: { adapter },
      client: { input: ['./app/client.ts', './app/style.css'] },
    }),
    build(),
    tailwindcss(),
  ],
});
