import { Container } from "@/components/Container";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";

import imgCta from "../../../../public/cta-img.png";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="mt-24">
      <Container>
        <div className="bg-primary-black-light rounded-xl flex items-center justify-center px-4 py-10 md:px-4 lg:px-24 md:py-10 lg:py-0">
          <div>
            <h4 className="text-white text-xl text-center md:text-4xl md:text-center lg:text-start mb-2.5">
              Sua Transformação Está a Um{" "}
              <span className="font-bold">Clique de Distância</span>
            </h4>
            <p className="text-white text-[12px] md:text-xl/normal md:text-center lg:text-start mb-8">
              Pare de adiar e comece hoje mesmo. Teste por 7 dias completamente
              grátis e descubra do que você é capaz.
            </p>
            <div className="flex items-center justify-center md:justify-center lg:justify-start">
              <Link
                href={"https://wa.me/+5584996907031"}
                className="w-fit bg-green-500 hover:bg-green-700 text-white font-bold rounded-full text-[12px] md:text-xl flex items-center justify-center py-2.5 px-8 gap-2.5 cursor-pointer"
              >
                Iniciar Teste Gratuito Agora
                <MdArrowForwardIos size={24} className="text-white" />
              </Link>
            </div>
          </div>

          <div>
            <Image
              src={imgCta}
              alt=""
              className="h-auto max-w-[300px] h-[350px] hidden md:hidden lg:block"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
