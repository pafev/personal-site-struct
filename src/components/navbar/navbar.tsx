import Image from "next/image";
import avatar from "../../../public/avatar-transparente.png";
import ScrollProgressBar from "./scrollProgressBar";
import LinksField from "./linksField";
import ContactButton from "./contactButton";

export default function Navbar() {
  return (
    <nav className="sticky top-0 flex bg-zinc-900/60 py-4 text-zinc-100">
      <Image alt="logo" src={avatar} height={50} width={50} className="ml-14" />
      <LinksField />
      <ContactButton />
      <ScrollProgressBar />
    </nav>
  );
}
