import Link from "next/link";
import { MdArrowForwardIos, MdOutlineCheck } from "react-icons/md";

interface CardsPlansProps {
  title: string;
  valuePlan: string;
  list: string[];
  cta: string;
}

export function CardsPlans({ title, valuePlan, list, cta }: CardsPlansProps) {
  return (
    <div className="bg-white w-full rounded-xl flex flex-col justify-between">
      <div>
        <div className="bg-primary-black-light flex flex-col items-center justify-center py-10 rounded-t-xl">
          <span className="bg-primary-red px-5 py-1.5 text-2xl text-white font-bold rounded-xl">
            {title}
          </span>

          <div className="flex items-center justify-center text-white font-bold gap-1">
            <div className="text-5xl">R$</div>
            <div className="text-[84px]">{valuePlan}</div>
            <div className="text-5xl">,90</div>
          </div>
        </div>

        <ul className="px-8 mt-6 mb-10">
          <li className="flex flex-col md:items-center lg:items-start justify-center gap-2">
            {list.map((item, idx) => (
              <span
                key={idx}
                className="text-[18px] text-primary-gray flex items-center justify-center gap-2 py-2.5"
              >
                <MdOutlineCheck className="text-[18px]" />
                {item}
              </span>
            ))}
          </li>
        </ul>
      </div>

      <Link
        href={"https://wa.me/+5584996907031"}
        className="bg-green-500 text-white text-xl flex items-center justify-center w-fit px-10 py-4 rounded-full mx-auto mb-10 hover:bg-green-700 cursor-pointer"
      >
        {cta}
        <MdArrowForwardIos size={24} />
      </Link>
    </div>
  );
}
