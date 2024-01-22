"use client"
import { motion } from "framer-motion";
import CloudinaryImg from "~/components/ui/cloudinaryImg";

export default function WhoWeAreImg() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
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
