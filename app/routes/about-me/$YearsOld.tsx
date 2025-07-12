import { useMemo, useState } from 'hono/jsx';

import { startOfDay } from '@/utils/date';

interface YearsOldProps {
  year: number;
  month: number;
  day: number;
}
export default function YearsOld({ year, month, day }: YearsOldProps) {
  const currentDate = startOfDay(new Date());
  const currentYear = currentDate.getFullYear();
  const [targetYear, setTargetYear] = useState<string | null>(
    currentYear.toString(),
  );
  const age = useMemo(() => (Number(targetYear) || 0) - year, [targetYear, year]);

  const handleChange = (event: Event) => {
    if (event.target instanceof HTMLInputElement) {
      setTargetYear(event.target.value ? event.target.value : null);
    }
  };

  return (
    <span>
      {age}歳 (
      <input
        type='number'
        value={targetYear ?? ''}
        onInput={handleChange}
        class='w-[4rem] text-center'
      />/{month}/{day}
      )
    </span>
  );
}
