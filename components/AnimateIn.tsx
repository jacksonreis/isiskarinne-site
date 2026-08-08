// components/AnimateIn.tsx
"use client";

import { motion, type Variants } from "framer-motion";
import { ReactNode } from "react";


type AnimateInProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale" | "blur" ;
  once?: boolean; // novo
};

const variantsMap: Record<string, Variants> = {
  up: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  scale: { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } },
  blur: {
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: { opacity: 1, filter: "blur(0px)" },
},
};

export function AnimateIn({
  children,
  delay = 0,
  className,
  direction = "up",
  once = true, // padrão mantém comportamento atual
}: AnimateInProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={variantsMap[direction]}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}