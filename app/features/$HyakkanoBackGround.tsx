import type { AnimationEvent } from 'hono/jsx';
import { useEffect, useId, useMemo } from 'hono/jsx';

import IconHeart from '@/components/icons/IconHeart';
import useReducedMotion from '@/hooks/useReducedMotion';

const animationDuration = 20;

const getRandomDuration = () => {
  const randomVariation = (Math.random() * 4) - 2;
  return `${Math.round((animationDuration + randomVariation) * 1000)}ms`;
};

export default function HyakkanoBackGround() {
  const id = useId();
  const initialStyles = useMemo(() => Array.from({ length: 33 }, () => {
    return {
      left: `${Math.random() * 100}%`,
      animationDelay: `-${animationDuration - (Math.random() * animationDuration)}s`,
      animationDuration: getRandomDuration(),
    };
  }), []);
  const handleAnimationEnd = ({ target }: AnimationEvent) => {
    if (!(target instanceof SVGElement)) return;
    target.style.animation = 'none';
    target.style.visibility = 'hidden';
    setTimeout(() => {
      target.style.animation = '';
      target.style.left = `${Math.random() * 100}%`;
      target.style.animationDuration = getRandomDuration();
      target.style.visibility = 'visible';
    }, 1);
  };
  useEffect(() => {
    const stopAnimation = () => {
      const container = document.getElementById(id);
      container?.childNodes.forEach((el) => {
        if (el instanceof SVGElement) {
          el.style.animationPlayState = 'paused';
        }
      });
    };
    const playAnimation = () => {
      const container = document.getElementById(id);
      container?.childNodes.forEach((el) => {
        if (el instanceof SVGElement) {
          el.style.animationPlayState = '';
        }
      });
    };
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAnimation();
      } else {
        playAnimation();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [id]);

  const isReducedMotion = useReducedMotion();

  if (isReducedMotion) return null;

  return (
    <div
      id={id}
      class={`
        absolute top-0 left-0 h-lvh w-lvw overflow-hidden text-primary/20
        *:absolute *:bottom-100 *:size-20 *:-translate-x-1/2
        *:animate-hyakkano-bg-heart
      `}
    >
      {initialStyles.map((style) => (
        <IconHeart
          filled
          onAnimationEnd={handleAnimationEnd}
          style={style}
        />
      ))}
    </div>
  );
}
