import CloudinaryImg from "~/components/ui/cloudinaryImg";

export default function Partners() {
  return (
    <section
      className="flex w-[75%] flex-col items-center self-center rounded-xl pt-52"
      id="parceiros"
    >
      <h1 className="my-8 text-2xl font-bold">Conheça nossos parceiros</h1>
      <div className="mb-10 flex justify-center flex-wrap gap-8">
        <CloudinaryImg
          src="logo-UnB_wq1cfh"
          alt="logo-unb"
          width={80}
          height={80}
          className="rounded-full"
        />
        <CloudinaryImg
          src="logo-switch-dreams_utumvq"
          alt="logo-switch-dreams"
          width={80}
          height={80}
          className="rounded-full"
        />
        <CloudinaryImg
          src="logo-eletrojun_tovzjs"
          alt="logo-eletrojun"
          width={80}
          height={80}
          className="rounded-full"
        />
        <CloudinaryImg
          src="logo-brasil-junior_bxzjft"
          alt="logo-brasil-junior"
          width={80}
          height={80}
          className="rounded-full"
        />
        <CloudinaryImg
          src="logo-concentro_gkthxb"
          alt="logo-concentro"
          width={80}
          height={80}
          className="rounded-full"
        />
        <CloudinaryImg
          src="logo-aiesec_seb7co"
          alt="logo-aiesec"
          width={80}
          height={80}
          className="rounded-full"
        />
      </div>
    </section>
  );
}
