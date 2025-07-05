import { useEffect, useMemo, useState } from 'hono/jsx';
import { tv } from 'tailwind-variants';

const imageStyle = tv({
  base: 'h-full w-full object-contain object-bottom',
});

export default function SouhaitChanImage() {
  const [imageIndex, setImageIndex] = useState(0);

  const child = useMemo(() => {
    if (imageIndex === 1) {
      return (
        <img
          class={imageStyle()}
          src='/images/souhait-chan-full.webp'
          alt='すえちゃんの全身画像'
        />
      );
    }
    return (
      <img
        class={imageStyle()}
        src='/images/souhait-chan.webp'
        alt='すえちゃんの上半身画像'
      />
    );
  }, [imageIndex]);

  useEffect(() => {
    const konamiCode = [
      'ArrowUp', 'ArrowUp',
      'ArrowDown', 'ArrowDown',
      'ArrowLeft', 'ArrowRight',
      'ArrowLeft', 'ArrowRight',
      'b', 'a',
    ];
    let konamiIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          setImageIndex((prevIndex) => (prevIndex + 1) % 2);
          konamiIndex = 0;
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }
      } else {
        konamiIndex = 0;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return child;
}
