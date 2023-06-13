import * as styles from "./page.css"

import BasicPage from "../_components/BasicPage"
import { Card, CardContent, CardHeader } from "../_components/Card"
import { NewTabLink } from "../_components/NewTabLink"
import { SouhaitProfileImage } from "../_components/SouhaitProfileImage"
import DaysLater from "../_components/DaysLater"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "すえちゃんについて",
}

const Product = () => (
  <BasicPage>
    <div className={styles.profileContainer}>
      <SouhaitProfileImage />
      <div className={styles.profileCardContainer}>
        <Card>
          <CardContent asChild>
            <div>
              <CardHeader asChild>
                <h1>すえちゃん</h1>
              </CardHeader>
              <dl>
                <dt>誕生日</dt>
                <dd>
                  6/14 (<DaysLater month={6} day={14} />)
                </dd>
                <dt>年齢</dt>
                <dd>14~16くらい</dd>
                <dt>性別</dt>
                <dd>女性だと思う</dd>
              </dl>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    <Card>
      <CardContent>
        <CardHeader>設定的なやつ</CardHeader>
        <p>身の上話をほとんどしてくれないので謎だらけ</p>
        <p>唯一誕生日だけはっきりとしている</p>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <CardHeader>ギャラリー</CardHeader>
        <p>ファンアート置き場予定地</p>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <CardHeader>FAQ</CardHeader>
        <section>
          <h3>設定が曖昧すぎない？</h3>
          <p>
            2020年辺りに作ったDiscordBotのとても適当に決めた設定から違和感のないものを流用しようとして、残ってる文献が
            <NewTabLink href="https://wiki.魔剤.monster/%E3%81%97%E3%81%88%E3%82%8D">
              魔剤wikiのこれ
            </NewTabLink>
            しかなかったので曖昧な設定にしかなりませんでした
          </p>
          <p>
            <s>正直物書きでも絵描きでもない人のオリキャラ設定なんてこんなもんでいいと思う</s>
          </p>
          <p>
            DiscordBotに使う予定で生み出したものの、設定の流用元とは違って実際に稼働することはなかったので、設定を固める機会がなかったのもあります
          </p>
        </section>
        <section>
          <h3>すえ(souhait)って何？</h3>
          <p>願いとか望みとかの意味を持つフランス語の男性名詞です</p>
          <p>2021年辺りに命名したっぽいんですが、名前の由来はどこにも残ってませんでした</p>
          <p>
            <s>そうはいとにしか見えないところ以外は</s>気に入っているので問題ありません
          </p>
        </section>
        <section>
          <h3>画像は何製？</h3>
          <p>
            <NewTabLink href="https://crypko.ai">Crypko</NewTabLink>製
          </p>
          <p>
            MidjourneyとかStable
            Diffusionが話題になる前から存在してるAI画像生成サービスで好みの子を生み出しやすい作りをしているのでみんなもやろう
          </p>
        </section>
        <section>
          <h3>すえとすえちゃんの関係性は？</h3>
          <p>わからん</p>
        </section>
        <section>
          <h3>すえちゃんの名前と画像をすえが使っている理由は？</h3>
          <p>多分勝手に借りてるだけだと思う</p>
        </section>
      </CardContent>
    </Card>
  </BasicPage>
)

export default Product
