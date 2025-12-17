import type { Handler } from 'hono';

import type { Metadata } from '@/types/Metadata';
import DateCountdown from '@/components/$DateCountdown';
import Details from '@/components/Details';
import LinkText from '@/components/LinkText';
import Profile from '@/features/Profile';

interface EventRecord {
  date: [year: number, month: number, date: number];
  content: string;
  titleLink?: string;
  labeledLinks?: Array<{ label: string; link: string; }>;
}

const records: Array<EventRecord> = [
  {
    date: [2023, 12, 9],
    content: '＠ダッシュストア',
    titleLink: 'https://submarin.online/notes/9n0y8hke3f',
  },
  {
    date: [2024, 2, 14],
    content: 'POP UP SHOP in 新宿マルイ メン',
    titleLink: 'https://submarin.online/notes/9pp6437scx',
  },
  {
    date: [2024, 3, 28],
    content: '好本 静 お揃いスマホカバー',
    titleLink: 'https://submarin.online/notes/9res8axnii',
  },
  {
    date: [2024, 4, 26],
    content: 'TSUTAYA POP UP SHOP',
    titleLink: 'https://submarin.online/notes/9sjmu69rfe',
  },
  {
    date: [2024, 6, 8],
    content: '君のことが大大大大大好きな100人の彼女展　Love for Family',
    titleLink: 'https://submarin.online/notes/9u9apnlb6j',
  },
  {
    date: [2024, 11, 15],
    content: '君のことが大大大大大好きな100人の彼女～花蜜庵～',
    titleLink: 'https://submarin.online/notes/a0lub78vu0',
  },
  {
    date: [2024, 11, 23],
    content: '週刊ヤングジャンプ45周年記念 ヤングジャンプ×墨絵SHOP',
    titleLink: 'https://submarin.online/notes/a0x4ziksao',
  },
  {
    date: [2024, 11, 24],
    content: '第1期一挙上映マラソン大会～100カノはスポーツですからね！～',
    titleLink: 'https://submarin.online/notes/a0z3hvi045',
  },
  {
    date: [2025, 2, 28],
    content: 'VIVIgnette 好本 静',
    titleLink: 'https://submarin.online/notes/a4sbxagew6',
  },
  {
    date: [2025, 3, 5],
    content: '飾りました',
    labeledLinks: [
      { label: 'Misskey', link: 'https://submarin.online/notes/a4zch2tcos' },
      { label: 'Twitter', link: 'https://twitter.com/souhait_100kano/status/1895635366306333074' },
    ],
  },
  {
    date: [2025, 6, 9],
    content: '100パズ 「きらめくジューンブライド 第1弾」 7位',
    titleLink: 'https://twitter.com/souhait_100kano/status/1931922734688457018',
    labeledLinks: [
      { label: '写経', link: 'https://twitter.com/ziburikito/status/1932051196933816393' },
    ],
  },
  {
    date: [2025, 8, 18],
    content: '100パズ 「キラキラ☆マリンサマー 第2弾」 2位',
    titleLink: 'https://twitter.com/souhait_100kano/status/1957281687634846083',
    labeledLinks: [
      { label: '写経', link: 'https://twitter.com/ziburikito/status/1957737939443806455' },
    ],
  },
  {
    date: [2025, 9, 19],
    content: 'AVIOT×君のことが大大大大大好きな100人の彼女 POP UP SHOP in 新宿マルイ メン',
    titleLink: 'https://twitter.com/souhait_100kano/status/1969656201991627199',
    labeledLinks: [
      { label: '19日戦利品', link: 'https://twitter.com/souhait_100kano/status/1968950653834740199' },
    ],
  },
  {
    date: [2025, 10, 18],
    content: 'スペシャルイベント 〜ありがと、大好きになってくれて〜',
    titleLink: 'https://twitter.com/souhait_100kano/status/1979489616307609906',
  },
  {
    date: [2025, 11, 1],
    content: '好本静生誕祭2025',
    titleLink: 'https://twitter.com/souhait_100kano/status/1984277145846501508',
  },
  {
    date: [2025, 12, 9],
    content: '100パズ 「恋するサンタのプレゼント大作戦♡ 第1弾」 第2位',
    titleLink: 'https://twitter.com/souhait_100kano/status/1998158810259890655',
    labeledLinks: [
      { label: '写経', link: 'https://twitter.com/ziburikito/status/1998736859690647709' },
    ],
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
        <p>
          <LinkText external href='https://submarin.online/clips/abshybjd9e'>アニメ第3話あたりで<ruby>全身に衝撃が走り<rp>(</rp><rt>ビビーン!!</rt><rp>)</rp></ruby></LinkText>、
          <LinkText external href='https://submarin.online/notes/9lp0ih3wih'>電子書籍版の単行本を全巻購入</LinkText>
        </p>
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
              <ul class='u-list-disc'>
                <li>誕生日: 5月21日 (<DateCountdown month={5} day={21} />日後)</li>
              </ul>
            </li>
            <li>
              <span>慈相千優</span>
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
              .map(({ date, content, titleLink, labeledLinks }) => {
                const [year, month, day] = date;
                const monthStr = month.toString().padStart(2, '0');
                const dayStr = day.toString().padStart(2, '0');
                return (
                  <article class='contents'>
                    <time class='text-sm' datetime={`${year}-${monthStr}-${dayStr}`}>{`${year}/${monthStr}/${dayStr}`}</time>
                    <div class='flex flex-row flex-wrap items-baseline gap-x-1'>
                      {titleLink
                        ? (
                          <LinkText external href={titleLink}>
                            <h3 class='inline text-base font-normal'>{content}</h3>
                          </LinkText>
                        )
                        : <h3 class='inline text-base font-normal'>{content}</h3>}
                      {
                        labeledLinks?.map(({ label, link }) => (
                          <p class='inline-block' key={label}>
                            (<LinkText external href={link}>{label}</LinkText>)
                          </p>
                        ))
                      }
                    </div>
                  </article>
                );
              })
          }
        </div>
      </section>
      <section class='card'>
        <h2>作ったもの</h2>
        <section>
          <h3>
            <LinkText external href='https://hyakkano.souhait.app/birthday'>
              キャラクター誕生日一覧
            </LinkText>
          </h3>
          <p>あと何日で誰が誕生日なのか一発で見たかったので整備</p>
          <p>TVアニメ未登場キャラネタバレ配慮機能付きです</p>
        </section>
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
