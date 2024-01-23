import WhoWeAreImg from "./whoWeAreImg";
import WhoWeAreText from "./whoWeAreText";

export default function WhoWeAre() {
  return (
    <section
      className="flex items-center mx-10 max-w-[80%] justify-around self-center pt-40"
      id="quem-somos"
    >
      <WhoWeAreImg />
      <WhoWeAreText />
    </section>
  );
}
