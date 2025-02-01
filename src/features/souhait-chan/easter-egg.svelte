<script lang="ts">
  import type { Snippet } from 'svelte';
  import type { HTMLImgAttributes } from 'svelte/elements';
  import { blur } from 'svelte/transition';


  interface Props {
    optimizedOldSouhaitChans: HTMLImgAttributes[];
    children: Snippet;
  }

  const { children, optimizedOldSouhaitChans }: Props = $props();
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
  <div transition:blur class='container'>{@render children()}</div>
{/if}
{#if imgIndex === 1}
  <div transition:blur class='container'>
    <img
      transition:blur
      {...optimizedOldSouhaitChans.at(0)}
      alt='古いすえちゃん'
      class='container'
    />
  </div>
{/if}
{#if imgIndex === 2}
  <div transition:blur class='container'>
    <img
      transition:blur
      {...optimizedOldSouhaitChans.at(1)}
      alt='もっと古いすえちゃん'
      class='container'
    />
  </div>
{/if}
{#if imgIndex === 3}
  <div transition:blur class='container'>
    <img
      transition:blur
      {...optimizedOldSouhaitChans.at(2)}
      alt='一番古いすえちゃん'
      class='container'
    />
  </div>
{/if}
<!-- {#if imgIndex === 1}
  <img
    transition:blur
    src={optimizedSouhaitChanOld1.src}
    {...optimizedSouhaitChanOld1.attributes}
    alt='古いすえちゃん'
    class='container'
  />
{/if}
{#if imgIndex === 2}
  <img
    transition:blur
    src={optimizedSouhaitChanOld2.src}
    {...optimizedSouhaitChanOld2.attributes}
    alt='もっと古いすえちゃん'
    class='container'
  />
{/if}
{#if imgIndex === 3}
  <img
    transition:blur
    src={optimizedSouhaitChanOld3.src}
    {...optimizedSouhaitChanOld3.attributes}
    alt='一番古いすえちゃん'
    class='container'
  />
{/if} -->

<svelte:window on:keyup="{combinator}" />

<style lang='scss'>
  .container {
    display: block;
    grid-area: souhait-chan;
    width: 100%;
    height: auto;
  }
</style>
