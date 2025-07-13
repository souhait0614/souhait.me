import type { Handler } from 'hono';

import DateCountdown from '@/components/$DateCountdown';
import Details from '@/components/Details';
import LinkText from '@/components/LinkText';
import Profile from '@/features/Profile';
import type { Metadata } from '@/types/Metadata';

interface EventRecord {
  date: [year: number, month: number, date: number];
  content: string;
  link?: string;
  misskeyLink?: string;
  twitterLink?: string;
}

const records: Array<EventRecord> = [
  {
    date: [2023, 12, 9],
    content: '＠ダッシュストア',
    link: 'https://submarin.online/notes/9n0y8hke3f',
  },
  {
    date: [2024, 2, 14],
    content: 'POP UP SHOP in 新宿マルイ メン',
    link: 'https://submarin.online/notes/9pp6437scx',
  },
  {
    date: [2024, 3, 28],
    content: 'お揃いスマホカバー',
    link: 'https://submarin.online/notes/9res8axnii',
  },
  {
    date: [2024, 4, 26],
    content: 'TSUTAYA POP UP SHOP',
    link: 'https://submarin.online/notes/9sjmu69rfe',
  },
  {
    date: [2024, 6, 8],
    content: '君のことが大大大大大好きな100人の彼女展　Love for Family',
    link: 'https://submarin.online/notes/9u9apnlb6j',
  },
  {
    date: [2024, 11, 15],
    content: '君のことが大大大大大好きな100人の彼女～花蜜庵～',
    link: 'https://submarin.online/notes/a0lub78vu0',
  },
  {
    date: [2024, 11, 23],
    content: '週刊ヤングジャンプ45周年記念 ヤングジャンプ×墨絵SHOP',
    link: 'https://submarin.online/notes/a0x4ziksao',
  },
  {
    date: [2024, 11, 24],
    content: '第1期一挙上映マラソン大会～100カノはスポーツですからね！～',
    link: 'https://submarin.online/notes/a0z3hvi045',
  },
  {
    date: [2025, 2, 28],
    content: 'VIVIgnette 好本 静',
    link: 'https://submarin.online/notes/a4sbxagew6',
  },
  {
    date: [2025, 3, 5],
    content: '飾りました',
    misskeyLink: 'https://submarin.online/notes/a4zch2tcos',
    twitterLink: 'https://twitter.com/souhait_100kano/status/1895635366306333074',
  },
  {
    date: [2025, 6, 9],
    content: '100パズ 「きらめくジューンブライド 第1弾」 TOP10',
    link: 'https://twitter.com/souhait_100kano/status/1931922734688457018',
  },
];

