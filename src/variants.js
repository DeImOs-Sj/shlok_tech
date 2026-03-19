export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 60 : direction === 'down' ? -60 : 0,
      opacity: 0,
      x: direction === 'left' ? 60 : direction === 'right' ? -60 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 18,
        delay: delay,
      },
    },
  };
};

// Stagger container — children animate in one by one
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Letter-by-letter reveal
export const letterAnim = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 16 },
  },
};

// Zoom in from scale
export const zoomIn = (delay = 0, duration = 0.6) => ({
  hidden: { scale: 0.85, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 14,
      delay,
      duration,
    },
  },
});
