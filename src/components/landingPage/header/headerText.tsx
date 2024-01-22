"use client";
import { motion } from "framer-motion";

export default function HeaderText() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-6xl font-bold">TITULO CHAMATIVO</h1>
      <p className="text-2xl">Texto bonito para acompanhar o titulo</p>
    </motion.div>
  );
}
