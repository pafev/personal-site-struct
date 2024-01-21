"use client"

import useScrollProgress from "~/hooks/useScrollProgress"

export default function ScrollProgressBar() {
    const progress = useScrollProgress()

    return (
      <span
        style={{ transform: `translateX(${progress - 100}%)` }}
        className="absolute bottom-0 h-[2px] w-full bg-zinc-100"
      />
    )
}