// SPDX-FileCopyrightText: 2020-2024 Paweł Kuna
// SPDX-License-Identifier: MIT

import type { IconProps } from '@/types/ComponentProps';

// https://tabler.io/icons/icon/external-link
export default function IconExternalLink(props: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
      role='img'
      aria-hidden='true'
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6' />
      <path d='M11 13l9 -9' />
      <path d='M15 4h5v5' />
    </svg>
  );
}
