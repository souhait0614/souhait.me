import type {TransitionDirectionalAnimations} from 'astro';
import '@/styles/animations.scss'; // eslint-disable-line import/no-unassigned-import, import/extensions

export const easingOld = 'cubic-bezier(0.12, 0, 0.39, 0)'; // EaseInSine
export const easingNew = 'cubic-bezier(0.61, 1, 0.88, 1);'; // EaseOutSine
export const duration = '0.15s';
export const delay = '0.2s';

export const transitionAnimate = {
  forwards: {
    old: {
      name: 'page-forwards-old',
      easing: easingOld,
      duration,
      fillMode: 'both',
    },
    new: {
      name: 'page-forwards-new',
      easing: easingNew,
      delay,
      duration,
      fillMode: 'both',
    },
  },
  backwards: {
    old: {
      name: 'page-backwards-old',
      easing: easingOld,
      duration,
      fillMode: 'both',
    },
    new: {
      name: 'page-backwards-new',
      easing: easingNew,
      delay,
      duration,
      fillMode: 'both',
    },
  },
} as const satisfies TransitionDirectionalAnimations;

export const transitionNames = {
  profileCard: 'profile-card',
  souhaitChan: 'souhait-chan',
  footer: 'footer',
};
