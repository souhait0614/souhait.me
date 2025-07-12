import { startOfDay } from '@/utils/date';

const getDiffDays = (month: number, day: number): number => {
  const currentDay = startOfDay(new Date());
  const currentYear = currentDay.getFullYear();

  const targetDateThisYear = new Date(currentYear, month - 1, day);

  const diffTime = targetDateThisYear.getTime() - currentDay.getTime();
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 0) {
    diffDays = diffDays + 365;
  }

  return diffDays;
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
