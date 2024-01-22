"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { motion } from "framer-motion";

export default function OurServices() {
  return (
    <div className="flex flex-col items-start">
      <motion.h1
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="mb-10 border-b-[2px] py-2 text-xl font-semibold"
      >
        Nossos serviços
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-[30rem] text-lg"
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
