import Link from "next/link";
import { cn } from "~/lib/utils";

type linksNavbar = { href: string; text: string }[]

export default function LinksField({
  orientation,
  links,
}: {
  orientation?: "horizontal" | "vertical";
  links: linksNavbar;
}) {
  return (
    <ul
      className={cn(
        "ml-12 flex w-full gap-8 text-zinc-400",
        orientation === "vertical" && "flex-col",
        orientation === "horizontal" && "flex-row"
      )}
    >
      {links.map((item) => (
        <li key={item.text}>
          <Link
            href={item.href}
            className="transition-all ease-in-out hover:text-zinc-100"
          >
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export {type linksNavbar}
