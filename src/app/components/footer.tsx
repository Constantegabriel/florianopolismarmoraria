import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/img/logo_marmo.png";

export default function Footer() {
  return (
    <>
    <div className="relative bg-cover bg-center h-[300px]" style={{ backgroundImage: "url('/img/fachada3.jpeg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
          Fale conosco agora mesmo!
        </h2>
        <p className="text-sm md:text-lg text-gray-300 mb-6">
          Clique no botão abaixo para iniciar uma conversa pelo WhatsApp.
        </p>
        <Link
          href="https://wa.me/48998442768"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-900 border-[1px] border-white text-white py-2 px-8 rounded-full text-lg font-semibold transition"
        >
          Conversar pelo WhatsApp
        </Link>
      </div>
    </div>

    <footer className="relative z-100 bg-gray-800 text-white pt-14 pb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12">
        {/* Informações da empresa */}
        <div className="mt-[20px]">
          <div className="w-[80px]">
            <Link href="/" className="flex items-center">
              <Image
                src={logo}
                alt="Logo Marmoraria Florianópolis"
                width={200}
                height={50}
                className="absolute object-contain"
              />
            </Link>
          </div>
          <p className="text-sm mt-10 leading-relaxed">
            Na Marmoraria Florianópolis, transformamos projetos em realidade 
            com mármores e granitos de alta qualidade, unindo elegância, 
            durabilidade e acabamentos impecáveis. Nosso compromisso é 
            entregar soluções que encantam e superam expectativas.
          </p>
        </div>

        {/* Localização */}
        <div>
          <h1 className="text-lg font-bold">ONDE NOS ENCONTRAR</h1>
          <p className="text-sm mt-4 leading-relaxed">
          R. Gregório Flôr, 170 - Rio Caveiras, Biguaçu - SC
          </p>
          <p className="text-sm mt-2">CEP: 88161-780</p>
        </div>

        {/* Contato */}
        <div>
          <h1 className="text-lg font-bold">FALE CONOSCO</h1>
          <p className="text-sm mt-4">Fone:  (48) 3243-0000 - (48) 3039-8806</p>
          <p className="text-sm mt-2">WhatsApp: (48) 99844-2768</p>
          <p className="text-sm mt-2">Email: vendas.marmorariafpolis@gmail.com</p>
        </div>
      </div>

      {/* Créditos */}
      <div className="text-center mt-12">
        <h1 className="text-sm">
        Desenvolvido em conjunto entre {" "}
          <Link
            href="https://aiastec.com/"
            className="underline hover:text-blue-400 transition"
          >
            AiasTec
          </Link>{" "}
          &{" "}
          <Link
            href="https://www.instagram.com/rizontec?igsh=MWtmdDJyc2owNnIwYw=="
            className="underline hover:text-blue-400 transition"
          >
            RizonTec
          </Link>{" "}

        </h1>
      </div>
    </footer>
    </>
  );
}
