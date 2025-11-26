import { Container } from "@/components/Container";
import { Testimony } from "@/components/ui/Testimony";

import imgCustomer01 from "../../../../public/img-testimony-01.png";
import imgCustomer02 from "../../../../public/img-testimony-02.png";
import imgCustomer03 from "../../../../public/img-testimony-03.png";

export function TestimonialsSection() {
  return (
    <section className="mt-24">
      <Container>
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center w-full max-w-[600px] mx-auto">
          Experiências Reais Que{" "}
          <span className="text-primary-red">Impulsionam Resultados</span>
        </h2>

        <div className="w-full mx-auto grid lg:grid-cols-3 gap-6 mt-14">
          <Testimony
            imgCustomer={imgCustomer01}
            nameCustomer="Ricardo Nascimento"
            testimonyCustomer="Depois de experimentar várias academias, sempre com aquela sensação de que era só mais um número, finalmente encontrei um lugar onde recebo atenção de verdade. Os treinos são personalizados no app, os professores são atentos e a vibe é transparente: foco em resultado, sem pressão tóxica. Meu condicionamento mudou tanto que até meus amigos perguntam o que eu fiz."
          />
          <Testimony
            imgCustomer={imgCustomer02}
            nameCustomer="Letícia Farias"
            testimonyCustomer="O aplicativo facilitou meu planejamento de um jeito absurdo. Sei exatamente o que devo treinar, acompanho minha performance e ainda consigo encaixar as aulas coletivas na minha rotina sem stress. As aulas de funcional são as minhas favoritas — intensas, dinâmicas e sempre com aquela energia que faz você sair sorrindo. Hoje treino por prazer, não por obrigação."
          />
          <Testimony
            imgCustomer={imgCustomer03}
            nameCustomer="Mariana Duarte"
            testimonyCustomer="Entrei achando que ia ser só mais uma tentativa de treinar, mas foi completamente diferente. A equipe me acompanhou desde o primeiro dia, ajustou meu ritmo, corrigiu minha postura e me deu confiança para evoluir sem ansiedade. Hoje já somo quase 1 ano de constância — algo impensável pra mim antes. Me sinto mais forte, mais leve e, principalmente, mais orgulhosa do que construí."
          />
        </div>
      </Container>
    </section>
  );
}
