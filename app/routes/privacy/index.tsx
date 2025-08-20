import type { Metadata } from '@/types/Metadata';
import LinkEmail from '@/components/$LinkEmail';
import LinkText from '@/components/LinkText';
import { SITE_NAME } from '@/constants/site';

export const metadata = {
  title: 'プライバシーポリシー',
  description: 'すえのサイトの個人情報の取扱いに関して掲載しています。',
} as const satisfies Metadata;

export default function Page() {
  return (
    <div class='page-container'>
      <h1 class='page-title'>{metadata.title}</h1>
      <p>本サイト（{SITE_NAME}）における個人情報の取扱いについて、以下のとおりプライバシーポリシーを定めます。</p>
      <section>
        <h2>収集する情報と目的</h2>
        <p>
          本サイトでは、訪問者の個人情報（氏名、メールアドレス、住所、電話番号等）は一切収集しておりません。
          ただし、サイトの改善を目的として、特定の個人を識別できない程度の統計的な情報（アクセス数、ページビュー、利用環境等）を収集し、分析に使用する場合があります。
        </p>
      </section>
      <section>
        <h2>アクセス解析ツール</h2>
        <p>
          本サイトでは、サイトの利用状況を把握するためにCloudflare Web Analyticsを使用しています。
          このサービスについて収集される情報の詳細については、<LinkText external href='https://www.cloudflare.com/ja-jp/privacypolicy/'>Cloudflareのプライバシーポリシー</LinkText>をご確認ください。
        </p>
      </section>
      <section>
        <h2>広告配信について</h2>
        <p>本サイトでは、広告の配信は行っておりません。</p>
      </section>
      <section>
        <h2>免責事項</h2>
        <p>
          本サイトに掲載されている情報の正確性については万全を期しておりますが、その内容を保証するものではありません。
          本サイトの利用により生じたいかなる損害についても、運営者は一切の責任を負いかねます。
        </p>
        <p>
          また、本サイトからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、
          サービス等について一切の責任を負いません。
        </p>
      </section>
      <section>
        <h2>GDPR（EU一般データ保護規則）について</h2>
        <p>
          申し訳ございませんが、本サイトはGDPRに準拠しておりません。
          もし本サイトをどうしても閲覧されたい場合は、GDPR非批准国への移住をご検討ください。
        </p>
      </section>
      <section>
        <h2>プライバシーポリシーの変更</h2>
        <p>
          本プライバシーポリシーは、必要に応じて変更することがあります。
          変更した場合は、本ページに掲載いたします。
        </p>
      </section>
      <section>
        <h2>お問い合わせ</h2>
        <p>
          本ポリシーの内容に関するお問い合わせは、メール（<LinkEmail user='me' domain='souhait.me' />）までご連絡ください。
        </p>
      </section>
      <p class='text-right text-sm'>
        最終更新日：2025年8月20日
      </p>
    </div>
  );
}
