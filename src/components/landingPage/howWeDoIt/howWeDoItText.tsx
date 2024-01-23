"use client";
import { motion } from "framer-motion";

export default function HowWeDoItText() {
  return (
    <div className="flex flex-col items-start max-w-[80%] mr-4 mt-10">
      <motion.h1
        initial={{ opacity: "var(--opacity-from)", x: "var(--x-from)" }}
        whileInView={{ opacity: "var(--opacity-to)", x: "var(--x-to)" }}
        exit={{ opacity: "var(--opacity-from)", x: "var(--x-to)" }}
        transition={{ duration: 0.5 }}
        className="mb-10 border-b-[2px] py-2 text-xl font-semibold lg:[--opacity-from:0%] lg:[--opacity-to:100%] lg:[--x-from:-100px] lg:[--x-to:0px]"
      >
        Como trabalhamos
      </motion.h1>
      <motion.p
        initial={{ opacity: "var(--opacity-from)", x: "var(--x-from)" }}
        whileInView={{ opacity: "var(--opacity-to)", x: "var(--x-to)" }}
        exit={{ opacity: "var(--opacity-from)", x: "var(--x-to)" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg lg:[--opacity-from:0%] lg:[--opacity-to:100%] lg:[--x-from:-100px] lg:[--x-to:0px]"
      >
        Texto explicando como prospectamos e como trabalhamos atendendo ao
        cliente
      </motion.p>
    </div>
  );
}
