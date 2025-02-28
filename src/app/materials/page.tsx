"use client";

import { useState, useEffect } from "react";
import { AiOutlineShoppingCart, AiOutlineDelete } from "react-icons/ai";
import Image from "next/image";

interface Material {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

const materials: Material[] = [

  {
    id: 1,
    title: "Granito Arabesco",
    description: "Estilo único com desenhos naturais e marcantes.",
    imageUrl: "/img/gr-ara.jpg",
    category: "Granito",
  },
  {
    id: 2,
    title: "Granito Cinza Andorinha",
    description: "Cinza clássico, perfeito para áreas externas ou internas.",
    imageUrl: "/img/gr-and.jpeg",
    category: "Granito",
  },
  {
    id: 3,
    title: "Granito Café Imperial",
    description: "Marrom intenso com elegância natural.",
    imageUrl: "/img/gr-caf.jpg",
    category: "Granito",
  },
  {
    id: 4,
    title: "Granito Cabernet",
    description: "Tons marcantes que remetem à sofisticação do vinho.",
    imageUrl: "/img/gr-ceb.jpg",
    category: "Granito",
  },
  {
    id: 5,
    title: "Granito Cinza Corumba",
    description: "Cinza discreto e elegante para ambientes variados.",
    imageUrl: "/img/gr-cinz-coru.jpg",
    category: "Granito",
  },
  {
    id: 6,
    title: "Granito Branco Dallas",
    description: "Branco refinado com toques suaves de elegância.",
    imageUrl: "/img/gr-dallas.jpg",
    category: "Granito",
  },
  {
    id: 7,
    title: "Granito Branco Itaúnas",
    description: "Elegância e suavidade com uma tonalidade clara que combina com qualquer ambiente.",
    imageUrl: "/img/gr-ita.jpg",
    category: "Granito",
  },
  {
    id: 8,
    title: "Granito Branco Itabira",
    description: "Tons quentes e terrosos para ambientes aconchegantes.",
    imageUrl: "/img/gr-itabira.jpg",
    category: "Granito",
  },
  {
    id: 9,
    title: "Granito Marrom Tabaco",
    description: "Marrom robusto com charme natural.",
    imageUrl: "/img/gr-mar.jpg",
    category: "Granito",
  },
  {
    id: 10,
    title: "Granito Pitaya",
    description: "Visual único com tonalidades exclusivas e marcantes.",
    imageUrl: "/img/gr-pit.jpg",
    category: "Granito",
  },
  {
    id: 11,
    title: "Granito São Gabriel",
    description: "Preto versátil e elegante, ideal para qualquer projeto.",
    imageUrl: "/img/gr-sao.jpg",
    category: "Granito",
  },
  {
    id: 12,
    title: "Granito Branco Siena",
    description: "Branco sofisticado com nuances sutis, perfeito para ambientes modernos.",
    imageUrl: "/img/gr-siena.jpg",
    category: "Granito",
  },
  {
    id: 13,
    title: "Granito Verde Ubatuba",
    description: "Verde escuro com brilho intenso, perfeito para cozinhas e banheiros.",
    imageUrl: "/img/gr-uba.jpg",
    category: "Granito",
  },
  {
    id: 14,
    title: "Granito Preto Absoluto",
    description: "Preto puro com sofisticação máxima para projetos modernos.",
    imageUrl: "/img/gr-pabs.jpg",
    category: "Granito",
  },
  {
    id: 15,
    title: "Granito Preto Via Láctea",
    description: "Preto com veios brancos únicos, lembrando a beleza do céu estrelado.",
    imageUrl: "/img/gr-via.jpg",
    category: "Granito",
  },

//marmores//

{
  id: 16,
  title: "Mármore Branco",
  description: "Branco puro, ideal para projetos limpos e modernos.",
  imageUrl: "/img/mr-bra.jpg",
  category: "Mármore",
},
{
  id: 17,
  title: "Mármore Bronze Armani",
  description: "Tons quentes e sofisticados para projetos modernos.",
  imageUrl: "/img/mr-bro.jpg",
  category: "Mármore",
},
{
  id: 18,
  title: "Mármore Calacatta",
  description: "Branco nobre com veios marcantes que destacam qualquer ambiente.",
  imageUrl: "/img/mr-cal.jpg",
  category: "Mármore",
},
{
  id: 19,
  title: "Mármore Carrara",
  description: "Branco clássico com veios suaves, símbolo de elegância atemporal.",
  imageUrl: "/img/mr-car.jpg",
  category: "Mármore",
},
{
  id: 20,
  title: "Mármore Crema Marfil",
  description: "Bege claro e elegante, versátil para qualquer ambiente.",
  imageUrl: "/img/mr-cre.jpg",
  category: "Mármore",
},
{
  id: 21,
  title: "Mármore Griss Armani",
  description: "Cinza sofisticado com visual moderno.",
  imageUrl: "/img/mr-gri.webp",
  category: "Mármore",
},
{
  id: 22,
  title: "Mármore Marrom Imperador Light",
  description: "Marrom claro com veios delicados, ideal para ambientes requintados.",
  imageUrl: "/img/mr-iml.jpg",
  category: "Mármore",
},
{
  id: 23,
  title: "Mármore Marrom Imperador",
  description: "Marrom intenso com veios marcantes.",
  imageUrl: "/img/mr-imp.jpeg",
  category: "Mármore",
},
{
  id: 24,
  title: "Mármore Machiatta Oro",
  description: "Bege com veios dourados, ideal para um toque luxuoso.",
  imageUrl: "/img/mr-macc.jpg",
  category: "Mármore",
},
{
  id: 25,
  title: "Mármore Matarazzo",
  description: "Beleza natural com veios únicos e textura delicada.",
  imageUrl: "/img/mr-mata.jpg",
  category: "Mármore",
},
{
  id: 26,
  title: "Mármore Nero Marquina",
  description: "Preto profundo com veios brancos que exalam sofisticação.",
  imageUrl: "/img/mr-ner.jpeg",
  category: "Mármore",
},
{
  id: 27,
  title: "Mármore Pighes",
  description: "Branco elegante com padrões naturais.",
  imageUrl: "/img/mr-pig.jpg",
  category: "Mármore",
},
{
  id: 28,
  title: "Mármore Travertino Romano Bruto",
  description: "Versão natural para um visual rústico.",
  imageUrl: "/img/mr-tra-rom-br.jpg",
  category: "Mármore",
},
{
  id: 29,
  title: "Mármore Travertino Romano",
  description: "Clássico com textura única, perfeito para projetos elegantes.",
  imageUrl: "/img/mr-tra-rom.jpg",
  category: "Mármore",
},
{
  id: 30,
  title: "Mármore Travertino",
  description: "Visual rústico e sofisticado, perfeito para áreas internas e externas.",
  imageUrl: "/img/mr-tra.jpg",
  category: "Mármore",
},
{
  id: 31,
  title: "Mármore Botticino",
  description: "Bege clássico com um toque de elegância.",
  imageUrl: "/img/mr-bott.jpg",
  category: "Mármore",
},
{
  id: 32,
  title: "Mármore Branco Paraná",
  description: "Branco sofisticado com nuances sutis.",
  imageUrl: "/img/mr-bra-pr.jpg",
  category: "Mármore",
},

//quartzos//

{
  id: 32,
  title: "Quartzo Ariston",
  description: "Branco sofisticado para projetos clean.",
  imageUrl: "/img/qt-aris.jpg",
  category: "Quartzo",
},
{
  id: 33,
  title: "Quartzo Calacatta Gold",
  description: "Branco elegante com veios dourados exclusivos.",
  imageUrl: "/img/qt-cal-g.webp",
  category: "Quartzo",
},
{
  id: 34,
  title: "Quartzo Calacatta",
  description: "Branco clássico com veios marcantes.",
  imageUrl: "/img/qt-cal.jpg",
  category: "Quartzo",
},
{
  id: 35,
  title: "Quartzo Cinza Stellar",
  description: "Cinza com partículas brilhantes que destacam o espaço.",
  imageUrl: "/img/qt-cinz-st.jpg",
  category: "Quartzo",
},
{
  id: 36,
  title: "Quartzo Cinza",
  description: "Cinza neutro e funcional para qualquer ambiente.",
  imageUrl: "/img/qt-cinz.jpg",
  category: "Quartzo",
},
{
  id: 37,
  title: "Quartzo Concrete",
  description: "Cinza concreto, perfeito para um visual industrial.",
  imageUrl: "/img/qt-conc.jpg",
  category: "Quartzo",
},
{
  id: 38,
  title: "Quartzo Diamond Gray",
  description: "Cinza brilhante com um toque refinado.",
  imageUrl: "/img/qt-dimon-g.jpg",
  category: "Quartzo",
},
{
  id: 39,
  title: "Quartzo Diamond Sand",
  description: "Bege claro com brilho natural.",
  imageUrl: "/img/qt-dimon-sa.jpg",
  category: "Quartzo",
},
{
  id: 40,
  title: "Quartzo Kensho",
  description: "Cinza neutro com toque contemporâneo.",
  imageUrl: "/img/qt-ken.webp",
  category: "Quartzo",
},
{
  id: 41,
  title: "Quartzo Sky White",
  description: "GrBranco com tonalidades suaves que lembram o céu.",
  imageUrl: "/img/qt-skyw.webp",
  category: "Quartzo",
},
{
  id: 42,
  title: "Quartzo Tigris Sand",
  description: "Tons terrosos que trazem aconchego ao ambiente.",
  imageUrl: "/img/qt-tigris.jpg",
  category: "Quartzo",
},
{
  id: 43,
  title: "Quartzo Unsui",
  description: "Elegância em tons claros com sutileza e modernidade.",
  imageUrl: "/img/qt-uns.jpg",
  category: "Quartzo",
},
{
  id: 44,
  title: "Quartzo White Led",
  description: "Branco luminoso que ilumina qualquer ambiente.",
  imageUrl: "/img/qt-whi-led.jpeg",
  category: "Quartzo",
},
{
  id: 45,
  title: "Quartzo White Stellar",
  description: "Branco com partículas brilhantes, criando um efeito sofisticado.",
  imageUrl: "/img/qt-whi-st.jpeg",
  category: "Quartzo",
},
{
  id: 46,
  title: "Quartzo White Storm",
  description: "GBranco com textura sutil, perfeito para projetos modernos.",
  imageUrl: "/img/qt-whi-sto.webp",
  category: "Quartzo",
},
{
  id: 47,
  title: "Quartzo White",
  description: "Branco puro e versátil, ideal para qualquer espaço.",
  imageUrl: "/img/qt-whi.jpg",
  category: "Quartzo",
},
{
  id: 48,
  title: "Quartzo Arene",
  description: "Bege moderno com textura sofisticada.",
  imageUrl: "/img/qt-arene.jpg",
  category: "Quartzo",
},

//quartzitos//

{
  id: 49,
  title: "Quartzito San Rafaello",
  description: "Textura marcante e tonalidades únicas que exalam sofisticação.",
  imageUrl: "/img/qz-san.jpeg",
  category: "Quartzito",
},
{
  id: 50,
  title: "Quartzito Taj Mahal",
  description: "Bege claro com veios delicados, perfeito para ambientes luxuosos.",
  imageUrl: "/img/qz-taj.jpg",
  category: "Quartzito",
},
{
  id: 51,
  title: "Quartzito Arabescasatto",
  description: "Padrões naturais impressionantes, combinando beleza e exclusividade.",
  imageUrl: "/img/qz-arabescasatto.jpg",
  category: "Quartzito",
},
{
  id: 52,
  title: "Quartzito Mont Blanc",
  description: "Branco sofisticado com veios suaves, ideal para projetos elegantes.",
  imageUrl: "/img/qz-mont.jpeg",
  category: "Quartzito",
},

];


export default function MaterialsPage() {
  const [cart, setCart] = useState<Material[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const showTemporaryAlert = () => {
    setShowAlert(true);
    setIsExiting(false);
    setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 500); // Tempo igual à duração da animação de saída
    }, 2000); // Alerta visível por 2 segundos
  };

  const addToCart = (material: Material) => {
    if (!cart.find((item) => item.id === material.id)) {
      setCart([...cart, material]);
      showTemporaryAlert(); // Mostra o alerta
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const generateWhatsAppMessage = () => {
    if (cart.length === 0) return "";
    return cart
      .map((item) => `*${item.title}*\nDescrição: ${item.description}`)
      .join("\n\n");
  };

  const sendToWhatsApp = () => {
    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/48998442768?text=${encodeURIComponent(
      `Olá, gostaria de um orçamento para as seguintes pedras:\n\n${message}`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 150; // Ajuste de deslocamento acima do elemento
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  return (
    <div className="relative flex flex-col min-h-screen">
      {showAlert && (
        <div
          className={`fixed top-[140px] left-0 z-50 bg-gray-800 border-gray-500 border-l-8 shadow-lg text-white px-4 py-2 ${
            isExiting ? "animate-slide-out" : "animate-slide-in"
          }`}
        >
          Material adicionado ao carrinho!
        </div>
      )}

      {/* Subnavbar */}
      <nav className="hidden lg:grid w-full pt-[160px] bg-gray-100 shadow-md py-4">
        <ul className="flex justify-around px-[10px] xl:px-[10%] mr-[350px] space-x-6">
          {["Granito", "Quartzo", "Quartzito", "Mármore"].map((category) => (
            <li key={category}>
              <a
                href={`#${category}`}
                onClick={(e) => handleSmoothScroll(e, category)}
                className="text-white bg-gray-800 px-10 py-2 rounded-full font-medium hover:text-gray-300 transition-colors"
              >
                {category}s
              </a>
            </li>
          ))}
        </ul>
      </nav>
  
      <div className="flex-1 pt-[160px] lg:pt-[20px] md:mr-[350px] bg-gray-50">
        <div className="p-2 sm:p-6">
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[400px] overflow-hidden">
          <img src="img/ban6.jpg" alt="Materiais Exclusivos" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-12 lg:px-20 text-white">
            <h1 className="text-2xl md:text-4xl font-extrabold text-left mb-4">
              Descubra Alguns dos Nossos Materiais Exclusivos
            </h1>
            <p className="text-left text-md lg:text-lg max-w-3xl">
              Escolha suas pedras favoritas e adicione ao carrinho. Depois, vá até o carrinho e clique em <b>Enviar para WhatsApp</b> para solicitar seu orçamento!
            </p>
          </div>
        </div>

  
          {/* Renderização por categorias */}
          {["Granito", "Quartzo", "Quartzito", "Mármore"].map((category) => (
          <section key={category} id={category} className="mb-12">
            <h2 className="text-3xl font-bold text-center border-b-[4px] w-[50%] lg:w-[30%] pb-4 border-gray-800 mx-auto text-gray-800 mt-20 mb-20">
              {category}s
            </h2>
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-8">
              {materials
                .filter((material) => material.category === category)
                .map((material) => (
                  <div key={material.id} className="flex flex-col justify-between overflow-hidden transition-transform h-full">
                    <div className="w-full h-[180px] sm:h-56 md:h-[200px] lg:w-full lg:aspect-square relative group">
                      <Image
                        src={material.imageUrl}
                        alt={material.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="py-4 sm:p-4 md:p-0 md:py-4 flex-grow flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{material.title}</h3>
                        <p className="text-gray-500 text-sm mt-2">{material.description}</p>
                      </div>
                      <button
                        onClick={() => addToCart(material)}
                        className="w-full bg-gray-800 hover:bg-gray-900 text-white text-lg font-medium mt-4 py-2 rounded-md flex items-center justify-center transition-colors"
                      >
                        <AiOutlineShoppingCart className="mr-2" />
                        <span className="hidden sm:flex md:hidden lg:flex pr-[5px]">Adicionar ao</span>
                        Carrinho
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </section>
          ))}
        </div>
      </div>  
  
      <button
        className="md:hidden fixed bottom-4 border-[2px] border-white right-4 bg-gray-800 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2"
        onClick={() => setIsModalOpen(true)}
      >
        <AiOutlineShoppingCart className="text-2xl mt-[-2px]" />
        Meu Carrinho
      </button>
  
      <div className="hidden md:flex w-[350px] bg-gray-100 border-l border-gray-300 fixed top-0 right-0 h-full shadow-lg flex-col">
        <h2 className="text-2xl flex font-bold text-gray-800 mb-4 px-4 mt-[150px]">
          <AiOutlineShoppingCart className="mr-2 mt-[3px]" /> Carrinho de Materiais
        </h2>
        <div className="flex-1 overflow-y-auto px-4">
          {cart.length === 0 ? (
            <p className="text-gray-500">Seu carrinho está vazio.</p>
          ) : (
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item.id} className="bg-white p-3 rounded shadow flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:text-red-800">
                    <AiOutlineDelete className="text-2xl" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        {cart.length > 0 && (
          <button
            onClick={sendToWhatsApp}
            className="m-5 bg-green-500 hover:bg-green-600 text-white text-lg font-medium py-3 rounded-md flex items-center justify-center transition-colors px-4"
          >
            Enviar para WhatsApp
          </button>
        )}
      </div>
  
      {isModalOpen && (
        <div className="fixed pt-[145px] inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white w-full h-full p-6 relative overflow-y-auto">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-4xl">
              &times;
            </button>
            <h2 className="text-2xl flex font-bold text-gray-800 mb-4">
              <AiOutlineShoppingCart className="mr-2 mt-[3px]" /> Carrinho de Materiais
            </h2>
            <div className="flex-1 overflow-y-auto">
              {cart.length === 0 ? (
                <p className="text-gray-500">Seu carrinho está vazio.</p>
              ) : (
                <ul className="space-y-4">
                  {cart.map((item) => (
                    <li key={item.id} className="bg-white p-3 rounded shadow flex justify-between items-center">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                      </div>
                      <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:text-red-800">
                        <AiOutlineDelete className="text-2xl" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {cart.length > 0 && (
              <button
                onClick={sendToWhatsApp}
                className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white text-lg font-medium py-3 rounded-md flex items-center justify-center transition-colors"
              >
                Enviar para WhatsApp
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}