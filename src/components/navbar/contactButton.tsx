import Link from "next/link";

export default function ContactButton() {
  return (
    <Link
      href="/#contato"
      className="mr-14 self-center rounded bg-zinc-100 px-4 py-1 text-lg font-bold text-zinc-900 transition-all ease-in-out hover:bg-zinc-300"
    >
      Contato
    </Link>
  );
}
