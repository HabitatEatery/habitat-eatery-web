import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
  type?: 'heading' | 'body';
}

const RevealText: React.FC<RevealTextProps> = ({ children, className = "", delay = 0, type = 'heading' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  const words = children.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i + delay },
    }),
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: type === 'heading' ? 50 : 20,
      filter: "blur(10px)",
      scale: 1.1,
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.8
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`flex flex-wrap ${className}`}
    >
      {words.map((word, index) => (
        <motion.span variants={child} key={index} className="mr-[0.2em] relative inline-block">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default RevealText;