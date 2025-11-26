import Image, { StaticImageData } from "next/image";

// Icons
import { MdOutlineStarPurple500 } from "react-icons/md";

interface TestimonyProps {
  imgCustomer: StaticImageData | string;
  nameCustomer: string;
  testimonyCustomer: string;
}

export function Testimony({
  imgCustomer,
  nameCustomer,
  testimonyCustomer,
}: TestimonyProps) {
  return (
    <div className="bg-white p-6 w-fit rounded-xl">
      <div className="flex items-start justify-start gap-2.5 border-b border-gray-200 pb-5">
        <Image src={imgCustomer} alt="teste 1" className="h-16 w-16" />
        <div className="flex flex-col flex-start">
          <h4 className="text-primary-gray text-2xl">{nameCustomer}</h4>
          <div className="flex items-center justify-start gap-2">
            <MdOutlineStarPurple500 size={20} className="text-amber-300" />
            <MdOutlineStarPurple500 size={20} className="text-amber-300" />
            <MdOutlineStarPurple500 size={20} className="text-amber-300" />
            <MdOutlineStarPurple500 size={20} className="text-amber-300" />
          </div>
        </div>
      </div>

      <div className="pt-6">
        <p className="text-[16px] text-primary-gray text-justify">
          {testimonyCustomer}
        </p>
      </div>
    </div>
  );
}
