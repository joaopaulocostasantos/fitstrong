import Image from "next/image";

// Assets
import logoImg from "../../../../public/logo.svg";
import heroImg from "../../../../public/img-hero.png";
import studentsImg from "../../../../public/satisfied-students.png";

// Components
import { ButtonCta } from "../../ui/ButtonCta";
import { Container } from "../../Container";

export function HeroSection() {
  return (
    <section className="bg-[url('/bg-hero.png')] bg-cover bg-center bg-no-repeat w-full flex flex-col items-center justify-center pt-16 md:pt-24 border-b-primary-red border-b-70 overflow-hidden">
      <Container className="flex flex-col md:flex-col lg:flex-row items-center justify-between">
        <div className="w-full md:w-full lg:w-1/2 space-y-6 mb-10">
          <Image
            src={logoImg}
            alt="FitStrong"
            className="w-[220px] md:w-[333px] mx-auto md:mx-auto lg:mx-0"
          />

          <h1 className="text-2xl md:text-base/tight font-bold text-white text-center md:text-center lg:text-start">
            Transforme Seu Corpo, Supere Seus Limites e{" "}
            <span className="text-primary-red">
              Conquiste Sua Melhor Versão
            </span>
          </h1>

          <p className="text-primary-gray text-lg leading-base text-center md:text-center lg:text-start">
            Equipamentos modernos, equipe especializada e ambiente acolhedor.
            Alcance seus objetivos com quem entende de transformação real.
          </p>
          <div className="flex items-center justify-center md:justify-center lg:justify-start">
            <ButtonCta />
          </div>

          <div className="flex items-center justify-center md:justify-center lg:justify-start gap-2.5">
            <Image
              src={studentsImg}
              alt="Alunos satisfeitos"
              className="w-full max-w-10 md:max-w-[73px]"
            />
            <p className="text-white text-sm md:text-xl">
              <span className="font-black text-primary-red">+3.200</span> alunos
              transformados
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <Image src={heroImg} alt="Pessoa malhando na academia" />
        </div>
      </Container>
    </section>
  );
}
