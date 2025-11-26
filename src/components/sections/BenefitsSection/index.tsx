// components
import { Container } from "@/components/Container";
import { CardBenefit } from "@/components/ui/CardBenefit";

// Icons
import { FaWeightHanging, FaUserAlt, FaTabletAlt } from "react-icons/fa";

export function BenefitsSection() {
  return (
    <section>
      <Container>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-y-6 md:gap-y-6 lg:gap-x-6 mt-24">
          <CardBenefit
            icon={<FaWeightHanging />}
            title="Estrutura Completa"
            description="Espaços amplos para treino livre, área funcional equipada e estúdios climatizados para todas as modalidades."
          />
          <CardBenefit
            icon={<FaUserAlt />}
            title="Equipe Profissional"
            description="Profissionais qualificados que criam estratégias sob medida e acompanham cada passo da sua evolução."
          />
          <CardBenefit
            icon={<FaTabletAlt />}
            title="Tecnologia Integrada"
            description="Aplicativo próprio para agendar treinos, registrar progressos e manter sua rotina organizada."
          />
        </div>
      </Container>
    </section>
  );
}
