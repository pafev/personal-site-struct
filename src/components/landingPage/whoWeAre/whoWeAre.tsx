import WhoWeAreImg from "./whoWeAreImg";
import WhoWeAreText from "./whoWeAreText";

export default function WhoWeAre() {
  return (
    <section
      className="flex w-[80%] justify-around self-center pt-40"
      id="quem-somos"
    >
      <WhoWeAreImg />
      <WhoWeAreText />
    </section>
  );
}
