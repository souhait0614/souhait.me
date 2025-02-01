import { vitePreprocess } from '@astrojs/svelte';

/** @type {import('svelte/compiler').CompileOptions} */
export default {
  preprocess: vitePreprocess(),
  runes: true,
};
