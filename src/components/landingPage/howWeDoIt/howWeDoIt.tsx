import CloudinaryImg from "~/components/ui/cloudinaryImg";
import HowWeDoItText from "./howWeDoItText";

export default function HowWeDoIt() {
  return (
    <section
      className="flex w-[90%] items-center flex-col-reverse lg:flex-row justify-around self-center pt-40"
      id="como-fazemos"
    >
      <div className="absolute right-0 -z-10 lg:mt-[25rem] h-[19rem] sm:h-[20rem] w-full sm:w-[15rem] sm:rounded-s-[30%] bg-gradient-to-bl from-sky-600 via-sky-700 to-sky-900"></div>
      <HowWeDoItText />
      <CloudinaryImg
        src="office-blue_eyllbs"
        alt="office2"
        width={550}
        height={550}
        className="rounded-es-[20%] rounded-se-[20%] shadow-lg shadow-sky-500"
      />
    </section>
  );
}
