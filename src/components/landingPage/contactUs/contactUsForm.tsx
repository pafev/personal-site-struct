"use client";

import { type ChangeEvent, useState, type FormEvent } from "react";

export default function ContactUsForm() {
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
    <form
      className="xl:absolute min-w-[20rem] self-center right-48 mt-20 flex flex-col gap-4 rounded-lg bg-zinc-100 p-10 shadow-lg shadow-sky-500"
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
          className="w-full rounded px-4 py-2 outline-none"
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
          className="w-full rounded px-4 py-2 outline-none"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-10">
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
            className="w-full rounded px-4 py-2 outline-none"
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
            className="w-full rounded px-4 py-2 outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col text-lg text-zinc-900">
        <label htmlFor="description" className="text-xl font-semibold">
          Descrição
        </label>
        <input
          placeholder="Descrição do projeto"
          name="description"
          id="description"
          onChange={onChange}
          className="w-full rounded px-4 py-2 outline-none"
        />
      </div>
      <div className="flex flex-col text-lg text-zinc-900">
        <label htmlFor="budget" className="text-xl font-semibold">
          Orçamento
        </label>
        <input
          placeholder="Orçamento"
          name="budget"
          id="budget"
          onChange={onChange}
          type="number"
          className="w-full rounded px-4 py-2 outline-none"
        />
      </div>
      <button
        type="submit"
        className="mt-4 self-center text-xl font-bold text-zinc-900/80 outline-none transition-all ease-in-out hover:text-zinc-900"
      >
        Enviar
      </button>
    </form>
  );
}
