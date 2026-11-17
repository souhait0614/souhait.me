import { startOfDay } from '@/utils/date';

const getDiffDays = (month: number, day: number): number => {
  const currentDay = startOfDay(new Date());
  const nextDate = new Date(currentDay.getFullYear(), month - 1, day);

  if (nextDate < currentDay) {
    nextDate.setFullYear(currentDay.getFullYear() + 1);
  }

  return Math.round((nextDate.getTime() - currentDay.getTime()) / (1000 * 60 * 60 * 24));
};

interface DateCountdownProps {
  month: number;
  day: number;
}

export default function DateCountdown({ month, day }: DateCountdownProps) {
  const diffDays = getDiffDays(month, day);

  return (
    <span>{diffDays}</span>
  );
}
