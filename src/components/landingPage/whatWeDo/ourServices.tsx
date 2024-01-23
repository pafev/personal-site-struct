"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { motion } from "framer-motion";

export default function OurServices() {
  return (
    <div className="flex w-full max-w-[30rem] flex-col items-start  ">
      <motion.h1
        initial={{ opacity: "var(--opacity-from)", x: "var(--x-from)" }}
        whileInView={{ opacity: "var(--opacity-to)", x: "var(--x-to)" }}
        exit={{ opacity: "var(--opacity-from)", x: "var(--x-to)" }}
        transition={{ duration: 0.5 }}
        className="mb-10 w-full border-b-[2px] py-2 text-xl font-semibold lg:[--opacity-from:0%] lg:[--opacity-to:100%] lg:[--x-from:100px] lg:[--x-to:0px]"
      >
        Nossos serviços
      </motion.h1>
      <motion.div
        initial={{ opacity: "var(--opacity-from)", x: "var(--x-from)" }}
        whileInView={{ opacity: "var(--opacity-to)", x: "var(--x-to)" }}
        exit={{ opacity: "var(--opacity-from)", x: "var(--x-to)" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full text-lg lg:[--opacity-from:0%] lg:[--opacity-to:100%] lg:[--x-from:100px] lg:[--x-to:0px]"
      >
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Aplicações mobile</AccordionTrigger>
            <AccordionContent>
              Descrição sobre nosso trabalgo com app mobile
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Sites</AccordionTrigger>
            <AccordionContent>
              Descrição sobre nosso trabalgo com dev web
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Sistemas web</AccordionTrigger>
            <AccordionContent>
              Descrição sobre nosso trabalgo com sistemas web
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  );
}
