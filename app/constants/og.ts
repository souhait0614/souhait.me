// SPDX-FileCopyrightText: 2024 taiy https://github.com/taiyme
// SPDX-License-Identifier: MIT

import type { OpenGraph } from '@/types/OpenGraph';
import { SITE_BASE_URL } from '@/constants/site';

export const OG_DEFAULT = {
  ogType: 'website',
  ogCardType: 'summary',
  ogImageUrl: new URL('/open-graph.png', SITE_BASE_URL).href,
  ogImageAlt: 'すえのアイコン',
  ogImageType: 'image/png',
  ogImageWidth: 384,
  ogImageHeight: 384,
} as const satisfies OpenGraph;
