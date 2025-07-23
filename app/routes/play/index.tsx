import type { Metadata } from '@/types/Metadata';
import LinkText from '@/components/LinkText';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: 'お遊び',
  description: '個別で置くほどじゃないものを置いてます。そのうちsouhait.appに移植される予定',
} as const satisfies Metadata;

export default function Page() {
  return (
    <div class='page-container'>
      <h1 class='page-title'>{metadata.title}</h1>
      <ProductCard TitleElement='h2' href='https://v1.souhait.me/play/souhaito-gacha' title='そうはいとガチャ'>
        <p>絵文字がランダムで三つ出力され、結果をMisskeyに投稿したりコピーしたりできます。</p>
        <p><s>なにこれ</s></p>
        <p><LinkText href='https://submarin.online/@f/pages/souhait' external>これ</LinkText>を勝手に移植・改造しました</p>
      </ProductCard>
      <ProductCard TitleElement='h2' href='https://v1.souhait.me/play/souhaito-gacha-ten' title='そうはいとガチャ 10連'>
        <p>絵文字がランダムで三つ×10出力され、結果をMisskeyに投稿したりコピーしたりできます。</p>
        <p><s>本当になにこれ</s></p>
        <p><LinkText href='https://submarin.online/@f/pages/souhait' external>これ</LinkText>を勝手に移植・改造しました</p>
      </ProductCard>
    </div>
  );
}