const handler: Handler = (c) => {
  const showProfile = c.req.query('profile') !== undefined;

  const metadata = {
    title: '100カノ',
    description: 'わざわざこんなページを作ってしまうほど君のことが大大大大大好きな100人の彼女に人生を狂わせられた人の足跡的なページです',
    noIndex: true,
    pageType: 'hyakkano',
    layoutType: showProfile ? 'zen' : 'normal',
  } as const satisfies Metadata;

  return c.render(
    <div class='page-container'>
      <h1 class='page-title'>100カノ</h1>
      <p>
        わざわざこんなページを作ってしまうほど
        <LinkText href='https://hyakkano.com' external>君のことが大大大大大好きな100人の彼女</LinkText>
        に人生を狂わせられた人の足跡的なページです
      </p>
      <section class='card'>
        <h2>あなたの100カノはどこから？</h2>
        <p>私はアニメ第1期から</p>
        <p>アニメ第4話あたりで<ruby>全身に衝撃が走り<rp>(</rp><rt>ビビーン!!</rt><rp>)</rp></ruby>、<LinkText external href='https://submarin.online/notes/9lp0ih3wih'>電子書籍版の単行本を全巻購入</LinkText></p>
        <p>そのまま少年ジャンプ＋→ヤンジャン＋へ</p>
      </section>
      <section class='card'>
        <h2>特に好きな方々</h2>
        <ul class='u-list-disc'>
          <li>
            <LinkText external href='https://hyakkano.com/character/shizuka/'>好本静</LinkText>
            <ul class='u-list-disc'>
              <li>誕生日: 11月1日 (<DateCountdown month={11} day={1} />日後)</li>
            </ul>
          </li>
          <li>
            <LinkText external href='https://hyakkano.com/character/kusuri/'>薬膳楠莉</LinkText>
            <ul class='u-list-disc'>
              <li>誕生日: 4月18日 (<DateCountdown month={4} day={18} />日後)</li>
            </ul>
          </li>
        </ul>
        <Details title='アニメ未登場'>
          <ul class='mt-2 u-list-disc'>
            <li>
              <span>毛樽井亜愛子衣</span>
              <ul class='u-list-disc'>
                <li>誕生日: 2月5日 (<DateCountdown month={2} day={5} />日後)</li>
              </ul>
            </li>
            <li>
              <span>雪房田夢留</span>
              <ul class='u-list-disc'>
                <li>誕生日: 11月30日 (<DateCountdown month={11} day={30} />日後)</li>
              </ul>
            </li>
            <li>
              <span>端須蓮葉</span>
            </li>
          </ul>
        </Details>
      </section>
      <section class='card'>
        <h2>かわいい</h2>
        <ul class='u-list-disc'>
          {Array.from({ length: 5 }, (_, i) => i).map(() => (
            <li>
              <LinkText external href='https://hyakkano.com/character/shizuka/'>好本静ちゃん</LinkText>
            </li>
          ))}
        </ul>
        <Details title='かわいい'>
          <ul class={`
            mt-2 grid u-list-disc grid-cols-[repeat(auto-fill,minmax(8em,1fr))]
          `}
          >
            {Array.from({ length: 24 }, (_, i) => i).map(() => (
              <li>
                <LinkText external href='https://hyakkano.com/character/shizuka/'>好本静ちゃん</LinkText>
              </li>
            ))}
          </ul>
          <p class='text-right'><small>ギチギチ〜♥</small></p>
        </Details>
      </section>
      <section class='card'>
        <h2>足跡的な</h2>
        <p>新しい順に並んでいます</p>
        <div class='mt-2 grid grid-cols-[auto_1fr] items-baseline gap-2'>
          {
            records
              .sort((a, b) => {
                const aDate = new Date(a.date[0], a.date[1] - 1, a.date[2]);
                const bDate = new Date(b.date[0], b.date[1] - 1, b.date[2]);
                return bDate.getTime() - aDate.getTime();
              })
              .map(({ date, content, link, twitterLink, misskeyLink }) => {
                const [year, month, day] = date;
                const monthStr = month.toString().padStart(2, '0');
                const dayStr = day.toString().padStart(2, '0');
                return (
                  <article class='contents'>
                    <time class='text-sm' datetime={`${year}-${monthStr}-${dayStr}`}>{`${year}/${monthStr}/${dayStr}`}</time>
                    <div class='flex flex-row items-baseline gap-x-1'>
                      {link
                        ? (
                          <LinkText external href={link}>
                            <h3 class='inline text-base font-normal'>{content}</h3>
                          </LinkText>
                        )
                        : <h3 class='inline text-base font-normal'>{content}</h3>}
                      {
                        misskeyLink && (
                          <span>
                            (<LinkText external href={misskeyLink}>Misskey</LinkText>)
                          </span>
                        )
                      }
                      {
                        twitterLink && (
                          <span>
                            (<LinkText external href={twitterLink}>Twitter</LinkText>)
                          </span>
                        )
                      }
                    </div>
                  </article>
                );
              })
          }
        </div>
      </section>
      {showProfile && (
        <section>
          <h2>ところであなたは誰</h2>
          <Profile NameElement='p' showMoreInfo portraitLoading='lazy' />
        </section>
      )}
    </div>,
    { metadata },
  );
};

export default handler;
