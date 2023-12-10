import { Card, CardContent, CardHeader } from "./_components/Card"
import * as styles from "./page.css"
import { NewTabLink } from "./_components/NewTabLink"
import DaysLater from "./_components/DaysLater"

import BasicPage from "@/app/_components/BasicPage"
import { avatar, banner } from "@/images"

import Image from "next/image"
import { Cake, Code, DeviceGamepad2 } from "tabler-icons-react"
import Link from "next/link"

const Profile = () => (
  <Card>
    <div className={styles.profileBannerContainer}>
      <Image src={banner} fill alt="banner" className={styles.profileBanner} priority />
    </div>
    <div className={styles.profileContent}>
      <div className={styles.profileAvatarContainer}>
        <Image src={avatar} width={120} height={120} alt="avatar" priority />
      </div>
      <div className={styles.profileTextContainer}>
        <h1 className={styles.profileName}>すえ</h1>
        <p>なんかいろいろやってるLG Electronics Botだったりhakunagiだったりした人</p>
        <p>
          <ruby>
            souhait
            <rt>すえ</rt>
          </ruby>
          です。そうはいとではありません
        </p>
        <p>
          アイコンの子は<Link href="/souhait-chan">すえちゃん</Link>です
        </p>
      </div>
      <dl className={styles.profileInfoContainer}>
        <dt>誕生日</dt>
        <dd>
          <div>
            <Cake strokeWidth={1.5} />
            <span>
              5/8 (<DaysLater month={5} day={8} />)
            </span>
          </div>
        </dd>
        <dt>主な開発</dt>
        <dd>
          <div>
            <Code strokeWidth={1.5} />
            <span>TypeScript / React / SolidJS / Svelte</span>
          </div>
        </dd>
        <dt>好みのゲームジャンル</dt>
        <dd>
          <div>
            <DeviceGamepad2 strokeWidth={1.5} />
            <span>リズムゲーム</span>
          </div>
        </dd>
      </dl>
    </div>
  </Card>
)

const Home = () => (
  <BasicPage>
    <Profile />
    <Card>
      <CardContent>
        <CardHeader>アカウント</CardHeader>
        <section>
          <h3>Misskey</h3>
          <p>ActivityPubで相互につながる分散型SNSです。普段はここにいます。</p>
          <ul>
            <li>
              <NewTabLink href="https://submarin.online/@souhait">Submarin (メイン)</NewTabLink>
            </li>
            <li>
              <NewTabLink href="https://mk.shrimpia.network/@souhait">
                シュリンピア帝国 (サブ)
              </NewTabLink>
            </li>
          </ul>
        </section>
        <section>
          <h3>その他</h3>
          <ul>
            <li>
              <NewTabLink href="https://github.com/souhait0614">GitHub</NewTabLink>
            </li>
            <li>
              <NewTabLink href="https://x.com/ElectronicsBot">𝕏</NewTabLink>
            </li>
          </ul>
        </section>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <CardHeader>やってること</CardHeader>
        <h3>プログラミング</h3>
        <p>
          よくブラウザのみで動くWebアプリを作ってます。たまにサーバーが絡むシステムやらホームページも作ったり
        </p>
        <p>
          公開済みの制作物は<Link href="/product">ここ</Link>に載せてあります
        </p>
        <h3>ゲーム</h3>
        <p>
          リズムゲームばっかりやってます。たまにMinecraftやらTerrariaやらのサンドボックスをやったり
        </p>
        <p>
          2023年12月現在は
          <NewTabLink href="https://world-dai-star.com/game">
            ワールドダイスター 夢のステラリウム
          </NewTabLink>
          に浸かっています
        </p>
        <p>
          ユメステリリース前はProject DIVA MEGA39&#39;s+をひたすらやっていました。
          <NewTabLink href="https://submarin.online/notes/9cvsn71ik9">
            専用アケコンもあります
          </NewTabLink>
        </p>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <CardHeader>視聴覚室</CardHeader>
        <div className={styles.videoContainer}>
          <iframe
            loading="lazy"
            src="https://www.youtube-nocookie.com/embed/Dh79Lk_wCD4"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </CardContent>
    </Card>
  </BasicPage>
)

export default Home
