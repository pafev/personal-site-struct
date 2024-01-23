"use client"
import { motion } from "framer-motion";
import CloudinaryImg from "~/components/ui/cloudinaryImg";

export default function WhoWeAreImg() {
  return (
    <motion.div
      initial={{ opacity: "var(--opacity-from)", x: "var(--x-from)" }}
      whileInView={{ opacity: "var(--opacity-to)", x: "var(--x-to)" }}
      exit={{ opacity: "var(--opacity-from)", x: "var(--x-from)" }}
      transition={{ duration: 0.5 }}
      className="lg:[--opacity-from:0%] lg:[--opacity-to:100%] lg:[--x-from:-100px] lg:[--x-to:0px]"
    >
      <CloudinaryImg
        src="web-developer-asset2-removebg-preview_xtnm4a"
        alt="web-asset"
        width={500}
        height={500}
      />
    </motion.div>
  );
}
