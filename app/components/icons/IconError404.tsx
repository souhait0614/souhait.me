// SPDX-FileCopyrightText: 2020-2024 Paweł Kuna
// SPDX-License-Identifier: MIT

import type { NormalIconProps } from '@/types/ComponentProps';

// https://tabler.io/icons/icon/error-404
export default function IconError404(props: NormalIconProps) {
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
      <path d='M3 8v3a1 1 0 0 0 1 1h3' />
      <path d='M7 8v8' />
      <path d='M17 8v3a1 1 0 0 0 1 1h3' />
      <path d='M21 8v8' />
      <path d='M10 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0' />
    </svg>
  );
}
