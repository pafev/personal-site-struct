import OurServices from "./ourServices";
import CloudinaryImg from "~/components/ui/cloudinaryImg";

export default function WhatWeDo() {
  return (
    <section
      className="flex w-[90%] items-center justify-around self-center pt-40"
      id="o-que-fazemos"
    >
      <div className="absolute left-0 -z-10 mt-[25rem] h-[20rem] w-[15rem] rounded-e-[30%] bg-gradient-to-br from-sky-600 via-sky-700 to-sky-900"></div>
      <CloudinaryImg
        src="developer_puhlbm"
        alt="office"
        width={550}
        height={550}
        className="rounded-es-[20%] rounded-se-[20%] shadow-lg shadow-sky-500"
      />
      <OurServices />
    </section>
  );
}
