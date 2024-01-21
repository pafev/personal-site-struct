import Link from "next/link";

export default function LinksField() {
  return (
    <ul className="ml-12 flex w-full gap-8 self-center text-zinc-400">
      <li>
        <Link
          href="/"
          className="transition-all ease-in-out hover:text-zinc-100"
        >
          Quem somos
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="transition-all ease-in-out hover:text-zinc-100"
        >
          O que fazemos
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="transition-all ease-in-out hover:text-zinc-100"
        >
          Como fazemos
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="transition-all ease-in-out hover:text-zinc-100"
        >
          Parceiros
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="transition-all ease-in-out hover:text-zinc-100"
        >
          Serviços
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="transition-all ease-in-out hover:text-zinc-100"
        >
          Produtos
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="transition-all ease-in-out hover:text-zinc-100"
        >
          Equipe
        </Link>
      </li>
    </ul>
  );
}
