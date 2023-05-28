import * as styles from "./page.css"

import BasicPage from "../_components/BasicPage"
import { Card } from "../_components/Card"
import { NewTabLink } from "../_components/NewTabLink"

import type { Metadata } from "next"
import type { ReactNode } from "react"

interface ProductCardProps {
  name: string
  href: string
  description?: ReactNode
}
const ProductCard = ({ name, href, description }: ProductCardProps) => (
  <Card>
    <section className={styles.productCardContent}>
      <h2 className={styles.productName}>
        <NewTabLink href={href}>{name}</NewTabLink>
      </h2>
      {description}
    </section>
  </Card>
)

export const metadata: Metadata = {
  title: "作ったもの",
}

const Product = () => (
  <BasicPage>
    <p>並び順は適当です。</p>
    <ProductCard
      name="souhait.me"
      href="https://souhait.me"
      description={
        <>
          <p>このサイトです</p>
          <p>
            Next.jsとApp Routerが気になったの<s>と暇だったの</s>でApp RouterなNext.jsで作りました
          </p>
          <p>
            特に意味もなく
            <NewTabLink href="https://github.com/souhait0614/souhait.me">
              オープンソースとして公開
            </NewTabLink>
            しています
          </p>
        </>
      }
    />
    <ProductCard
      name="Submarin Converter (Web)"
      href="https://submarin-converter.vercel.app"
      description={
        <>
          <p>文字置換ライブラリを寄せ集めて作ったおもしろ日本語生成機のWeb版</p>
          <p>HTMLとSassとフレームワーク未使用TypeScriptで頑張っていた時代の遺産</p>
          <p>そのうち作り直します</p>
        </>
      }
    />
    <ProductCard
      name="MarinDeck"
      href="https://hisubway.online/marindeck/"
      description={
        <>
          <p>
            <NewTabLink href="https://tweetdeck.twitter.com">TweetDeck</NewTabLink>
            をスマホで使いやすくするためのラッパーアプリ
          </p>
          <p>内部で使われているカスタムCSSとJSの一部を作りました</p>
          <p>旧TweetDeckがサービス終了したら死にます</p>
        </>
      }
    />
    <ProductCard
      name="BulkBlock"
      href="https://hisubway.online/bulkblock/"
      description={
        <>
          <p>ツイートを検索して引っかかったツイートをしたユーザーを一括でブロックするWebアプリ</p>
          <p>
            当時ハマってたSvelteでフロントエンドを作りました(バックエンドは
            <NewTabLink href="https://stesan.dev">別人</NewTabLink>制作のPython)
          </p>
          <p>TwitterAPIがサービス終了したら死にます</p>
        </>
      }
    />
    <ProductCard
      name="CoCntbrBlocker"
      href="https://blocklist.hmpf.club"
      description={
        <>
          <p>BulkBlockを改造して作られたCoCシナリオネタバレアカウントブロックWebアプリ</p>
          <p>
            フロントを勝手に改修したりしました(メイン開発者はBulkBlockのバックエンドを作った
            <NewTabLink href="https://stesan.dev">別人</NewTabLink>)
          </p>
          <p>BulkBlockと同じくTwitterAPIがサービス終了したら死にます</p>
        </>
      }
    />
    <ProductCard
      name="FeedField"
      href="https://play.google.com/store/apps/details?id=online.hisubway.feedfield"
      description={
        <>
          <p>Android向けはてなブックマークコメントリーダー付きRSSリーダーアプリ</p>
          <p>内部で使われているWebアプリを作りました</p>
        </>
      }
    />
    <ProductCard
      name="Fast Coder"
      href="https://fastcoder.vercel.app"
      description={
        <p>
          何故かBase64で会話することが流行っていた時期があったので勢いで作った極小サイズBase64エンコーダー/デコーダーWebアプリ
        </p>
      }
    />
    <ProductCard
      name="Gastore"
      href="https://github.com/souhait0614/gastore"
      description={
        <>
          <p>
            <NewTabLink href="https://exdeck.jp">EXDeck</NewTabLink>
            用に作成したフレームワーク非依存の状態管理もどきJavaScriptライブラリ
          </p>
          <p>
            <NewTabLink href="https://github.com/souhait0614/gastore-plugin-solid">
              SolidJSとの連携用ライブラリ
            </NewTabLink>
            もあります
          </p>
          <p>EXDeckが開発中止(※諸説あり)になったので全く使われていません</p>
        </>
      }
    />
  </BasicPage>
)

export default Product
