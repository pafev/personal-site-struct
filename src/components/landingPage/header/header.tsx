import CloudinaryImg from "~/components/ui/cloudinaryImg";
import HeaderText from "./headerText";
import MeetOurTeam from "./meetOurTeam";

export default function Header() {
  return (
    <section className="flex w-full justify-around self-center px-4">
      <div className="flex flex-col justify-between py-14">
        <HeaderText />
        <MeetOurTeam />
      </div>
      <CloudinaryImg
        src="web-developer-asset-removebg-preview_evjacm"
        alt="web-asset"
        width={500}
        height={500}
        dpr={"auto"}
        className="hidden md:block"
      />
    </section>
  );
}
