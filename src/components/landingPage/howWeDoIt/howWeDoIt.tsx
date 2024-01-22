"use client";
import { motion } from "framer-motion";
import CloudinaryImg from "~/components/ui/cloudinaryImg";

export default function HowWeDoIt() {
  return (
    <section
      className="flex w-[90%] items-center justify-around self-center pt-40"
      id="como-fazemos"
    >
      <div className="absolute right-0 -z-10 mt-[25rem] h-[20rem] w-[15rem] rounded-s-[30%] bg-gradient-to-bl from-sky-600 via-sky-700 to-sky-900"></div>
      <div className="flex flex-col items-start">
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
          className="w-[30rem] text-lg"
        >
          Texto explicando como prospectamos e como trabalhamos atendendo ao
          cliente
        </motion.p>
      </div>
      <CloudinaryImg
        src="office-blue_hc5itq"
        alt="office2"
        width={550}
        height={550}
        className="rounded-es-[20%] rounded-se-[20%] shadow-lg shadow-sky-500"
      />
    </section>
  );
}
