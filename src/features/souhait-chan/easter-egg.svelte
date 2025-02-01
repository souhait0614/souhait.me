<script lang="ts">
  import { blur } from 'svelte/transition';

  import { optimizedSouhaitChanOld1, optimizedSouhaitChanOld2, optimizedSouhaitChanOld3 } from '@/constants/image';

  const { children } = $props();
  let imgIndex = $state(0);

  let combo: string[] = [];
  let time = Date.now();

  function combinator({ key }: KeyboardEvent) {
    const list = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a',
    ];
    const now = Date.now();

    if (!list.includes(key)) return;
    if (now - time > 2000) combo = [];

    combo.push(key);
    time = now;
    if (combo.join() !== list.slice(0, combo.length).join()) {
      combo = [];
      return;
    }
    if (combo.length === list.length) {
      imgIndex = (imgIndex + 1) % 4;
      globalThis.scrollTo({ top: 0, behavior: 'smooth' });
      combo = [];
    }
  }
</script>

{#if imgIndex === 0}
  <div transition:blur class='souhait-chan'>{@render children()}</div>
{/if}
{#if imgIndex === 1}
  <img
    transition:blur
    src={optimizedSouhaitChanOld1.src}
    {...optimizedSouhaitChanOld1.attributes}
    alt='古いすえちゃん'
    class='souhait-chan'
  />
{/if}
{#if imgIndex === 2}
  <img
    transition:blur
    src={optimizedSouhaitChanOld2.src}
    {...optimizedSouhaitChanOld2.attributes}
    alt='もっと古いすえちゃん'
    class='souhait-chan'
  />
{/if}
{#if imgIndex === 3}
  <img
    transition:blur
    src={optimizedSouhaitChanOld3.src}
    {...optimizedSouhaitChanOld3.attributes}
    alt='一番古いすえちゃん'
    class='souhait-chan'
  />
{/if}

<svelte:window on:keyup="{combinator}" />

<style lang='scss'>
  .souhait-chan {
    display: block;
    grid-area: souhait-chan;
    width: 100%;
    height: auto;
  }
</style>
