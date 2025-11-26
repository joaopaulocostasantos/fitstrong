import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

export function ButtonCta() {
  return (
    <Link
      href={"#plans-section"}
      className="flex items-center justify-center gap-4 text-white text-xl bg-primary-red hover:bg-red-800 hover:bg-primary-gray rounded-[90px] w-[250px] md:w-[400px] lg:w-[300px] h-[60px] cursor-pointer scroll-smooth"
    >
      Ver Planos
      <MdArrowForwardIos width={24} />
    </Link>
  );
}
