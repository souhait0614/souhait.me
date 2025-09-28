// SPDX-FileCopyrightText: 2024 taiy https://github.com/taiyme
// SPDX-License-Identifier: MIT

import type { OpenGraph } from '@/types/OpenGraph';

type PageType = (
  | 'normal'
  | 'hyakkano'
  | 'gyagu'
);

type LayoutType = (
  | 'normal'
  | 'zen'
);

type Base_Metadata = Readonly<{
  title: string;
  pageType?: PageType;
  layoutType?: LayoutType;
}>;

type Case_Indexed = Readonly<(
  & {
    noIndex?: false;
    description: string;
  }
  & Base_Metadata
  & OpenGraph
)>;

type Case_NoIndex = Readonly<(
  & {
    noIndex: true;
    description?: string;
  }
  & Base_Metadata
  & OpenGraph
)>;

export type Metadata = Readonly<
  | Case_Indexed
  | Case_NoIndex
>;
