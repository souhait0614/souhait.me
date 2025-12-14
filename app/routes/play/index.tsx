import type { Metadata } from '@/types/Metadata';
import LinkText from '@/components/LinkText';

export const metadata = {
  title: 'お遊び',
  description: '個別で置くほどじゃないものを置いてます。そのうちsouhait.appに移植される予定',
} as const satisfies Metadata;

export default function Page() {
  return (
    <div class='page-container'>
      <h1 class='page-title'>{metadata.title}</h1>
      <div class='card'>
        <h2>そうはいとガチャ (閉鎖中)</h2>
        <p>絵文字がランダムで三つ出力され、結果をMisskeyに投稿したりコピーしたりできます。</p>
        <p><s>なにこれ</s></p>
        <p><LinkText href='https://submarin.online/@f/pages/souhait' external>これ</LinkText>を勝手に移植・改造しました</p>
        <p>React Server Componentsで発覚した複数の脆弱性の影響を考慮して旧サイトを閉鎖したため、現在はアクセスできません。そのうちなんとかします</p>
      </div>
      <div class='card'>
        <h2>そうはいとガチャ 10連 (閉鎖中)</h2>
        <p>絵文字がランダムで三つ×10出力され、結果をMisskeyに投稿したりコピーしたりできます。</p>
        <p><s>本当になにこれ</s></p>
        <p><LinkText href='https://submarin.online/@f/pages/souhait' external>これ</LinkText>を勝手に移植・改造しました</p>
        <p>React Server Componentsで発覚した複数の脆弱性の影響を考慮して旧サイトを閉鎖したため、現在はアクセスできません。そのうちなんとかします</p>
      </div>
    </div>
  );
}
