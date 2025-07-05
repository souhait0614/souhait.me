import type { JSX, PropsWithChildren } from 'hono/jsx';

import LinkText from './LinkText';

interface ProductCardProps {
  TitleElement: keyof JSX.IntrinsicElements;
  title: string;
  href: string;
}
export default function ProductCard({ TitleElement, href, title, children }: PropsWithChildren<ProductCardProps>) {
  return (
    <div class='card'>
      <TitleElement>
        <LinkText href={href} external>{title}</LinkText>
      </TitleElement>
      {children}
    </div>
  );
}
