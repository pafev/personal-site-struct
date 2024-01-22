"use client"
import { motion } from "framer-motion";

export default function WhoWeAreText() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center"
    >
      <h1 className="text-xl font-bold text-cyan-500">Quem somos</h1>
      <h1 className="text-5xl font-bold">Explicação bonita de quem somos</h1>
      <p className="text-3xl">
        Alguns detalhes a mais, como de onde surgimos e desde quando operamos
      </p>
    </motion.div>
  );
}
