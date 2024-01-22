import ScrollProgressBar from "./scrollProgressBar";
import LinksField from "./linksField";
import ContactButton from "./contactButton";
import CloudinaryImg from "../ui/cloudinaryImg";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex bg-zinc-900/70 py-4 text-zinc-100 backdrop-blur-sm">
      <CloudinaryImg
        src="avatar-transparente_vnaeni"
        alt="logo"
        width={60}
        height={60}
        className="ml-14"
      />
      <LinksField />
      <ContactButton />
      <ScrollProgressBar />
    </nav>
  );
}
