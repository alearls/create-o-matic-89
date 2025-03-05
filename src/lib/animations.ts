
import { MotionProps } from "framer-motion";

export const fadeIn = (delay: number = 0): MotionProps => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { 
    duration: 0.5,
    delay,
    ease: "easeOut"
  }
});

export const fadeUp = (delay: number = 0): MotionProps => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.5,
    delay,
    ease: "easeOut"
  }
});

export const slideInRight = (delay: number = 0): MotionProps => ({
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { 
    duration: 0.5,
    delay,
    ease: "easeOut"
  }
});

export const slideInLeft = (delay: number = 0): MotionProps => ({
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { 
    duration: 0.5,
    delay,
    ease: "easeOut"
  }
});

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    }
  }
};

export const staggerItem = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export const scaleIn = (delay: number = 0): MotionProps => ({
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { 
    duration: 0.4,
    delay,
    ease: "easeOut"
  }
});
