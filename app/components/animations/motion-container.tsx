"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function MotionContainer({ 
  children, 
  className,
  delay = 0,
  duration = 0.5
}: { 
  children: React.ReactNode, 
  className: string,
  delay?: number,
  duration?: number
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        delay: delay,
        staggerChildren: 0.2
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      {children}
    </motion.div>
  );
}