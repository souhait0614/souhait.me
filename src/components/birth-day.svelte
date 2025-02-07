<script lang='ts'>
  import { differenceInDays, isAfter, set, startOfToday } from 'date-fns';

  type Props = {
    month: number;
    date: number;
  };
  const { month, date }: Props = $props();

  const getDaysLater = (month: number, date: number) => {
    const now = startOfToday();
    const birthDay = set(startOfToday(), {
      month,
      date,
    });
    console.log(now, birthDay);
    return differenceInDays(birthDay, now) + (isAfter(now, birthDay) ? 365 : 0);
  };
</script>

<span>{month + 1}/{date} ({getDaysLater(month, date)}日後)</span>
