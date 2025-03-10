const fastSlowFastEase = [0.7, 0.1, 0.1, 0.9];

export const toTop = {
  initial: { y: "80%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: "-80%", opacity: 0 },
  transition: {
    duration: 1,
    ease: "easeInOut",
    damping: 20,
    type: "keyframes",
  },
};

export const fadeAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 2, ease: "easeInOut" },
};

export const rise = {
  initial: { y: "100%" },
  animate: { y: 0 },
  exit: { y: "100%" },
  transition: {
    duration: 1,
    ease: "easeInOut",
    damping: 20,
    type: "keyframes",
  },
};
export const fall = {
  initial: { y: "-100%" },
  animate: { y: 0 },
  exit: { y: "-100%" },
  transition: {
    duration: 1,
    ease: "easeInOut",
    damping: 20,
    type: "keyframes",
  },
};

export const scale = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  exit: { scaleX: 0 },
  transition: {
    duration: 1,
    ease: fastSlowFastEase,
    type: "keyframes",
  },
};
