import ContactUsForm from "./contactUsForm";

export default function ContactUs() {
  return (
    <section className="flex w-full flex-col self-center pt-28" id="contato">
      <div className="flex w-full flex-col items-start justify-center bg-gradient-to-br from-sky-700 via-sky-900 to-sky-900 px-8 py-6 md:h-[20rem] lg:h-[35rem]">
        <h1 className="mb-4 text-6xl font-bold xl:w-[40%]">
          Entre em contato com a gente
        </h1>
        <p className="px-8 text-lg xl:w-[30%]">
          Explicação de como será útil o cliente entrar em contato e como
          entraremos em retorno
        </p>
      </div>
      <ContactUsForm />
    </section>
  );
}
