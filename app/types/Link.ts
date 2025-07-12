// SPDX-FileCopyrightText: 2024 taiy https://github.com/taiyme
// SPDX-License-Identifier: MIT

import type { PropsWithChildren } from 'hono/jsx';

type Case_InternalLink = Readonly<{
  external?: false;
  to: `/${string}`;
  href?: never;
}>;

type Case_ExternalLink = Readonly<{
  external: true;
  to?: never;
  href: string;
}>;

export type Link = Readonly<
  & (
    | Case_InternalLink
    | Case_ExternalLink
  )
  & {
    author?: boolean;
    me?: boolean;
    sponsored?: boolean;
    privacyPolicy?: boolean;
  }
>;

export type LinkWithChildren = Readonly<
  PropsWithChildren<Link>
>;
