// SPDX-FileCopyrightText: 2024 taiy https://github.com/taiyme
// SPDX-License-Identifier: MIT

import type { MouseEvent } from 'hono/jsx';
import { useCallback, useState } from 'hono/jsx';

type Props = Readonly<{
  user: string;
  domain: string;
}>;

export default function LinkEmail({ user, domain }: Props) {
  const [show, setShow] = useState(false);
  const email = `${user}@${domain}`;

  const onClick = useCallback((ev: MouseEvent) => {
    if (!ev.isTrusted) return;
    setShow(true);
  }, []);

  if (show) return (
    <a
      href={`mailto:${email}`}
      class={`
        text-primary-text
        hover-active-without-focus:underline
      `}
    >
      {email}
    </a>
  );

  return (
    <button
      onClick={onClick}
      class={`
        border-0 p-0 text-primary-text
        hover-active-without-focus:underline
      `}
    >
      クリックで表示
    </button>
  );
}
