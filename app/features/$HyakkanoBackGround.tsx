import { useEffect, useMemo, useRef } from 'hono/jsx';

import IconHeart from '@/components/icons/IconHeart';
import useReducedMotion from '@/hooks/useReducedMotion';

const heartCount = 34;
const baseAnimationDuration = 20;
const skipDeltaTime = 1000;

function getRandomDuration() {
  const randomVariation = (Math.random() * 4) - 2;
  return Math.round((baseAnimationDuration + randomVariation) * 1000);
}

function AnimationHeart() {
  const defaultLeft = useMemo(() => `${Math.random() * 100}%`, []);
  const defaultTop = useMemo(() => `${Math.random() * 100}%`, []);
  const defaultDuration = useMemo(() => getRandomDuration(), []);

  const ref = useRef<SVGSVGElement>(null);
  const durationRef = useRef(defaultDuration);

  useEffect(() => {
    const elem = ref.current;
    if (!elem) return;
    elem.style.left = defaultLeft;
    elem.style.top = defaultTop;
    elem.style.opacity = '1';

    let animationFrameId = 0;
    let previousTimestamp: number | null = null;

    const animate = (timestamp: number) => {
      const duration = durationRef.current ?? defaultDuration;
      if (!previousTimestamp) {
        previousTimestamp = timestamp;
      }

      let deltaTime = timestamp - previousTimestamp;
      if (deltaTime > skipDeltaTime) deltaTime = 0;
      previousTimestamp = timestamp;
      const currentTop = parseFloat(elem.style.top);

      const distanceToMove = (deltaTime / duration) * 100;
      const newTop = currentTop - distanceToMove;
      elem.style.top = `${newTop}%`;

      const rect = elem.getBoundingClientRect();
      if (rect.top + rect.height < 0) {
        elem.style.top = '100%';
        elem.style.left = `${Math.random() * 100}%`;
        durationRef.current = getRandomDuration();
      }

      animationFrameId = window.requestAnimationFrame(animate);
    };

    animationFrameId = window.requestAnimationFrame(animate);

    return () => window.cancelAnimationFrame(animationFrameId);
  }, [defaultDuration, defaultLeft, defaultTop]);

  return (
    <IconHeart
      ref={ref}
      filled
    />
  );
}

export default function HyakkanoBackGround() {
  const isReducedMotion = useReducedMotion();

  if (isReducedMotion) return null;

  return (
    <div
      class={`
        absolute top-0 left-0 h-lvh w-lvw overflow-hidden text-primary/20
        *:absolute *:size-20 *:-translate-x-1/2 *:opacity-0
      `}
    >
      {Array.from({ length: heartCount }, (_, i) => (
        <AnimationHeart key={i} />
      ))}
    </div>
  );
}
