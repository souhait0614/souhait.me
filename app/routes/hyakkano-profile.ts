import { createRoute } from 'honox/factory';

export const GET = createRoute((c) => {
  return c.redirect('/hyakkano?profile');
});
