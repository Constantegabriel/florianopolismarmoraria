"use client";

import Link from "next/link";
import Image from "next/image";
import './globals.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

import { PiGearDuotone } from "react-icons/pi";
import { GiBriefcase, GiStoneBlock } from "react-icons/gi";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [backgroundImage, setBackgroundImage] = useState("/img/gs1.jpg");

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setBackgroundImage("/img/cozinha.jpg");
    }
  }, []);

  return (
    <section>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 8000 }}
        pagination={{ clickable: true, bulletClass: "custom-bullet" }}
        className="h-screen text-white"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        <SwiperSlide className="relative flex items-center justify-start h-screen">
          <div
            className={`absolute flex md:hidden inset-0 bg-cover bg-center transition-transform duration-1000 ${
              activeIndex === 0 ? "zoom-active" : ""
            }`}
            style={{ backgroundImage: `url('/img/fachada3.jpeg')` }}
          ></div>
          <div
            className={`absolute hidden md:flex inset-0 bg-cover bg-center transition-transform duration-1000 ${
              activeIndex === 0 ? "zoom-active" : ""
            }`}
            style={{ backgroundImage: `url('/img/fachada.jpg')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 md:from-black/80 to-transparent"></div>
          <div className="absolute bottom-16 left-[5%] lg:left-10 text-left px-4 md:px-10 pb-10 max-w-lg">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-5 text-white">
              Sua Marmoraria em Florianópolis
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl w-full sm:w-[80%] md:w-[600px] text-[#e7e7e7] font-medium mb-4 sm:mb-6">
              Oferecemos uma ampla seleção de mármores e granitos nacionais e importados, com acabamento impecável e designs únicos.
            </p>
            <Link href="https://api.whatsapp.com/send?phone=48998442768">
              <button className="px-6 py-2 bg-gray-900 hover:bg-gray-800 border-[1px] border-white rounded-full text-sm md:text-lg font-semibold transition">
                Solicite um Orçamento
              </button>
            </Link>
          </div>
        </SwiperSlide>

        {backgroundImage && (
          <SwiperSlide className="relative flex items-end justify-start h-screen">
            <div
              className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 ${
                activeIndex === 1 ? "zoom-active" : ""
              }`}
              style={{ backgroundImage: `url('${backgroundImage}')` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 md:from-black/80 to-transparent"></div>
            <div className="absolute bottom-16 left-[5%] lg:left-10 text-left px-4 md:px-10 pb-10 max-w-lg">
              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-5 text-white">
                Excelência em Serviços de Marmoraria
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl w-full sm:w-[80%] md:w-[600px] text-[#e7e7e7] font-medium mb-4 sm:mb-6">
                Realizamos serviços personalizados e de alta qualidade para transformar cada ambiente em uma obra de arte.
              </p>
              <Link href="/services">
                <button className="px-6 py-2 bg-gray-900 hover:bg-gray-800 border-[1px] border-white rounded-full text-sm md:text-lg font-semibold transition">
                  Conheça nossos Serviços
                </button>
              </Link>
            </div>
          </SwiperSlide>
        )}

        <SwiperSlide className="relative flex items-end justify-start h-screen">
          <div
            className={`absolute flex md:hidden inset-0 bg-cover bg-center transition-transform duration-1000 ${
              activeIndex === 2 ? "zoom-active" : ""
            }`}
            style={{ backgroundImage: `url('/img/maq3.jpeg')` }}
          ></div>
          <div
            className={`absolute hidden md:flex inset-0 bg-cover bg-center transition-transform duration-1000 ${
              activeIndex === 2 ? "zoom-active" : ""
            }`}
            style={{ backgroundImage: `url('/img/maq1.jpeg')` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 md:from-black/80 to-transparent"></div>
          <div className="absolute bottom-16 left-[5%] lg:left-10 text-left px-4 md:px-10 pb-10 max-w-lg">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-5 text-white">
              Tecnologia e Profissionalismo
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl w-full sm:w-[80%] md:w-[600px] text-[#e7e7e7] font-medium mb-4 sm:mb-6">
              Utilizamos os melhores maquinários e contamos com uma equipe altamente qualificada para entregar resultados excepcionais.
            </p>
            <Link href="/enterprise#equipe">
              <button className="px-6 py-2 bg-gray-900 hover:bg-gray-800 border-[1px] border-white rounded-full text-sm md:text-lg font-semibold transition">
                Conheça nossa Estrutura
              </button>
            </Link>
          </div>
        </SwiperSlide>
        <div className="custom-bullet text-white"></div>
      </Swiper>

      <div className="bg-white py-16 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <Image
            src="/img/fachada.jpg"
            alt="Nossa Fachada"
            width={600}
            height={400}
            className="w-[80%] border-l-[10px] border-gray-800 shadow-lg"
          />
          <div>
            <h2 className="text-2xl md:text-4xl text-gray-800 font-bold mb-4">
              Sobre a <span className="text-gray-800">Marmoraria Florianópolis</span>
            </h2>
            <p className="text-gray-600 mb-4">
              Com anos de experiência, oferecemos produtos e serviços que
              transformam projetos em realidade. Nosso compromisso é com a
              excelência e a satisfação dos nossos clientes.
            </p>
            <p className="text-gray-600">
              Seja para reformas residenciais ou grandes projetos comerciais,
              estamos prontos para atender suas necessidades com materiais de
              alta qualidade e acabamentos impecáveis.
            </p>
            <button className="bg-gray-800 mt-[30px] px-8 py-[7px] hover:bg-gray-700 rounded-full font-semibold">
              Sobre a empresa
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-[80px] rounded-lg px-6 md:px-20">
        <h2 className="text-center text-gray-100 text-2xl md:text-4xl font-bold mb-12">
          Descubra por que somos a marmoraria certa para você
        </h2>
        <div className="flex text-gray-800 mx-[6%] flex-wrap justify-center gap-6">
          
          <div className="text-center bg-white border-b-[10px] border-gray-400 p-8 pt-12 pb-6 hover:shadow-lg transition w-full md:w-[350px]">
            <p className="text-center flex justify-center text-[35px] mb-[10px]">
              <GiBriefcase />
            </p>
            <h1 className="text-lg font-bold">PORTFÓLIO</h1>
            <p className="text-gray-800 text-md mt-4">
              Inspire-se com nossos projetos realizados, criados com precisão e dedicação.
            </p>
            <a href="/services" className="font-semibold text-gray-600 text-right text-[15px] underline mt-[19px] block">
              Saiba mais
            </a>
          </div>

          <div className="text-center bg-white border-b-[10px] border-gray-400 p-8 pt-12 pb-6 hover:shadow-lg transition w-full md:w-[350px]">
            <p className="text-center flex justify-center text-[35px] mb-[10px]">
              <GiStoneBlock />
            </p>
            <h1 className="text-lg font-bold">PRODUTOS</h1>
            <p className="text-gray-800 text-md mt-4">
              Trabalhamos com os melhores materiais para oferecer qualidade e sofisticação.
            </p>
            <a href="/materials" className="font-semibold text-gray-600 text-right text-[15px] underline mt-[19px] block">
              Saiba mais
            </a>
          </div>

          <div className="text-center bg-white border-b-[10px] border-gray-400 p-8 pt-12 pb-6 hover:shadow-lg transition w-full md:w-[350px]">
            <p className="text-center flex justify-center text-[35px] mb-[10px]">
              <PiGearDuotone />
            </p>
            <h1 className="text-lg font-bold">MAQUINÁRIO</h1>
            <p className="text-gray-800 text-md mt-4">
              Modernos equipamentos e uma equipe qualificada garantem resultados superiores.
            </p>
            <a href="/enterprise" className="font-semibold text-gray-600 text-right text-[15px] underline mt-[19px] block">
              Saiba mais
            </a>
          </div>

        </div>
      </div>
      <div className="bg-gray-200 py-12 px-6 md:px-20">
        <h2 className="text-center text-gray-800 text-2xl md:text-4xl font-bold mb-8">
          Galeria de Serviços
        </h2>
        <h2 className="text-gray-700 mb-12 text-lg text-center w-[90%] md:w-[70%] mx-auto">
          Confira nossa seleção de serviços personalizados sob medida, especialmente projetados para transformar seus ambientes em espaços sofisticados e únicos.
        </h2>
        <div className="grid grid-cols-1 mt-[20px] lg:grid-cols-3 gap-6">
          <Image
            src="/img/gs1.jpg"
            alt="Projeto 1"
            width={400}
            height={300}
            className="w-[80%] lg:w-full lg:m-0 lg:mt-10 mr-[10%] h-60 object-cover rounded-lg shadow-2xl"
          />
          <Image
            src="/img/gs2.jpg"
            alt="Projeto 2"
            width={400}
            height={300}
            className="w-[80%] lg:w-full lg:m-0 h-60 ml-[20%] object-cover rounded-lg shadow-2xl"
          />
          <Image
            src="/img/quarto.jpg"
            alt="Projeto 3"
            width={400}
            height={300}
            className="w-[80%] lg:w-full mx-auto lg:mt-20 h-60 object-cover rounded-lg shadow-2xl"
          />
        </div>
        <div className="flex mt-[25px] lg:mt-[15px] justify-center">
          <Link href="/services">
            <button className="px-10 py-[10px] hover:bg-gray-700 rounded-full text-white font-medium bg-gray-800">
              Veja Nossas Soluções
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-white py-20 px-4 sm:px-8 md:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full md:w-3/5 flex justify-center">
            <video
              src="/video/materials-video.mp4"
              autoPlay
              loop
              muted
              className="w-full max-w-[600px] md:max-w-[100%]shadow-lg rounded-lg"
            />
          </div>
          <div className="w-full lg:w-3/5 text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 font-bold mb-4">
              Escolha, Adicione e Consulte
            </h2>
            <p className="text-gray-600 mb-4">
              Explore nossa seleção dos materiais mais populares e preferidos pelos clientes. Adicione facilmente os itens ao seu carrinho e tenha tudo pronto para uma experiência personalizada.
            </p>
            <p className="text-gray-600 mb-6">
              Após selecionar seus materiais, envie seu carrinho diretamente para o nosso WhatsApp. Nossa equipe está pronta para oferecer uma consultoria especializada e tirar todas as suas dúvidas.
            </p>
            <Link href="/materials">
              <button className="bg-gray-800 px-8 py-[10px] hover:bg-gray-700 rounded-full font-semibold">
                Ver Materiais
              </button>
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
