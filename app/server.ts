// SPDX-FileCopyrightText: 2024 taiy https://github.com/taiyme
// SPDX-License-Identifier: MIT

import { showRoutes } from 'hono/dev';
import { createApp } from 'honox/server';

const app = createApp({
  init: (initApp) => {
    initApp.use(async (c, next) => {
      await next();
      if (
        c.res.status === 404
        && (c.req.method === 'GET' || c.req.method === 'HEAD')
        && c.req.path !== '/'
        && c.req.path.endsWith('/')
      ) {
        const url = new URL(c.req.url);
        url.pathname = url.pathname.replace(/\/+$/, '');
        c.res = c.redirect(url.toString(), 308);
      }
    });
  },
  trailingSlash: false,
});

showRoutes(app);

export default app;
