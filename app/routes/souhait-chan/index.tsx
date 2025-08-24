import type { Metadata } from '@/types/Metadata';
import DateCountdown from '@/components/$DateCountdown';
import LinkText from '@/components/LinkText';
import Portrait from '@/components/Portrait';
import { generateLinkAttributes } from '@/utils/generateLinkAttributes';

import SouhaitChanImage from './$SouhaitChanImage';

const arts = [
  {
    src: '/images/souhait-chan/fan-arts/sakananoonigiri1.webp',
    href: 'https://submarin.online/notes/9hd9mu9vdw',
    alt: '全体図',
  },
] as const satisfies Array<{
  src: string;
  href: string;
  alt: string;
}>;

export const metadata = {
  title: 'すえちゃん',
  description: 'いわゆるうちの子です',
} as const satisfies Metadata;

export default function Page() {
  return (
    <div>
      <div class='relative h-[30rem]'>
        <Portrait
          class={`
            absolute -right-8 -bottom-8 h-full rotate-z-5 opacity-40
            [view-transition-name:portrait-souhait-chan]
            max-sm:-right-12
            max-[15rem]:hidden
          `}
          src='/images/souhait-chan/portrait-large.webp'
          alt='すえちゃんのポートレート'
          fetchpriority='high'
        />
        <div class={`
          absolute inset-0 z-2 h-full w-full pr-16
          [view-transition-name:top-souhait-chan]
          max-sm:pr-8
        `}
        >
          <SouhaitChanImage />
        </div>
      </div>
      <div class='page-container'>
        <div class={`
          z-3 flex flex-wrap items-center justify-around gap-2 card
          [view-transition-name:top-souhait-chan-info]
        `}
        >
          <h1 class='page-title'>{metadata.title}</h1>
          <table>
            <tbody>
              <tr>
                <th>誕生日</th>
                <td>6月14日 (<DateCountdown month={6} day={14} />日後)</td>
              </tr>
              <tr>
                <th>年齢</th>
                <td>14~16歳くらい</td>
              </tr>
              <tr>
                <th>性別</th>
                <td>女性だと思う</td>
              </tr>
            </tbody>
          </table>
        </div>
        <section class='card'>
          <h2>ギャラリー</h2>
          <div class='grid grid-cols-2 gap-4'>
            {arts.map((art) => (
              <a key={art.src} class='block size-full' {...generateLinkAttributes({ href: art.href, external: true }).linkAttrs}>
                <img
                  src={art.src}
                  alt={art.alt}
                  class='aspect-square size-full object-contain'
                />
              </a>
            ))}
          </div>
        </section>
        <section class='card'>
          <h2>FAQ</h2>
          <section>
            <h3>すえ(souhait)って何？</h3>
            <p>願いとか望みとかの意味を持つフランス語の男性名詞です</p>
            <p>2021年辺りに命名したっぽいんですが、名前の由来はどこにも残ってませんでした</p>
            <p><s>そうはいととしか読めないところ以外は</s>いい名前だと思います</p>
          </section>
          <section>
            <h3>画像は何製？</h3>
            <p><LinkText href='https://chatgpt.com' external>ChatGPT</LinkText>のGPT-4oが生成した画像を加工しています</p>
            <p>
              <LinkText href='https://v2.souhait.me/souhait-chan/' external>以前のすえちゃん</LinkText>は
              <LinkText href='https://crypko.ai/' external>Crypko</LinkText>製でしたが、Crypkoのサービスが2025年6月30日に終了してしまいました
            </p>
          </section>
          <section>
            <h3>すえとすえちゃんの関係性は？</h3>
            <p>わからん</p>
            <p>少なくとも他人</p>
          </section>
          <section>
            <h3>すえちゃんの名前と画像をすえが使っている理由は？</h3>
            <p>勝手に使ってるだけ</p>
          </section>
        </section>
      </div>
    </div>
  );
}
