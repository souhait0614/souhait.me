import type { NotFoundHandler } from 'hono';

import type { Metadata } from '@/types/Metadata';
import LinkText from '@/components/LinkText';

const handler: NotFoundHandler = (c) => {
  const metadata = {
    title: 'ページが見つかりませんでした',
    noIndex: true,
  } as const satisfies Metadata;

  c.status(404);
  return c.render(
    (
      <div class={`
        flex h-full flex-col items-center justify-center gap-4 text-center
      `}
      >
        <h1>404 Not Found</h1>
        <p>お探しのページは見つかりませんでした。</p>
        <p>URLが正しいか、ページが削除されていないかご確認ください。</p>
        <LinkText to='/'>トップページへ</LinkText>
      </div>
    ), { metadata },
  );
};

export default handler;
