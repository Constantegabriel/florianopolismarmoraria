"use client";

import Link from "next/link";
import Image from "next/image";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import logo from "../../../public/img/logo_marmo.png";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContactBar, setShowContactBar] = useState(true);
  const pathname = usePathname(); // Hook para obter a rota atual

  useEffect(() => {
    const handleScroll = () => {
      setShowContactBar(window.scrollY <= 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Faixa de Contato */}
      <div
        className={`bg-gray-100 text-gray-800 py-3 md:py-2 px-6 text-sm md:text-base font-medium fixed top-0 w-full z-[1000] transition-transform duration-500 ${
          showContactBar ? "translate-y-0" : "-translate-y-full"
        } flex items-center gap-6`}
      >
        <div className="hidden md:flex items-center gap-2">
          Entre em contato conosco!
        </div>
        <div className="flex text-[13px] md:text-[15px] text-center md:text-left items-center gap-2">
          <FaPhoneAlt />
          <span>(48) 3238-0505</span>
        </div>
        <div className="flex text-[13px] md:text-[15px] text-center md:text-left items-center gap-2">
          <FaWhatsapp className="text-semibold text-[20px]" />
          <span>(48) 99844-2768</span>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`bg-gray-900 bg-opacity-90 backdrop-blur-md fixed top-0 ${
          showContactBar ? "mt-[40px]" : "mt-0"
        } z-[900] w-full text-white px-6 py-6 transition-all duration-500`}
      >
        <div className="flex justify-between items-center mx-[3%]">
          {/* Logo */}
          <div className="w-[200px]">
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="Logo Marmoraria Florianópolis"
                width={400}
                height={100}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Botão do Menu Hambúrguer (Mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-[38px] focus:outline-none"
          >
            ☰
          </button>

          {/* Links (Desktop) */}
          <div className="hidden md:flex items-center text-[16px] gap-8 font-medium">
            <Link
              href="/"
              className={`hover:text-gray-300 ${
                pathname === "/" ? "border-b-2 border-white" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/materials"
              className={`hover:text-gray-300 ${
                pathname === "/materials" ? "border-b-2 border-white" : ""
              }`}
            >
              Materiais
            </Link>
            <Link
              href="/services"
              className={`hover:text-gray-300 ${
                pathname === "/services" ? "border-b-2 border-white" : ""
              }`}
            >
              Serviços
            </Link>
            <Link
              href="/enterprise"
              className={`hover:text-gray-300 ${
                pathname === "/enterprise" ? "border-b-2 border-white" : ""
              }`}
            >
              Empresa
            </Link>
            <Link
              href="/contact"
              className={`hover:text-gray-300 ${
                pathname === "/contact" ? "border-b-2 border-white" : ""
              }`}
            >
              Contato
            </Link>
          </div>
        </div>

        {/* Links (Mobile) */}
        <div
          className={`md:hidden fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-95 backdrop-blur-md z-[800] flex flex-col items-center justify-center gap-6 text-[20px] font-medium transform transition-transform duration-500 ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Logo no topo esquerdo */}
          <div className="absolute top-7 left-6">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              <Image
                src={logo}
                alt="Logo Marmoraria Florianópolis"
                width={150}
                height={50}
                className="object-contain"
              />
            </Link>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-[35px] text-white"
          >
            ✕
          </button>

          <Link
            href="/"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/materials"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Materiais
          </Link>
          <Link
            href="/services"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Serviços
          </Link>
          <Link
            href="/enterprise"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Empresa
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-300"
            onClick={() => setMenuOpen(false)}
          >
            Contato
          </Link>
        </div>
      </nav>
    </>
  );
}
