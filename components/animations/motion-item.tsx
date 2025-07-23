"use client";
import { motion } from "framer-motion";

export default function MotionItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}
