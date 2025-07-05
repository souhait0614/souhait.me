import build from '@hono/vite-build/cloudflare-workers';
import adapter from '@hono/vite-dev-server/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import jsxPruneClassName from '@taiyme/vite-plugin-jsx-prune-classname';
import honox from 'honox/vite';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    host: true,
  },
  plugins: [
    tsconfigPaths(),
    jsxPruneClassName(),
    honox({
      devServer: { adapter },
      client: { input: ['./app/style.css'] },
    }),
    build(),
    tailwindcss(),
  ],
});
