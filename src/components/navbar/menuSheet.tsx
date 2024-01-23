import { AlignJustify } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { type ReactNode } from "react";

export default function MenuSheet({children}: {children: ReactNode}) {
    return (
        <Sheet>
        <SheetTrigger className="mr-10">
          <AlignJustify />
        </SheetTrigger>
        <SheetContent className="flex flex-col border-none bg-zinc-900/80 text-zinc-100 backdrop-blur-sm">
          <SheetHeader>
            <SheetTitle className="text-xl text-zinc-100">
              Navegue pelo site
            </SheetTitle>
          </SheetHeader>
          {children}
        </SheetContent>
      </Sheet>
    )
}