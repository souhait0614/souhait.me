import playformCompress from '@playform/compress';
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://souhait.me',
  prefetch: {
    defaultStrategy: 'hover',
  },
  image: {
    domains: ['img.souhait.me'],
  },
  trailingSlash: 'always',
  scopedStyleStrategy: 'class',
  integrations: [icon(), playformCompress()],
});
