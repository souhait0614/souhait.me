import IconApps from '@/components/icons/IconApps';
import IconBrandGitHub from '@/components/icons/IconBrandGitHub';
import IconBrandMisskey from '@/components/icons/IconBrandMisskey';
import IconBrandTwitter from '@/components/icons/IconBrandTwitter';
import IconPlayCard from '@/components/icons/IconPlayCard';
import IconRibbon from '@/components/icons/IconRibbon';
import LinkIcon from '@/components/LinkIcon';
import NavButton from '@/components/NavButton';
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
        <Profile NameElement='h1' showMoreInfo />
        <div class='flex justify-center gap-4'>
          <LinkIcon
            icon={IconBrandGitHub}
            external
            me
            href='https://github.com/souhait0614'
          />
          <LinkIcon
            icon={IconBrandMisskey}
            external
            me
            href='https://submarin.online/@souhait'
          />
          <LinkIcon
            icon={IconBrandTwitter}
            external
            me
            href='https://twitter.com/electronicsbot'
          />
        </div>
      </div>
      <div class={`
        flex h-12 gap-1 justify-self-end text-text-muted
        *:grow
      `}
      >
        <NavButton align='center' icon={IconRibbon} to='/souhait-chan'>すえちゃん</NavButton>
        <NavButton align='center' icon={IconPlayCard} to='/play'>お遊び</NavButton>
        <NavButton align='center' icon={IconApps} to='/product'>作ったもの</NavButton>
      </div>
    </div>
  );
}
