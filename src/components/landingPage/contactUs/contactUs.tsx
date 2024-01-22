"use client";

import { type ChangeEvent, useState, type FormEvent } from "react";

export default function ContactUs() {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    telefone: "",
    completionData: "",
    description: "",
    budget: "",
  });

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    // codigo do mailer
  }

  return (
    <section className="flex w-full self-center pt-40" id="contato">
      <div className="flex flex-col h-[35rem] w-full items-start justify-center bg-gradient-to-br from-sky-700 via-sky-900 to-sky-900 px-8">
        <h1 className="w-[40%] text-6xl font-bold mb-4">
          Entre em contato com a gente
        </h1>
        <p className="w-[30%] text-lg">
          Explicação de como será útil o cliente entrar em contato e como
          entraremos em retorno
        </p>
      </div>
      <form
        className="absolute right-48 mt-20 flex flex-col gap-4 rounded-lg bg-zinc-100 p-10 shadow-lg shadow-sky-500"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col text-lg text-zinc-900">
          <label htmlFor="name" className="text-xl font-semibold">
            Nome Completo
          </label>
          <input
            placeholder="Nome completo"
            name="name"
            id="name"
            onChange={onChange}
            className="w-[30rem] rounded px-4 py-2 outline-none"
          />
        </div>
        <div className="flex flex-col text-lg text-zinc-900">
          <label htmlFor="email" className="text-xl font-semibold">
            Email
          </label>
          <input
            placeholder="Seu email"
            name="email"
            id="email"
            type="email"
            onChange={onChange}
            className="w-[30rem] rounded px-4 py-2 outline-none"
          />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col text-lg text-zinc-900">
            <label htmlFor="telefone" className="text-xl font-semibold">
              Telefone
            </label>
            <input
              placeholder="Seu telefone"
              name="telefone"
              id="telefone"
              type="tel"
              onChange={onChange}
              className="w-[14rem] rounded px-4 py-2 outline-none"
            />
          </div>
          <div className="flex flex-col text-lg text-zinc-900">
            <label htmlFor="completionData" className="text-xl font-semibold">
              Data para conclusão
            </label>
            <input
              placeholder="Data para conclusão"
              name="completionData"
              id="completionData"
              type="date"
              onChange={onChange}
              className="w-[14rem] rounded px-4 py-2 outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col text-lg text-zinc-900">
          <label htmlFor="description" className="text-xl font-semibold">
            Descrição
          </label>
          <input
            placeholder="Nome completo"
            name="description"
            id="description"
            onChange={onChange}
            className="w-[30rem] rounded px-4 py-2 outline-none"
          />
        </div>
        <div className="flex flex-col text-lg text-zinc-900">
          <label htmlFor="budget" className="text-xl font-semibold">
            Orçamento
          </label>
          <input
            placeholder="Nome completo"
            name="budget"
            id="budget"
            onChange={onChange}
            className="w-[30rem] rounded px-4 py-2 outline-none"
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}
