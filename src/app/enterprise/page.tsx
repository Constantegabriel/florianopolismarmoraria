"use client";

import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../globals.css';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Empresa() {
  return (
    <section className="bg-gray-50">

      {/* Seção de Entrada */}
      <div className="relative h-[600px] flex items-center justify-center">
        <Image
          src="/img/maq2.jpeg"
          alt="Imagem principal da Marmoraria Florianópolis"
          layout="fill"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-gray-200 pt-[150px] text-4xl md:text-6xl font-bold text-center px-6">
            A <span className="text-white">Marmoraria Florianópolis</span> Transforma Ambientes com Elegância e Qualidade
          </h1>
        </div>
      </div>

      {/* Seção Sobre a Empresa */}
      <div className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Sobre a Empresa</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            A Marmoraria Florianópolis é referência em qualidade e elegância no uso de mármores e granitos. 
            Com anos de experiência, oferecemos soluções personalizadas que atendem às necessidades específicas 
            de cada cliente, garantindo sofisticação e durabilidade em todos os projetos. Nosso compromisso é 
            transformar seus sonhos em realidade, criando ambientes únicos e inspiradores.
          </p>
        </div>
      </div>

      {/* Swiper de Parceiros */}
      <div className="bg-gray-800 py-16 px-6 md:px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nossos Parceiros</h2>
          <p className="text-gray-300 md:mx-[20%] text-lg">
            Trabalhamos em parceria com empresas que compartilham nossos valores de qualidade, 
            inovação e excelência. Conheça alguns dos nossos parceiros:
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={2}
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          className="custom-swiper"
        >
          {/* Parceiro 1 */}
          <SwiperSlide>
            <div className="text-center">
              <Image
                src="/img/parc1.png"
                alt="Logo Parceiro 1"
                width={200}
                height={200}
                className="mx-auto h-[150px] sm:h-[200px] mb-4"
              />
              <h3 className="text-md sm:text-xl font-semibold text-white">Unique Jurerê</h3>
            </div>
          </SwiperSlide>

          {/* Parceiro 2 */}
          <SwiperSlide>
            <div className="text-center">
              <Image
                src="/img/parc2.png"
                alt="Logo Parceiro 2"
                width={200}
                height={200}
                className="mx-auto h-[150px] sm:h-[200px] mb-4"
              />
              <h3 className="text-md sm:text-xl font-semibold text-white">CFL Empreendimentos</h3>
            </div>
          </SwiperSlide>

          {/* Parceiro 3 */}
          <SwiperSlide>
            <div className="text-center">
              <Image
                src="/img/parc3.png"
                alt="Logo Parceiro 3"
                width={200}
                height={200}
                className="mx-auto h-[150px] sm:h-[200px] mb-4"
              />
              <h3 className="text-md sm:text-xl font-semibold text-white">Construtora Sanluzzi</h3>
            </div>
          </SwiperSlide>

          {/* Parceiro 4 */}
          <SwiperSlide>
            <div className="text-center">
              <Image
                src="/img/parc4.png"
                alt="Logo Parceiro 4"
                width={200}
                height={200}
                className="mx-auto h-[150px] sm:h-[200px] mb-4"
              />
              <h3 className="text-md sm:text-xl font-semibold text-white">Shopping Itaguaçu</h3>
            </div>
          </SwiperSlide>

          {/* Parceiro 5 */}
          <SwiperSlide>
            <div className="text-center">
              <Image
                src="/img/parc5.png"
                alt="Logo Parceiro 5"
                width={200}
                height={200}
                className="mx-auto h-[150px] sm:h-[200px] mb-4"
              />
              <h3 className="text-md sm:text-xl font-semibold text-white">Beiramar Shopping</h3>
            </div>
          </SwiperSlide>

          {/* Parceiro 6 */}
          <SwiperSlide>
            <div className="text-center">
              <Image
                src="/img/parc6.png"
                alt="Logo Parceiro 6"
                width={200}
                height={200}
                className="mx-auto h-[150px] sm:h-[200px] mb-4"
              />
              <h3 className="text-md sm:text-xl font-semibold text-white">Construtora Kreich</h3>
            </div>
          </SwiperSlide>

          {/* Parceiro 7 */}
          <SwiperSlide>
            <div className="text-center">
              <Image
                src="/img/parc7.png"
                alt="Logo Parceiro 7"
                width={200}
                height={200}
                className="mx-auto h-[150px] sm:h-[200px] mb-4"
              />
              <h3 className="text-md sm:text-xl font-semibold text-white">RLC Construtora</h3>
            </div>
          </SwiperSlide>

          {/* Parceiro 8 */}
          <SwiperSlide>
            <div className="text-center">
              <Image
                src="/img/parc8.png"
                alt="Logo Parceiro 8"
                width={200}
                height={200}
                className="mx-auto h-[150px] sm:h-[200px] mb-4"
              />
              <h3 className="text-md sm:text-xl font-semibold text-white">MRV Engenharia</h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="text-center">
              <Image
                src="/img/parc9.png"
                alt="Logo Parceiro 9"
                width={200}
                height={200}
                className="mx-auto h-[150px] sm:h-[200px] mb-4"
              />
              <h3 className="text-md sm:text-xl font-semibold text-white">Adore Incorporadora</h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="text-center">
              <Image
                src="/img/parc10.png"
                alt="Logo Parceiro 10"
                width={200}
                height={200}
                className="mx-auto h-[150px] sm:h-[200px] mb-4"
              />
              <h3 className="text-md sm:text-xl font-semibold text-white">Construtora Spindola</h3>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="text-center">
              <Image
                src="/img/parc11.png"
                alt="Logo Parceiro 11"
                width={200}
                height={200}
                className="mx-auto h-[150px] sm:h-[200px] mb-4"
              />
              <h3 className="text-md sm:text-xl font-semibold text-white">Nedana Empreendimentos</h3>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="bg-white py-16 px-6 md:px-20">
  <div className="max-w-6xl mx-auto text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Nossa Dedicação ao Seu Serviço</h2>
    <p className="text-gray-600 text-lg leading-relaxed">
      Na Marmoraria Florianópolis, combinamos a habilidade de nossos colaboradores com equipamentos de ponta
      para entregar qualidade, precisão e elegância em cada projeto. Veja um pouco do que nos torna únicos:
    </p>
  </div>

  <div className="lg:w-[80%] mx-auto md:w-3/3 relative">
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
                <div className="relative w-full h-[400px] md:h-[400px]">
                  <Image
                    src="/img/maq1.jpeg"
                    alt="Maquinário 1"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-[400px] md:h-[400px]">
                  <Image
                    src="/img/maq2.jpeg"
                    alt="Maquinário 2"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-[400px] md:h-[400px]">
                  <Image
                    src="/img/maq3.jpeg"
                    alt="Maquinário 3"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="relative w-full h-[400px] md:h-[400px]">
                  <Image
                    src="/img/maq4.jpeg"
                    alt="Maquinário 3"
                    layout="fill"
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>

              {/* Botões de Navegação Personalizados */}
              <div className="swiper-button-prev custom-navigation text-gray-800"></div>
              <div className="swiper-button-next custom-navigation text-gray-800"></div>
            </Swiper>
          </div>
          </div>

    </section>
  );
}
