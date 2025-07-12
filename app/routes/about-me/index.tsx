import DateCountdown from '@/components/$DateCountdown';
import LinkText from '@/components/LinkText';
import Profile from '@/features/Profile';
import type { Metadata } from '@/types/Metadata';

import YearsOld from './$YearsOld';

export const metadata = {
  title: 'すえについて',
  description: 'あばうとみー',
} as const satisfies Metadata;

export default function Page() {
  return (
    <>
      <div class='page-container'>
        <h1 class='page-title'>{metadata.title}</h1>
        <Profile NameElement='p' />
        <div class={`
          flex flex-wrap items-center gap-2 card
          *:grow
        `}
        >
          <div>
            <p>なんかいろいろやってる人</p>
            <p>好きなもののためにだけ生きてます</p>
            <p>写真の子は<LinkText to='/souhait-chan'>すえちゃん</LinkText>です</p>
          </div>
          <div>
            <table>
              <tbody class='**:whitespace-nowrap'>
                <tr>
                  <th>誕生日</th>
                  <td>5月8日 (<DateCountdown month={5} day={8} />日後)</td>
                </tr>
                <tr>
                  <th>年齢</th>
                  <td><YearsOld year={2002} month={5} day={8} /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <section class='card'>
          <h2>名前について</h2>
          <p><ruby>souhait<rp>(</rp><rt>すえ</rt><rp>)</rp></ruby>です。<b>決してそうはいとではありません。</b></p>
          <p>前はLG Electronics Botだったりhakunagiだったりしました</p>
        </section>
        <section class='card'>
          <h2>ぷろぐらみんぐ</h2>
          <p>趣味その1兼お仕事です。<LinkText external href='https://ja.react.dev?uwu=true'>React</LinkText>なWebアプリをよく書いてます。</p>
          <p>バックエンドとかAWSもちょっとできます</p>
          <p>公開済みの制作物は<LinkText to='/product'>ここ</LinkText>に載せてあります</p>
        </section>
        <section class='card'>
          <h2>げーむ</h2>
          <p>趣味その2です。リズムゲームばっかりやってます。たまにサンドボックスやアクションをやったり。</p>
          <p>
            <LinkText external href='https://world-dai-star.com/game'>ワールドダイスター 夢のステラリウム</LinkText>に浸かっています。
            <LinkText external href='https://gakuen.idolmaster-official.jp'>学園アイドルマスター</LinkText>も少々
          </p>
          <p>
            ユメステリリース前は
            <LinkText external href='https://miku.sega.jp/mega39splus/'>初音ミク Project DIVA MEGA39’s+</LinkText>
            をひたすらやっていました。
            <LinkText external href='https://submarin.online/notes/9cvsn71ik9'>専用アケコンもあります。</LinkText>
          </p>
        </section>
        <section class='card'>
          <h2>あにめ</h2>
          <p>趣味その3です。放送中のアニメを追っかけたりしてます。</p>
          <p>2023年10月23日、<LinkText to='/hyakkano'>好本静ちゃんに人生を狂わせられました</LinkText></p>
        </section>
        <section>
          <h2>視聴覚室</h2>
          <div class='card p-0'>
            <lite-youtube videoid='Dh79Lk_wCD4' />
          </div>
        </section>
      </div>
      <script type='module' src='https://cdn.jsdelivr.net/npm/@justinribeiro/lite-youtube@1/lite-youtube.min.js' />
    </>
  );
}
