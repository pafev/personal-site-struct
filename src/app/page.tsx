import Header from "~/components/landingPage/header/header";
import OurStack from "~/components/landingPage/ourStack/ourStack";
import WhatWeDo from "~/components/landingPage/whatWeDo/whatWeDo";
import WhoWeAre from "~/components/landingPage/whoWeAre/whoWeAre";
import HowWeDoIt from "~/components/landingPage/howWeDoIt/howWeDoIt";
import Partners from "~/components/landingPage/partners/partners";
import ContactUs from "~/components/landingPage/contactUs/contactUs";

export default function Home() {
  return (
    <main className="mt-20 flex flex-col gap-14">
      <Header />
      <OurStack />
      <WhoWeAre />
      <WhatWeDo />
      <HowWeDoIt />
      <Partners />
      <ContactUs />
    </main>
  );
}
