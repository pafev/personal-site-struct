import ScrollProgressBar from "./scrollProgressBar";
import LinksField from "./linksField";
import ContactButton from "./contactButton";
import HomeLink from "./logoButton";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex bg-zinc-900/70 py-4 text-zinc-100 backdrop-blur-sm">
      <HomeLink />
      <LinksField />
      <ContactButton />
      <ScrollProgressBar />
    </nav>
  );
}
