import Image from "next/image";
import astropc from "../../public/astropc.png"

export default async function Home() {
  return (
    <main>
      <h1>Site da Struct</h1>
      <section>
        <Image alt="astrohappy" src={astropc} className="h-[30rem] w-[30rem]" quality={80}/>
      </section>
    </main>
  );
}
