<script lang='ts'>
  import { isBefore } from 'date-fns';

  const currentDate = new Date();
  const currentYearBirthDay = new Date(currentDate.getFullYear(), 4, 8);

  let year = $state(isBefore(currentDate, currentYearBirthDay) ? currentDate.getFullYear() - 1 : currentDate.getFullYear());
  const delta = $derived(year - 2002);

  const yearsOldText = $derived.by(() => {
    if (year === 114514) return 'イキスギ';
    if (delta >= 200) return `${delta}歳 おそらく死んでます`;
    return `${delta}歳`;
  });
</script>

<span>
  {yearsOldText} (<input type="number" bind:value={year}>/{currentYearBirthDay.getMonth() + 1}/{currentYearBirthDay.getDate()})
</span>

<style lang="scss">
  @use '../../styles/colors' as c;
  @use '../../styles/shapes' as s;

  input {
    width: 6rem;
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
