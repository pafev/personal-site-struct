"use client";
import { motion } from "framer-motion";

export default function HeaderText() {
  return (
    <motion.div
      initial={{ opacity: "var(--opacity-from)", x: "var(--x-from)" }}
      animate={{ opacity: "var(--opacity-to)", x: "var(--x-to)" }}
      transition={{ duration: 0.5 }}
      className="lg:[--opacity-from:0%] lg:[--opacity-to:100%] lg:[--x-from:-100px] lg:[--x-to:0px]"
    >
      <h1 className="text-6xl font-bold">TITULO CHAMATIVO</h1>
      <p className="text-2xl">Texto bonito para acompanhar o titulo</p>
    </motion.div>
  );
}
