import type { JSX } from 'hono/jsx';
import { tv } from 'tailwind-variants';

const slots = tv({
  slots: {
    container: 'relative aspect-54/85 bg-white',
    image: `
      absolute top-[calc(8/85*100%)] left-1/2 aspect-46/62 w-[calc(46/54*100%)]
      -translate-x-1/2 object-contain
    `,
  },
});

interface PortraitProps extends JSX.HTMLAttributes {
  src?: string;
  alt?: string;
  fetchpriority?: 'high' | 'low' | 'auto';
  loading?: 'eager' | 'lazy';
}
export default async function Portrait({ src, alt, class: className, fetchpriority, loading, ...props }: PortraitProps) {
  const { container, image } = slots();
  return (
    <div {...props} class={container({ class: await className })}>
      <img
        class={image()}
        src={src}
        alt={alt}
        fetchpriority={fetchpriority}
        loading={loading}
      />
    </div>
  );
}
