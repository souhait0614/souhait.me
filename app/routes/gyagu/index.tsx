import LinkText from '@/components/LinkText';
import type { Metadata } from '@/types/Metadata';

interface Link {
  href: string;
  label?: string;
  extra?: string;
}

const gyaguLinkList: Link[] = [
  { href: 'https://midra.me' },
  { href: 'https://lunachi.me/gyagu/', extra: '←死にました' },
  { href: 'https://l1n4r1.art/gyagu/', extra: '←死にました' },
  { href: 'https://lutica.net/gyagu/' },
  { href: 'https://site.kagamisskey.com/gyagu.html' },
  { href: 'https://sunset0916.net/gyagu/' },
  { href: 'https://www.hayao0819.com/gyagu/' },
  { href: 'https://cffn.pw/r/gyagu', label: 'cffn.pw/r', extra: '←死にました' },
];

const notGyaguLinkList: Link[] = [
  { href: 'https://hisubway.online' },
  { href: 'https://stesan.dev' },
  { href: 'https://matechan.com' },
  { href: 'https://kitazawa.me' },
  { href: 'https://sui827.com' },
  { href: 'https://cffnpwr.dev' },
  { href: 'https://taiy.me' },
];

export const metadata = {
  title: 'ページが見つかりませんでした',
  noIndex: true,
  pageType: 'gyagu',
} as const satisfies Metadata;

export default function Page() {
  return (
    <div class='page-container animate-gyagu-text'>
      <div class='animate-gyagu-jerry card'>
        <h1 class='text-center'>
          このサイトはうるさくないので、<br />
          お探しのページは存在しません。
        </h1>
      </div>
      <section class='card'>
        <h2 class={`
          origin-left animate-gyagu-jerry
          [animation-delay:-0.5s]
        `}
        >もしかして: うるさいと
        </h2>
        <ul class='u-list-disc'>
          {gyaguLinkList.map((link, i) => (
            <li class='origin-left animate-gyagu-jerry-muted' style={{ animationDelay: `-${1 - ((i) * 0.025)}s` }}>
              <LinkText href={link.href} external class='text-inherit'>
                うるさいと{i + 1} ({link.label || new URL(link.href).hostname})
              </LinkText>
              {link.extra && <span>{link.extra}</span>}
            </li>
          ))}
        </ul>
      </section>
      <section class='card text-text'>
        <h2>もしかして: うるさくない</h2>
        <ul class='u-list-disc'>
          {notGyaguLinkList.map((link) => (
            <li>
              <LinkText href={link.href} external>
                {link.label || new URL(link.href).hostname}
              </LinkText>
              {link.extra && <span>{link.extra}</span>}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
