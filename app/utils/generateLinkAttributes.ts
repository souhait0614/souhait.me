// SPDX-FileCopyrightText: 2024 taiy https://github.com/taiyme
// SPDX-License-Identifier: MIT

import type { Link } from '@/types/Link';

function omitUndefined<T extends Record<string, unknown>>(obj: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, value]) => value !== undefined),
  ) as Partial<T>;
}

export function generateLinkAttributes<T extends Link>(
  {
    to: internalHref,
    href: externalHref,
    external = false,
    author = false,
    me = false,
    ...rest
  }: T,
) {
  const target = external ? '_blank' : undefined;
  const rel = Object.entries({
    noopener: external,
    noreferrer: external,
    external,
    author,
    me,
  }).flatMap(([k, v]) => (v ? [k] : [])).join(' ') || undefined;

  return {
    linkAttrs: {
      ...rest,
      ...omitUndefined({ rel, target }),
      href: internalHref ?? externalHref,
    },
    isExternalLink: external,
  } as const;
}
