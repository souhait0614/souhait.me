/* eslint-disable @typescript-eslint/no-empty-object-type */
import type { } from 'hono';

import type { Metadata } from '@/types/Metadata';


declare module 'hono' {
  interface Env {
    Variables: {};
    Bindings: {};
  }

  interface ContextRenderer {
    (
      content: string | Promise<string>,
      props: {
        metadata: Metadata;
      },
    ): Response | Promise<Response>;
  }
}
