import type { PropsWithChildren, ReactNode } from 'hono/jsx';

import IconChevronDown from './icons/IconChevronDown';

interface DetailsProps {
  title: ReactNode;
}
export default function Details({ title, children }: PropsWithChildren<DetailsProps>) {
  return (
    <details class='group/Details my-2'>
      <summary class='details-summary'>
        {title}
        <IconChevronDown class={`
          size-5
          group-open/Details:rotate-180
          motion-safe:transition-transform
        `}
        />
      </summary>
      <div class='mt-2'>{children}</div>
    </details>
  );
}
