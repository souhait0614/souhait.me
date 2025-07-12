import type { Context } from 'hono';
import { type JSX, useMemo } from 'hono/jsx';
import { jsxRenderer } from 'hono/jsx-renderer';

import IconApps from '@/components/icons/IconApps';
import IconChevronLeft from '@/components/icons/IconChevronLeft';
import IconError404 from '@/components/icons/IconError404';
import IconHeart from '@/components/icons/IconHeart';
import IconPlayCard from '@/components/icons/IconPlayCard';
import IconRibbon from '@/components/icons/IconRibbon';
import IconUserSquare from '@/components/icons/IconUserSquare';
import NavButton from '@/components/NavButton';
import { SITE_COPYRIGHT } from '@/constants/site';
import HyakkanoBackGround from '@/features/$HyakkanoBackGround';
import BaseHead from '@/features/BaseHead';

const generateNavButtonProps = (to: `/${string}`, context: Context) => ({
  to,
  variant: context.req.path === to ? 'active' : 'normal',
} as const);

const hiddenNavButton = (to: `/${string}`, context: Context) => context.req.path === to;

interface NavButtonProps {
  context: Context;
}

function NavButtons({ context }: NavButtonProps) {
  return (
    <>
      <NavButton icon={IconUserSquare} {...generateNavButtonProps('/about-me', context)}>すえについて</NavButton>
      <NavButton icon={IconRibbon} {...generateNavButtonProps('/souhait-chan', context)}>すえちゃん</NavButton>
      <NavButton icon={IconPlayCard} {...generateNavButtonProps('/play', context)}>お遊び</NavButton>
      <NavButton icon={IconApps} {...generateNavButtonProps('/product', context)}>作ったもの</NavButton>
      {hiddenNavButton('/hyakkano', context) && (
        <NavButton icon={IconHeart} {...generateNavButtonProps('/hyakkano', context)}>
          100カノ
        </NavButton>
      )}
      {hiddenNavButton('/gyagu', context) && (
        <NavButton icon={IconError404} {...generateNavButtonProps('/gyagu', context)}>
          ページが見つかりませんでした
        </NavButton>
      )}
    </>
  );
}

export default jsxRenderer(({ children, metadata }, context) => {
  const themeStyle = useMemo<JSX.CSSProperties>(() => {
    switch (metadata.pageType) {
      case 'hyakkano':
        return {
          '--color-primary': 'hsl(344, 83%, 62%)',
          '--color-primary-dark': 'hsl(344, 83%, 52%)',
          '--color-primary-text': 'hsl(344, 93%, 47%)',
          '--color-text': 'hsl(8, 81%, 18%)',
          '--color-text-muted': 'hsl(8, 11%, 18%)',
          '--color-background': 'hsl(348, 83%, 98%)',
          '--color-card': 'hsla(0, 0%, 100%, 0.627)',
        };
      case 'gyagu': {
        return {
          '--font-sans': '\'M PLUS Rounded 1c\', \'IBM Plex Sans JP\', \'BIZ UDPGothic\', \'Helvetica Neue\', Arial, \'Hiragino Kaku Gothic ProN\', \'Hiragino Sans\', Meiryo, sans-serif',
          'font-weight': 900,
          '--color-card': 'hsl(300, 50%, 99%, 0.8)',
        };
      }
      default:
        return {};
    }
  }, [metadata.pageType]);
  return (
    <html lang='en' style={themeStyle}>
      <head>
        <BaseHead metadata={metadata} context={context} />
        {metadata.pageType === 'gyagu' && (
          <>
            <link rel='preconnect' href='https://fonts.googleapis.com' />
            <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin='anonymous' />
            <link href='https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@900&display=swap' rel='stylesheet' />
          </>
        )}
      </head>
      <body>
        {metadata.pageType === 'hyakkano' && (
          <div class={`
            pointer-events-none fixed inset-0 -z-1
            after:absolute after:inset-0 after:block
            after:bg-linear-(--hyakkano-bg-gradient)
            motion-reduce:hidden
          `}
          >
            <HyakkanoBackGround />
          </div>
        )}
        {metadata.pageType === 'gyagu' && (
          <div class='pointer-events-none fixed inset-0 -z-1 bg-gyagu' />
        )}
        {metadata.layoutType !== 'zen' && (
          <nav class={`
            sticky top-[var(--page-padding-top)] z-1 mr-4 w-64 self-start
            rounded bg-background/80 pb-3
            [grid-area:nav]
            max-sm:hidden
          `}
          >
            <h2 class='sr-only'>ナビゲーション</h2>
            <div class={`
              mb-1 flex h-[calc(var(--text-2xl)*2+var(--spacing)*5)] flex-col
              justify-center text-text-muted
            `}
            >
              <NavButton icon={IconChevronLeft} {...generateNavButtonProps('/', context)}>トップページ</NavButton>
            </div>
            <div class='flex flex-col gap-1'>
              <NavButtons context={context} />
            </div>
          </nav>
        )}
        <main class={`
          [grid-area:content]
          [view-transition-name:content]
        `}
        >
          {metadata.layoutType !== 'zen' && (
            <header class={`
              pb-1 text-text-muted
              sm:hidden
            `}
            >
              <NavButton icon={IconChevronLeft} {...generateNavButtonProps('/', context)}>トップページ</NavButton>
            </header>
          )}
          {children}
        </main>
        <footer class={`
          text-center text-text-muted
          [grid-area:footer]
        `}
        >
          <small class='[view-transition-name:footer-copyright]'>
            {SITE_COPYRIGHT}
          </small>
        </footer>
        {metadata.layoutType !== 'zen' && (
          <nav class={`
            sticky bottom-0 -mr-[var(--page-padding-right)]
            -mb-[var(--page-padding-bottom)] -ml-[var(--page-padding-left)]
            w-[calc(100%+var(--page-padding-left)+var(--page-padding-right))]
            bg-background/80 py-2 pr-[var(--page-padding-right)]
            pl-[var(--page-padding-left)]
            [grid-area:nav]
            [view-transition-name:nav]
            sm:hidden
          `}
          >
            <h2 class='sr-only'>ナビゲーション</h2>
            <div class={`
              flex flex-row
              *:grow
            `}
            >
              <NavButtons context={context} />
            </div>
          </nav>
        )}
      </body>
    </html>
  );
});
