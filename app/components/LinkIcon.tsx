import type { FC, JSX } from 'hono/jsx';

import type { Link } from '@/types/Link';
import { generateLinkAttributes } from '@/utils/generateLinkAttributes';

type LinkIconProps = Readonly<
  & Link
  & {
    icon: FC<JSX.HTMLAttributes>;
  }
>;

export default function LinkIcon({ icon: IconComponent, ...linkProps }: LinkIconProps) {
  const { linkAttrs } = generateLinkAttributes(linkProps);

  return (
    <a
      {...linkAttrs}
      class={`
        inline-grid rounded-full p-2
        motion-safe:transition-colors
        hover-focus-active:bg-primary/5 hover-focus-active:text-primary
      `}
    >
      <IconComponent class='size-8' />
    </a>
  );
}
