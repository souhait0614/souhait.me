// SPDX-FileCopyrightText: 2020-2024 Paweł Kuna
// SPDX-License-Identifier: MIT

import type { FillableIconProps } from '@/types/ComponentProps';

// https://tabler.io/icons/icon/heart
export default function IconHeart({ filled, ...props }: FillableIconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill={filled ? 'currentColor' : 'none'}
      stroke={filled ? 'none' : 'currentColor'}
      stroke-width='2'
      stroke-linecap='round'
      stroke-linejoin='round'
      role='img'
      aria-hidden='true'
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572' />
    </svg>
  );
}
