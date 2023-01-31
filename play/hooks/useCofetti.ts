import { useDebounceFn } from '@vueuse/core';

export const useCofetti = () => {
  const playCofetti = useDebounceFn(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0
    };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }
    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      confetti({
        ...defaults,
        particleCount,
        origin: {
          x: randomInRange(0.1, 0.3),
          y: Math.random() - 0.2
        }
      });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      confetti({
        ...defaults,
        particleCount,
        origin: {
          x: randomInRange(0.7, 0.9),
          y: Math.random() - 0.2
        }
      });
    }, 300);
  }, 300);

  return {
    playCofetti
  };
};
