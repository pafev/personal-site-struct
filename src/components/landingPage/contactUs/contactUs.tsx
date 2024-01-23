import ContactUsForm from "./contactUsForm";

export default function ContactUs() {  
  return (
    <section className="flex flex-col w-full self-center pt-28" id="contato">
      <div className="flex flex-col py-6 sm:h-[35rem] w-full items-start justify-center bg-gradient-to-br from-sky-700 via-sky-900 to-sky-900 px-8">
        <h1 className="lg:w-[40%] text-6xl font-bold mb-4">
          Entre em contato com a gente
        </h1>
        <p className="w-[30%] text-lg">
          Explicação de como será útil o cliente entrar em contato e como
          entraremos em retorno
        </p>
      </div>
      <ContactUsForm/>
    </section>
  );
}
