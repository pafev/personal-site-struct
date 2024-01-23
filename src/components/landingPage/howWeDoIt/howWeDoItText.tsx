"use client";
import { motion } from "framer-motion";

export default function HowWeDoItText() {
  return (
    <div className="flex flex-col items-start max-w-[80%] mr-4 mt-10">
      <motion.h1
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="mb-10 border-b-[2px] py-2 text-xl font-semibold"
      >
        Como trabalhamos
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg"
      >
        Texto explicando como prospectamos e como trabalhamos atendendo ao
        cliente
      </motion.p>
    </div>
  );
}
