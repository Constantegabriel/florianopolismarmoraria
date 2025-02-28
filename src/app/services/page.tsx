"use client";

import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../globals.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Services() {
  return (
    <section className="bg-gray-50">

      {/* Seção de Destaque (Entrada) */}
      <div className="relative flex flex-col lg:px-[10%] justify-center mt-[145px] bg-white py-[100px] h-[600px] px-8 md:px-20">
        
        {/* Background Menor com Texto à Esquerda */}
        <div className="absolute top-[50%] lg:mx-[5%] bg-opacity-95 left-4 transform -translate-y-1/2 w-[90%] md:w-[60%] lg:w-[40%] bg-gray-800 text-white p-6 md:p-8 rounded-lg shadow-2xl z-10">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6">
            Explore Aqui Nossas Incríveis Obras
          </h2>
          <p className="text-lg mb-6">
            Descubra alguns de nossos projetos feitos sob medida, que transformaram ambientes com elegância e qualidade incomparáveis.
          </p>
        </div>

        {/* Imagem Grande da Área Principal à Direita */}
        <div className="absolute top-0 lg:mx-[5%] md:top-10 right-0 w-full h-[550px] md:h-[500px] md:w-[80%] lg:w-[60%] shadow-lg md:rounded-lg overflow-hidden">
          <Image
            src="/img/quarto.jpg"
            alt="Espaço com Mármores e Granitos"
            layout="fill"
            className="object-cover"
          />
        </div>
      </div>

      {/* Seção 1: Cozinhas Planejadas */}
      <div className="py-24 mt-[-90px] md:mt-[-70px] bg-white">
        <div className="container mx-auto flex flex-col items-center gap-8 px-[2%] md:px-[10%] relative">
          
          {/* Texto acima do Swiper */}
          <div className="text-center md:text-left w-full md:w-3/3 mb-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Cozinhas Planejadas</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Bancadas e ilhas de cozinha feitas sob medida, combinando funcionalidade e design sofisticado. Transforme sua cozinha em um ambiente de beleza e praticidade.
            </p>
            <Link href="/materials">
              <button className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-6 rounded-full font-semibold transition">
                Escolha o Mármore Ideal
              </button>
            </Link>
          </div>

          {/* Swiper com Imagens de Cozinhas */}
          <div className="w-full md:w-3/3 h-[400px] md:h-[600px] relative">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              breakpoints={{
                668: { slidesPerView: 2 },
              }}
              loop={true}
              autoplay={{ delay: 3000 }}
              pagination={{ clickable: true, bulletClass: "swiper-pagination-bullet custom-bullet" }}
              navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
            >
              <SwiperSlide>
                <div className="relative w-full h-[400px] md:h-[600px]">
                  <Image
                    src="/img/coz1.jpg"
                    alt="Cozinha Planejada 1"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-[400px] md:h-[600px]">
                  <Image
                    src="/img/coz2.jpg"
                    alt="Cozinha Planejada 2"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-[400px] md:h-[600px]">
                  <Image
                    src="/img/coz3.jpg"
                    alt="Cozinha Planejada 3"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-[400px] md:h-[600px]">
                  <Image
                    src="/img/coz4.jpg"
                    alt="Cozinha Planejada 4"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-[400px] md:h-[600px]">
                  <Image
                    src="/img/coz5.jpg"
                    alt="Cozinha Planejada 5"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-[400px] md:h-[600px]">
                  <Image
                    src="/img/coz6.jpg"
                    alt="Cozinha Planejada 6"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-[400px] md:h-[600px]">
                  <Image
                    src="/img/coz7.jpg"
                    alt="Cozinha Planejada 7"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-[400px] md:h-[600px]">
                  <Image
                    src="/img/cozinha.jpg"
                    alt="Cozinha Planejada 8"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>

              {/* Botões de Navegação Personalizados */}
              <div className="swiper-button-prev text-white"></div>
              <div className="swiper-button-next text-white"></div>
              <div className="custom-navigation text-white"></div>
            </Swiper>
          </div>

        </div>
      </div>

      <div className="text-[22px] lg:text-[35px] font-bold text-center text-white pt-8 bg-gray-800">
        <p className="p-2 border-b-4 w-[79%] sm:w-[420px] md:w-[500px] lg:w-[700px] mx-auto">
          Banheiros Sob Medida
        </p>
        <p className="text-[16px] text-gray-300 lg:text-[20px] font-normal mt-4 px-4 md:px-16 max-w-[800px] mx-auto">
          Oferecemos serviços personalizados para banheiros, incluindo cubas, pias e bancadas em mármore sob medida. Cada peça é projetada para atender às suas necessidades, combinando elegância, durabilidade e um acabamento impecável.
        </p>
      </div>
      <div className="bg-gray-800 flex flex-col lg:flex-row py-10 md:px-[10%] lg:px-12">
        <div className="flex flex-col lg:mt-24 px-8 gap-4 mb-4 lg:w-[50%]">
          <div className="relative">
            <Image
              src="/img/banheiro.jpg"
              alt="Imagem 1"
              width={500}
              height={300}
              className="object-cover border-2 border-white w-full h-auto"
            />
          </div>

          <div className="relative">
            <Image
              src="/img/ban1.jpg"
              alt="Imagem 2"
              width={500}
              height={300}
              className="object-cover border-2 border-white w-full h-auto"
            />
          </div>
        </div>

        <div className="flex flex-col px-8 gap-4 mb-4 lg:w-[50%]">
          <div className="relative">
            <Image
              src="/img/ban2.jpg"
              alt="Imagem 3"
              width={500}
              height={300}
              className="object-cover border-2 border-white w-full h-auto"
            />
          </div>
          <div className="relative">
            <Image
              src="/img/ban3.jpg"
              alt="Imagem 4"
              width={500}
              height={300}
              className="object-cover border-2 border-white w-full h-auto"
            />
          </div>
        </div>

        <div className="flex flex-col lg:mt-24 px-8 mb-4 gap-4 lg:w-[50%]">
          <div className="relative">
            <Image
              src="/img/ban5.jpg"
              alt="Imagem 5"
              width={500}
              height={300}
              className="object-cover border-2 border-white w-full h-auto"
            />
          </div>

          <div className="relative">
            <Image
              src="/img/ban6.jpg"
              alt="Imagem 6"
              width={500}
              height={300}
              className="object-cover border-2 border-white w-full h-auto"
            />
          </div>
        </div>
      </div>

      <section className="bg-gray-50 py-16">
      {/* Título e Descrição Geral */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Salas de Estar e de Jantar para Inspirar
        </h2>
        <p className="text-gray-600 mb-12">
          Descubra a elegância e sofisticação em nossas salas,
          projetadas sob medida para transformar seus ambientes.
        </p>
      </div>

      {/* Swiper */}
      <div className="container mx-auto px-4 relative">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          pagination={{ clickable: true }}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="bg-white shadow-lg border-2 border-gray-800 overflow-hidden">
              <Image
                src="/img/sala1.jpg"
                alt="Sala Clássica"
                width={500}
                height={300}
                className="object-cover w-full h-72"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Mesa Minimalista</h3>
                <p className="text-gray-600 mt-2">
                Sofisticação e elegância em um design simples, perfeita para salas de jantar modernas e acolhedoras.                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="bg-white shadow-lg border-2 border-gray-800 overflow-hidden">
              <Image
                src="/img/sala2.jpg"
                alt="Mesa de Jantar Moderna"
                width={500}
                height={300}
                className="object-cover w-full h-72"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Bancada Nobre de Mármore</h3>
                <p className="text-gray-600 mt-2">
                Uma peça funcional e moderna, ideal para complementar salas de estar com um toque de sofisticação.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="bg-white shadow-lg border-2 border-gray-800 overflow-hidden">
              <Image
                src="/img/sala4.jpg"
                alt="Mesa de Centro Elegante"
                width={500}
                height={300}
                className="object-cover w-full h-72"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Mesa Gourmet em Mármore</h3>
                <p className="text-gray-600 mt-2">
                Elegância e resistência para compor áreas gourmet, perfeita para momentos especiais com estilo refinado.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 5 */}
          <SwiperSlide>
            <div className="bg-white shadow-lg border-2 border-gray-800 overflow-hidden">
              <Image
                src="/img/sala5.jpg"
                alt="Sala com Toques Rústicos"
                width={500}
                height={300}
                className="object-cover w-full h-72"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Painel de Entrada Chocante</h3>
                <p className="text-gray-600 mt-2">
                Um design imponente e sofisticado que transforma entradas em verdadeiras obras de arte.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 6 */}
          <SwiperSlide>
            <div className="bg-white shadow-lg border-2 border-gray-800 overflow-hidden">
              <Image
                src="/img/sala6.jpg"
                alt="Sala Minimalista"
                width={500}
                height={300}
                className="object-cover w-full h-72"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Mesa de Jantar Redonda</h3>
                <p className="text-gray-600 mt-2">
                Um clássico atemporal que combina elegância e funcionalidade, ideal para reunir pessoas com estilo.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Botões de Navegação */}
        <div className="swiper-button-prev absolute top-[45%] left-0 z-10 w-10 h-10 text-gray-800 flex items-center justify-center cursor-pointer hover:text-gray-700 transition"></div>
        <div className="swiper-button-next absolute top-[45%] right-0 z-10 w-10 h-10 text-gray-800 flex items-center justify-center cursor-pointer hover:text-gray-700 transition"></div>
      </div>
    </section>

    <div className="bg-gray-200 py-12 px-6 md:px-20">
      <h2 className="text-center text-gray-800 text-2xl md:text-4xl font-bold mb-8">
        Prédios Residenciais e Comerciais
      </h2>
      <h2 className="text-gray-700 mb-12 text-lg text-center w-[90%] md:w-[70%] mx-auto">
        Oferecemos também serviços personalizados para prédios residenciais e comerciais, transformando lojas e condomínios em espaços sofisticados e funcionais.
      </h2>

        <div className="grid grid-cols-1 mt-[20px] lg:grid-cols-3 gap-6">
          <Image
            src="/img/ar1.jpg"
            alt="Projeto 1"
            width={400}
            height={300}
            className="w-[80%] lg:w-full lg:m-0 lg:mt-10 mr-[10%] h-60 object-cover rounded-lg shadow-2xl"
          />
          <Image
            src="/img/ar2.jpg"
            alt="Projeto 2"
            width={400}
            height={300}
            className="w-[80%] lg:w-full lg:m-0 h-60 ml-[20%] object-cover rounded-lg shadow-2xl"
          />
          <Image
            src="/img/ar3.jpg"
            alt="Projeto 3"
            width={400}
            height={300}
            className="w-[80%] lg:w-full mx-auto lg:mt-20 h-60 object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>

      <div className="bg-white py-16 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <Image
            src="/img/acordo.jpg"
            alt="Acordo com Cliente"
            width={600}
            height={400}
            className="w-[80%] border-l-[10px] border-gray-800 shadow-lg"
          />
          <div>
            <h2 className="text-2xl md:text-4xl text-gray-800 font-bold mb-4">
            Transforme Seu Ambiente com a <span className="text-gray-800">Nossa Expertise</span>
            </h2>
            <p className="text-gray-600 mb-4">
              Gostou da nossa galeria de projetos realizados? Esses são apenas alguns 
              exemplos de centenas de obras que concluímos com excelência ao longo dos anos.
            </p>
            <p className="text-gray-600">
              Entre em contato e descubra como podemos transformar seu espaço em um ambiente moderno, sofisticado e funcional. 
              Vamos criar algo único juntos!
            </p>
            <Link href="/contact">
              <button className="bg-gray-800 text-white mt-6 px-8 py-3 hover:bg-gray-700 rounded-full font-semibold transition">
                Fale Conosco
              </button>
            </Link>
          </div>
        </div>
      </div>


    </section>
  );
}
