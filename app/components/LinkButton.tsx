import type { FC, JSX } from 'hono/jsx';
import { tv, type VariantProps } from 'tailwind-variants';

import type { LinkWithChildren } from '@/types/Link';
import { generateLinkAttributes } from '@/utils/generateLinkAttributes';

const slots = tv({
  slots: {
    anchor: `
      @container block h-12 rounded-md px-4
      motion-safe:transition-colors
      @max-[8rem]:px-2
    `,
    textContainer: `
      flex size-full items-center gap-x-4
      @max-[8rem]:flex-col @max-[8rem]:justify-center
    `,
    text: `
      block w-full max-w-fit overflow-hidden text-nowrap text-ellipsis
      @max-[8rem]:text-xs
    `,
  },
  variants: {
    variant: {
      normal: {
        anchor: `
          bg-primary/0
          hover-focus-active:bg-primary/5 hover-focus-active:text-primary-text
        `,
      },
      active: { anchor: 'bg-primary/15 text-primary-text' },
    },
    align: {
      start: { textContainer: 'justify-start' },
      center: { textContainer: 'justify-center' },
      end: { textContainer: 'justify-end' },
    },
  },
  defaultVariants: {
    variant: 'normal',
    align: 'start',
  },
});

type NavButtonProps = Readonly<
  & LinkWithChildren
  & Pick<
    VariantProps<typeof slots>,
    | 'variant'
    | 'align'
  >
  & {
    icon?: FC<JSX.HTMLAttributes>;
    class?: string;
  }>;
export default async function LinkButton({ variant, align, children, icon: IconComponent, class: className, ...linkProps }: NavButtonProps) {
  const { linkAttrs } = generateLinkAttributes(linkProps);
  const { anchor, text, textContainer } = slots({ variant, align });
  return (
    <a
      {...linkAttrs}
      class={anchor({ class: className })}
    >
      <div class={textContainer()}>
        {IconComponent && (
          <IconComponent class='size-6' />
        )}
        <span
          class={text()}
        >{children}
        </span>
      </div>
    </a>
  );
}
