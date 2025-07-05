import LinkText from '@/components/LinkText';
import ProductCard from '@/components/ProductCard';
import type { Metadata } from '@/types/Metadata';

export const metadata = {
  title: '作ったもの',
  description: 'ポートフォリオっぽい何か',
} as const satisfies Metadata;

export default function Page() {
  return (
    <div class='page-container'>
      <h1 class='page-title'>{metadata.title}</h1>
      <p>並びは適当です</p>
      <ProductCard TitleElement='h2' title='souhait.me' href='https://souhait.me'>
        <p>このサイトです</p>
        <p>App RouterなNext.js→Astroと乗り換えてきて現在はTailwindなHonoX製です</p>
        <p>特に意味もなく<LinkText href='https://github.com/souhait0614/souhait.me' external>オープンソースとして公開</LinkText>しています</p>
      </ProductCard>
      <ProductCard TitleElement='h2' title='Monesting' href='https://github.com/souhait0614/monesting'>
        <p>完全自分用サブスクリプション管理Webアプリ</p>
        <p>SvelteKitがいい感じだったのでSMUIと組み合わせて作りました <s>でもSMUIやめたい</s></p>
        <p>誰でも使える形での一般公開はしてないです</p>
      </ProductCard>
      <ProductCard TitleElement='h2' title='Submarin Converter' href='https://github.com/souhait0614/submarin-converter#readme'>
        <p>文字置換ライブラリを寄せ集めて作ったおもしろ日本語生成機のTypeScriptライブラリ版</p>
        <p>下のWeb版からだいぶ月日が経ってから作ったので割といい感じです</p>
      </ProductCard>
      <ProductCard TitleElement='h2' title='Submarin Converter (Web)' href='https://submarin-converter.vercel.app/'>
        <p>文字置換ライブラリを寄せ集めて作ったおもしろ日本語生成機のWeb版</p>
        <p>HTMLとSassとフレームワーク未使用TypeScriptで頑張っていた時代の遺産</p>
        <p>上のライブラリを使って作り直したい</p>
      </ProductCard>
      <ProductCard TitleElement='h2' title='MarinDeck' href='https://hisubway.online/marindeck/'>
        <p><LinkText href='https://tweetdeck.twitter.com/' external>TweetDeck</LinkText>をスマホで使いやすくするためのラッパーアプリ</p>
        <p>内部で使われているカスタムCSSとJSの一部を作りました</p>
        <p>旧TweetDeckがサービス終了したので死にました</p>
      </ProductCard>
      <ProductCard TitleElement='h2' title='BulkBlock' href='https://hisubway.online/bulkblock/'>
        <p>ツイートを検索して引っかかったツイートをしたユーザーを一括でブロックするWebアプリ</p>
        <p>当時ハマってたSvelteでフロントエンドを作りました(バックエンドは<LinkText href='https://stesan.dev/' external>別人</LinkText>制作のPython)</p>
        <p>TwitterAPIが実質サービス終了したので死にました</p>
      </ProductCard>
      <ProductCard TitleElement='h2' title='CoCntbrBlocker' href='https://blocklist.hmpf.club/'>
        <p>BulkBlockを改造して作られたCoCシナリオネタバレアカウントブロックWebアプリ</p>
        <p>フロントを勝手に改修したりしました(メイン開発者はBulkBlockのバックエンドを作った<LinkText href='https://stesan.dev/' external>別人</LinkText>)</p>
        <p>BulkBlockと同じくTwitterAPIが実質サービス終了したので死にました</p>
      </ProductCard>
      <ProductCard
        TitleElement='h2'
        title='FeedField'
        href='https://play.google.com/store/apps/details?id=online.hisubway.feedfield'
      >
        <p>Android向けはてなブックマークコメントリーダー付きRSSリーダーアプリ</p>
        <p>内部で使われているWebアプリを作りました</p>
      </ProductCard>
      <ProductCard TitleElement='h2' title='Fast Coder' href='https://fastcoder.vercel.app/'>
        <p>何故かBase64で会話することが流行っていた時期があったので勢いで作った極小サイズBase64エンコーダー/デコーダーWebアプリ</p>
      </ProductCard>
    </div>
  );
}
