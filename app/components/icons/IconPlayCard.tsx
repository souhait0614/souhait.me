// SPDX-FileCopyrightText: 2020-2024 Paweł Kuna
// SPDX-License-Identifier: MIT

import type { IconProps } from '@/types/ComponentProps';

// https://tabler.io/icons/icon/play-card
export default function IconPlayCard(props: IconProps) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      stroke-width='1.5'
      stroke-linecap='round'
      stroke-linejoin='round'
      role='img'
      aria-hidden='true'
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M19 5v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z' />
      <path d='M8 6h.01' />
      <path d='M16 18h.01' />
      <path d='M12 16l-3 -4l3 -4l3 4z' />
    </svg>
  );
}
