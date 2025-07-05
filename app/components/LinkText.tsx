import { tv, type VariantProps } from 'tailwind-variants';

import IconExternalLink from '@/components/icons/IconExternalLink';
import type { LinkWithChildren } from '@/types/Link';
import { generateLinkAttributes } from '@/utils/generateLinkAttributes';

const slots = tv({
  slots: {
    anchor: 'group/LinkText',
    text: 'group-hover/LinkText:underline',
    icon: 'mt-[-0.125em] mr-[0.125em] inline size-[0.85em] align-middle',
  },
  variants: {
    variant: {
      primary: {
        anchor: 'text-primary-text',
      },
    },
    external: {
      true: {
        text: 'mr-[0.125em]',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

type LinkTextProps = Readonly<
  & LinkWithChildren
  & Pick<
    VariantProps<typeof slots>,
    | 'variant'
  >
>;

export default function LinkText({ children, variant, ...linkProps }: LinkTextProps) {
  const { linkAttrs, isExternalLink } = generateLinkAttributes(linkProps);

  const { anchor, text, icon } = slots({
    variant,
    external: isExternalLink,
  });

  return (
    <a
      {...linkAttrs}
      class={anchor()}
    >
      <span class={text()}>
        {children}
      </span>
      {isExternalLink && (
        <IconExternalLink
          class={icon()}
        />
      )}
    </a>
  );
}
