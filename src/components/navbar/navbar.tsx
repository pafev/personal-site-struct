import ScrollProgressBar from "./scrollProgressBar";
import LinksField, { type linksNavbar } from "./linksField";
import ContactButton from "./contactButton";
import HomeLogo from "./homeLink";
import MenuSheet from "./menuSheet";

const horizontalLinks: linksNavbar = [
  {href: "/#quem-somos", text: "Quem somos"},
  {href: "/#o-que-fazemos", text: "O que fazemos"},
  {href: "/#como-fazemos", text: "Como fazemos"},
  {href: "/#parceiros", text: "Parceiros"},
  {href: "/", text: "Produtos"},
  {href: "/", text: "Equipe"},
]

const verticalLinks: linksNavbar = [
  ...horizontalLinks,
  {href: "/#contato", text: "Contato"}
]

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between lg:justify-normal bg-zinc-900/70 py-4 text-zinc-100 backdrop-blur-sm">
      <HomeLogo/>
  
      <div className="hidden lg:flex items-center justify-between w-full">
        <LinksField orientation="horizontal" links={horizontalLinks}/>
        <ContactButton />
      </div>
      <div className="lg:hidden flex">
        <MenuSheet>
          <LinksField orientation="vertical" links={verticalLinks}/>
        </MenuSheet>      
      </div>
  
      <ScrollProgressBar />
    </nav>
  );
}
