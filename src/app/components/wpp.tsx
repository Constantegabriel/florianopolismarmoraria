"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";

export default function Wpp() {
  const pathname = usePathname();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 1500); // Remove a animação após 1.5 segundos
    }, 7000); // Animação ocorre a cada 7 segundos

    return () => clearInterval(interval);
  }, []);

  if (pathname === "/materials") {
    return null; // Evita renderizar o componente na página "/materials"
  }

  return (
    <a
      href="https://wa.me/48998442768"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-[1000] bg-green-500 text-white p-3 rounded-full shadow-lg transition-transform duration-500 hover:scale-110 ${
        animate ? "animate-custom-bounce" : ""
      }`}
      title="Converse conosco no WhatsApp"
    >
      <FaWhatsapp className="text-[35px] md:text-[50px]" />
    </a>
  );
}
