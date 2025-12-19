"use client";

import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  useEffect(() => {
    // Redirecionamento automático após 8 segundos
    const timer = setTimeout(() => {
      window.location.href = "https://marmorariaflorianopolis.com.br";
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center h-screen text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/img/fachada.jpg')" }}
    >
      {/* Overlay escuro para contraste */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Conteúdo */}
      <div className="relative z-10 max-w-2xl px-6 text-white">
        <Image
          src="/img/logo.png"
          alt="Marmoraria Florianópolis"
          width={180}
          height={180}
          className="mx-auto mb-6"
        />

        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Novo site da Marmoraria Florianópolis
        </h1>

        <p className="text-base md:text-lg text-gray-200 mb-8">
          Informamos que agora estamos com um novo endereço oficial:
          <br />
          <span className="font-semibold text-white">
            marmorariaflorianopolis.com.br
          </span>
          <br />
          Você será redirecionado automaticamente em alguns segundos.
        </p>

        <Link
          href="https://marmorariaflorianopolis.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="px-8 py-3 bg-gray-900 hover:bg-gray-800 border border-white rounded-full text-white font-semibold transition">
            Acessar o novo site
          </button>
        </Link>

        <p className="text-sm text-gray-400 mt-6">
          Se o redirecionamento não ocorrer automaticamente, clique no botão acima.
        </p>
      </div>
    </section>
  );
}
