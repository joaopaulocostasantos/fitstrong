import Image, { StaticImageData } from "next/image";

interface CardModalityProps {
  img: StaticImageData | string;
  alt: string;
  title: string;
  desc: string;
}

export function CardModality({ img, alt, title, desc }: CardModalityProps) {
  return (
    <div className="bg-background-brand-light flex flex-col rounded-lg overflow-hidden">
      <div className="w-full relative h-[200px]">
        <Image src={img} alt={alt} fill className="object-cover" />
      </div>
      <div className="py-14 px-8 gap-2.5">
        <h3 className="text-primary-red md:text-4xl lg:text-2xl font-bold text-center md:mb-2.5">
          {title}
        </h3>
        <p className="text-white md:text-xl lg:text-sm text-center">{desc}</p>
      </div>

      <div>
        <span className="bg-primary-red rounded-full w-2.5 h-2.5"></span>
      </div>
    </div>
  );
}
