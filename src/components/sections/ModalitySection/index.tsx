"use client";
import { useState } from "react";

// components
import { Container } from "@/components/Container";
import { CardModality } from "@/components/ui/CardModality";

// icons
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

// images

const cards = [
  {
    img: "/img-card-01.png",
    alt: "Homem treinando",
    title: "Treino de Força",
    desc: "Área completa com equipamentos para desenvolvimento muscular. Treinos adaptados ao seu nível e objetivos.",
  },
  {
    img: "/img-card-02.png",
    alt: "Mulhern treinando",
    title: "Treino Funcional",
    desc: "Exercícios dinâmicos em grupo que trabalham todo o corpo. Alta intensidade e resultados acelerados.",
  },
  {
    img: "/img-card-03.png",
    alt: "Mulher no treino alongamento",
    title: "Treino Alongamento",
    desc: "Práticas orientais e técnicas modernas para equilíbrio físico e mental. Aulas para iniciantes e avançados.",
  },
  {
    img: "/img-card-04.png",
    alt: "Artes Marciais",
    title: "Artes Marciais",
    desc: "Defesa pessoal, disciplina e condicionamento físico. Modalidades variadas com professores experientes.",
  },
  {
    img: "/img-card-05.png",
    alt: "Cycling Indoor",
    title: "Cycling Indoor",
    desc: "Pedale com energia em aulas coletivas com trilha sonora exclusiva e atmosfera imersiva.",
  },
  {
    img: "/img-card-06.png",
    alt: "Hidroginástica",
    title: "Hidroginástica",
    desc: "Piscina aquecida com aulas de baixo impacto. Ideal para todas as idades e condicionamento.",
  },
];

export function ModalitySection() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % cards.length);

    console.log("next");
  };

  const prev = () => {
    setCurrent((prev) => (prev === 0 ? cards.length - 1 : prev - 1));

    console.log("prev");
  };

  return (
    <Container>
      <section className="pt-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center w-full md:max-w-[385px] lg:max-w-[823px]">
            <div className="md:border-r border-primary-red">
              <h2 className="text-white text-2xl text-center mb-2.5 md:mb-0 md:text-start md:text-4xl/tight w-full">
                Descubra a Atividade{" "}
                <span className="text-primary-red">Perfeita Para Você</span>
              </h2>
            </div>
            <p className="text-white text-xl ps-5 hidden md:hidden lg:block">
              Explore todas as modalidades disponíveis e leve seu treino ao
              próximo nível.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              className="bg-primary-red p-3 rounded-full cursor-pointer hover:bg-red-800"
              onClick={prev}
            >
              <MdArrowBackIosNew size={24} className="text-white" />
            </button>
            <button
              className="bg-primary-red p-3 rounded-full cursor-pointer hover:bg-red-800"
              onClick={next}
            >
              <MdArrowForwardIos size={24} className="text-white" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 relative w-full overflow-hidden mx-auto mt-14">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {cards.map((card, idx) => (
              <div key={idx} className="min-w-full px-3">
                <CardModality
                  img={card.img}
                  alt={card.alt}
                  title={card.title}
                  desc={card.desc}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Indicators */}
        <div className="flex items-center justify-center gap-2.5 mt-6">
          {cards.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setCurrent(idx)}
              className={`rounded-full transition-all duration-200 focus:outline-none ${
                idx === current
                  ? "w-3 h-3 bg-primary-red"
                  : "w-2.5 h-2.5 bg-white/30"
              }`}
            />
          ))}
        </div>
      </section>
    </Container>
  );
}
