// compenents
import { Container } from "@/components/Container";
import { CardsPlans } from "@/components/ui/CardsPlans";

// List Essencial
const listEssencial = [
  "Acesso à área de musculação",
  "1 modalidade coletiva incluída",
  "Aplicativo completo",
  "Avaliação física de entrada",
];

// List Total
const listTotal = [
  "Tudo do plano Essencial",
  "Todas as modalidades liberadas",
  "Planejamento individualizado",
  "Orientação nutricional básica",
  "2 sessões bônus com personal",
];

// List Elite
const listElite = [
  "Tudo do plano Total",
  "8 sessões com personal trainer",
  "Acompanhamento nutricional completo",
  "Acesso às áreas premium",
  "Kit mensal de produtos",
];

export function PlansSection() {
  return (
    <section className="mt-24" id="plans-section">
      <Container>
        <div className="flex flex-col items-center justify-center gap-2.5">
          <h3 className="text-2xl md:text-4xl text-white font-bold">
            Escolha Seu <span className="text-primary-red">Plano Ideal</span>
          </h3>
          <p className="text-white text-xl text-center">
            Experimente 7 dias sem pagar nada. Cancele a qualquer momento.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 mt-14">
          <CardsPlans
            title="Essencial"
            valuePlan="89"
            list={listEssencial}
            cta="Escolher Essencial"
          />
          <CardsPlans
            title="Total"
            valuePlan="129"
            list={listTotal}
            cta="Escolher Total"
          />
          <CardsPlans
            title="Elite"
            valuePlan="199"
            list={listElite}
            cta="Escolher Elite"
          />
        </div>
      </Container>
    </section>
  );
}
