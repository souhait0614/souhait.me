import IconApps from '@/components/icons/IconApps';
import IconBrandGitHub from '@/components/icons/IconBrandGitHub';
import IconBrandMisskey from '@/components/icons/IconBrandMisskey';
import IconBrandTwitter from '@/components/icons/IconBrandTwitter';
import IconPlayCard from '@/components/icons/IconPlayCard';
import IconRibbon from '@/components/icons/IconRibbon';
import LinkButton from '@/components/LinkButton';
import LinkIcon from '@/components/LinkIcon';
import { SITE_NAME } from '@/constants/site';
import Profile from '@/features/Profile';
import type { Metadata } from '@/types/Metadata';

export const metadata = {
  title: SITE_NAME,
  description: 'すえのサイト',
  layoutType: 'zen',
} as const satisfies Metadata;

export default function Page() {
  return (
    <div class='flex h-full flex-col'>
      <div class='flex grow flex-col justify-center gap-8 pt-12'>
        <Profile NameElement='h1' showMoreInfo portraitFetchPriority='high' />
        <div class='flex justify-center gap-4'>
          <LinkIcon
            icon={IconBrandGitHub}
            external
            me
            href='https://github.com/souhait0614'
            aria-label='GitHub'
          />
          <LinkIcon
            icon={IconBrandMisskey}
            external
            me
            href='https://submarin.online/@souhait'
            aria-label='Misskey'
          />
          <LinkIcon
            icon={IconBrandTwitter}
            external
            me
            href='https://twitter.com/electronicsbot'
            aria-label='Twitter'
          />
        </div>
      </div>
      <div class={`
        flex h-12 gap-1 justify-self-end text-text-muted
        *:grow
      `}
      >
        <LinkButton align='center' icon={IconRibbon} to='/souhait-chan'>すえちゃん</LinkButton>
        <LinkButton align='center' icon={IconPlayCard} to='/play'>お遊び</LinkButton>
        <LinkButton align='center' icon={IconApps} to='/product'>作ったもの</LinkButton>
      </div>
    </div>
  );
}
