// SPDX-FileCopyrightText: 2024 taiy https://github.com/taiyme
// SPDX-License-Identifier: MIT

import type { Context } from 'hono';
import type { AllUnionFields } from 'type-fest';

import type { Metadata } from '@/types/Metadata';
import { OG_DEFAULT } from '@/constants/og';
import { SITE_BASE_URL, SITE_NAME } from '@/constants/site';

export function generateHeadData(metadata: AllUnionFields<Metadata>, context: Context) {
  const { noIndex = false } = metadata;

  const title = metadata.title || SITE_NAME;

  const description = metadata.description || null;

  const titleWithSiteName = (
    title === SITE_NAME
      ? title
      : `${title} - ${SITE_NAME}`
  );

  const canonicalUrl = (
    noIndex
      ? null
      : new URL(context.req.path, SITE_BASE_URL).href
  );

  const og = (() => {
    const headPrefix = 'og: https://ogp.me/ns#';
    const url = canonicalUrl;
    const siteName = SITE_NAME;
    const locale = 'ja_JP';

    let {
      ogType: type,
      ogCardType: cardType,
      ogImageUrl: imageUrl,
      ogImageAlt: imageAlt,
      ogImageType: imageType,
      ogImageWidth: imageWidth,
      ogImageHeight: imageHeight,
    } = metadata;

    if (type == null) {
      type = OG_DEFAULT.ogType;
    }

    if (cardType == null) {
      cardType = OG_DEFAULT.ogCardType;
    }

    if (imageUrl == null || imageAlt == null || imageType == null || imageWidth == null || imageHeight == null) {
      imageUrl = OG_DEFAULT.ogImageUrl;
      imageAlt = OG_DEFAULT.ogImageAlt;
      imageType = OG_DEFAULT.ogImageType;
      imageWidth = OG_DEFAULT.ogImageWidth;
      imageHeight = OG_DEFAULT.ogImageHeight;
    }

    return {
      headPrefix,
      type,
      cardType,
      url,
      siteName,
      locale,
      imageUrl,
      imageAlt,
      imageType,
      imageWidth,
      imageHeight,
    } as const;
  })();

  return {
    noIndex,
    title,
    titleWithSiteName,
    description,
    canonicalUrl,
    og,
  } as const;
}
