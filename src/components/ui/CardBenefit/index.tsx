interface CardBenefitProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function CardBenefit({ icon, title, description }: CardBenefitProps) {
  return (
    <div className="flex flex-col items-center justify-center bg-primary-black-light rounded-lg md:w-full lg:w-[357px] h-[300px] lg:space-x-2.5">
      <div className="bg-primary-red text-white text-xl rounded-full w-fit p-6 mb-2.5">
        {icon}
      </div>
      <h2 className="text-2xl md:text-4xl lg:text-2xl text-center text-primary-red font-bold mb-2.5">
        {title}
      </h2>
      <p className="text-white text-sm md:text-xl lg:text-sm text-center w-full max-w-[289px] md:max-w-[550px] lg:max-w-[289px]">
        {description}
      </p>
    </div>
  );
}
