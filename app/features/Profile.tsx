import type { JSX } from 'hono/jsx';

import { generateLinkAttributes } from '@/utils/generateLinkAttributes';

import Portrait from '../components/Portrait';

const { linkAttrs: aboutMeLinkAttrs } = generateLinkAttributes({
  to: '/about-me',
});
const { linkAttrs: souhaitChanLinkAttrs } = generateLinkAttributes({
  to: '/souhait-chan',
});

interface ProfileProps {
  NameElement: keyof JSX.IntrinsicElements;
  showMoreInfo?: boolean;
  portraitFetchPriority?: 'high' | 'low' | 'auto';
  portraitLoading?: 'eager' | 'lazy';
}
export default function Profile({ NameElement, showMoreInfo, portraitFetchPriority, portraitLoading }: ProfileProps) {
  return (
    <div class={`
      @container relative
      [view-transition-name:profile]
    `}
    >
      <div class='w-full card p-0 leading-normal'>
        <div class='relative h-9 text-center leading-9'>
          <div class={`
            absolute top-0 left-0 flex items-center gap-2 p-3
            *:size-3 *:rounded-full
          `}
          >
            <span class='bg-red-200' />
            <span class='bg-yellow-200' />
            <span class='bg-green-200' />
          </div>
          <span class='text-sm text-text-muted'>Profile</span>
        </div>
        <div class='px-4 py-3 pt-1 font-mono'>
          <div class='flex items-baseline'>
            <NameElement class='m-0 inline text-base leading-normal font-bold'>すえ</NameElement>
            <p class='before:content-["/"]'>souhait</p>
          </div>
          <hr class={`
            m-0 h-[1.5rem] border-0
            after:content-['------------']
          `}
          />
          <div class='@xl:pr-8'>
            <table>
              <tbody
                class='@max-xl:*:flex @max-xl:*:flex-col'
              >
                <tr>
                  <th>Work</th>
                  <td>Web Developer</td>
                </tr>
                <tr>
                  <th class='align-top'>Love</th>
                  <td>
                    <ul>
                      <li>TypeScript</li>
                      <li>リズムゲーム</li>
                      <li>君のことが大大大大大好きな100人の彼女</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {showMoreInfo && (
          <a
            {...aboutMeLinkAttrs}
            class={`
              block bg-primary text-center leading-10 text-white
              motion-safe:transition-colors
              hover-focus-active:bg-primary-dark
            `}
          >もっと見る
          </a>
        )}
      </div>
      <a
        {...souhaitChanLinkAttrs}
        class={`
          group/LinkPortrait absolute -top-10 -right-8 block origin-center
          rotate-z-10
          @max-xl:-right-4
          @max-sm:-top-4
          @max-2xs:top-0
        `}
      >
        <Portrait
          class={`
            w-40 shadow-xl
            [view-transition-name:portrait-souhait-chan]
            group-hover-focus-active/LinkPortrait:rotate-z-2
            group-hover-focus-active/LinkPortrait:shadow-2xl
            motion-safe:transition-[box-shadow,transform]
            @max-sm:w-34
            @max-2xs:w-30
          `}
          src='/images/souhait-chan/portrait-small.webp'
          alt='すえちゃんのポートレート'
          fetchpriority={portraitFetchPriority}
          loading={portraitLoading}
        />
      </a>
    </div>
  );
}
