'use client';

import Link from "next/link";
import Image from "next/image";
import logo from "/public/img/logo_marmo.png"; // Caminho simplificado
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { FormEvent, useState } from "react";

export default function Contato() {
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget; // Obtém o formulário diretamente
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      tel: formData.get("tel") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormStatus("Mensagem enviada com sucesso!");
        form.reset(); // Limpa o formulário após sucesso
      } else {
        setFormStatus("Erro ao enviar mensagem. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setFormStatus("Erro ao enviar mensagem. Tente novamente.");
    }
  };

  return (
    <section className="bg-gray-200 pt-[150px] lg:pt-[180px] min-h-screen py-16 md:px-20">
      <div className="max-w-full md:max-w-7xl mx-auto">
        {/* Bloco de Contato e Formulário Unificados */}
        <div className="lg:bg-gray-800 text-gray-800 lg:text-white p-10 lg:shadow-lg grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Seção de Contato */}
          <div>
            <h2 className="text-5xl font-bold mb-6">Contate-nos</h2>
            <p className="mb-10 text-xl text-gray-800 lg:text-white">
              Tem alguma ideia incrível ou precisa de um orçamento? Entre em contato, adoraríamos ouvir mais sobre o seu projeto e como podemos ajudar!
            </p>

            <div className="space-y-4">
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:vendas.marmorariafpolis@gmail.com" className="text-gray-800 lg:text-white hover:text-gray-700 lg:hover:text-gray-100">
                  vendas.marmorariafpolis@gmail.com
                </a>
              </p>
              <p>
                <strong>Telefone:</strong> (48) 3238-0505
              </p>
              <p>
                <strong>WhatsApp:</strong> (48) 99844-2768
              </p>
              <p>
                <strong>Endereço:</strong> R. Gregório Flôr, 170 - Rio Caveiras, Biguaçu - SC, 88161-780
              </p>
            </div>

            <div className="flex gap-6 mt-8">
              <Link href="https://api.whatsapp.com/send?phone=48998442768" target="_blank">
                <FaWhatsapp size={30} className="hover:text-green-400 text-green-500 transition cursor-pointer" />
              </Link>
              <Link href="https://www.instagram.com/marmorariaflorianopolis" target="_blank">
                <FaInstagram size={30} className="hover:text-pink-400 text-pink-500 transition cursor-pointer" />
              </Link>
              <Link href="https://www.facebook.com/marmorariafpolis/" target="_blank">
                <FaFacebook size={30} className="hover:text-blue-400 text-blue-500 transition cursor-pointer" />
              </Link>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-800 lg:text-white font-medium mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Digite seu nome*"
                  className="w-full px-4 py-2 text-gray-800 lg:text-white bg-gray-800 bg-opacity-0 border border-gray-800 lg:border-white focus:outline-none"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-800 lg:text-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Digite seu email*"
                  className="w-full px-4 py-2 text-gray-800 lg:text-white bg-gray-800 bg-opacity-0 border border-gray-800 lg:border-white focus:outline-none"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="tel" className="block text-gray-800 lg:text-white font-medium mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  placeholder="Digite seu número de telefone*"
                  className="w-full px-4 py-2 text-gray-800 lg:text-white bg-gray-800 bg-opacity-0 border border-gray-800 lg:border-white focus:outline-none"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-800 lg:text-white font-medium mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Deixe uma mensagem para nossa equipe*"
                  className="w-full px-4 py-2 text-gray-800 lg:text-white bg-gray-800 bg-opacity-0 border border-gray-800 lg:border-white focus:outline-none"
                  required
                ></textarea>
              </div>

              <button type="submit" className="px-6 py-3 font-bold bg-opacity-0 border-2 border-gray-800 lg:border-white bg-gray-700 hover:bg-gray-900 hover:text-white text-gray-800 lg:text-white rounded-full transition">
                Enviar Mensagem
              </button>
            </form>
            {formStatus && (
              <p
                className={`mt-4 text-center text-lg font-medium ${
                  formStatus.includes("sucesso") ? "text-green-400" : "text-red-400"
                }`}
              >
                {formStatus}
              </p>
            )}
          </div>
        </div>

        {/* Título do Mapa */}
        <div className="text-4xl text-gray-800 font-bold p-6 mt-16 text-center">Onde Estamos Localizados</div>

        {/* Mapa do Google */}
        <div className="shadow-lg w-[95%] mx-auto mt-4 overflow-hidden">
          <div className="w-full mx-auto border-gray-800 border-[1px] h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3538.9135600586115!2d-48.6523692!3d-27.505828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95275338e43117e7%3A0x593940f8a5d7ac1c!2sMarmoraria%20Florian%C3%B3polis!5e0!3m2!1sen!2sbr!4v1690375038293!5m2!1sen!2sbr&z=12"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
