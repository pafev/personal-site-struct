"use client";
import { motion } from "framer-motion";

export default function WhoWeAreText() {
  return (
    <motion.div
      initial={{ opacity: "var(--opacity-from)", x: "var(--x-from)" }}
      whileInView={{ opacity: "var(--opacity-to)", x: "var(--x-to)" }}
      exit={{ opacity: "var(--opacity-from)", x: "var(--x-from)" }}
      transition={{ duration: 0.5 }}
      className="flex-col flex justify-center lg:[--opacity-from:0%] lg:[--opacity-to:100%] lg:[--x-from:100px] lg:[--x-to:0px]"
    >
      <h1 className="text-xl font-bold text-cyan-500">Quem somos</h1>
      <h1 className="text-5xl font-bold">Explicação bonita de quem somos</h1>
      <p className="text-3xl">
        Alguns detalhes a mais, como de onde surgimos e desde quando operamos
      </p>
    </motion.div>
  );
}
