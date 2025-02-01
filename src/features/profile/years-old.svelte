<script lang='ts'>
  let year = $state(new Date().getFullYear());
  const delta = $derived(year - 2002);

  const yearsOldText = $derived.by(() => {
    if (year === 114514) return 'イキスギ';
    if (delta >= 200) return `${delta}歳 おそらく死んでます`;
    return `${delta}歳`;
  });
</script>

{yearsOldText} (<input type="number" bind:value={year}>/5/8)

<style lang="scss">
  @use '../../styles/colors' as c;
  @use '../../styles/shapes' as s;

  input {
    min-width: 5rem;
    field-sizing: content;
    padding: 0 0.25rem;
    margin: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    background: none;
    background-color: #fff;
    border-color: c.$border;
    border-width: 1px;
    border-radius: s.$radius;
  }
</style>
