// SPDX-FileCopyrightText: 2024 taiy https://github.com/taiyme
// SPDX-License-Identifier: MIT

import type { LiteralUnion, RequireAllOrNone } from 'type-fest';

type OpenGraphType = (
  | 'website'
  | 'article'
);

type OpenGraphCardType = (
  | 'summary'
  | 'summary_large_image'
);

type OpenGraphImage = Readonly<{
  ogImageUrl: string;
  ogImageAlt: string;
  ogImageType: LiteralUnion<'image/png' | 'image/jpeg' | 'image/webp', string>;
  ogImageWidth: number;
  ogImageHeight: number;
}>;

export type OpenGraph = Readonly<
  & {
    ogType?: OpenGraphType;
    ogCardType?: OpenGraphCardType;
  }
  & RequireAllOrNone<OpenGraphImage>
>;
