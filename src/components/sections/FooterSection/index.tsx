import { Container } from "@/components/Container";
import Image from "next/image";

import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

import logo from "../../../../public/logo.svg";

export function FooterSection() {
  return (
    <footer className="bg-primary-black-light border-t border-primary-red mt-24">
      <Container>
        <div className="flex flex-col items-center justify-between py-10">
          <div className="flex items-start mb-14">
            <div className="flex flex-col items-start md:justify-start gap-2 lg:border-r-2 lg:border-primary-gray w-full lg:max-w-[262px]">
              <Image
                src={logo}
                alt=""
                className="w-full lg:max-w-[210px] mb-1.5"
              />
              <p className="text-sm text-center md:text-start md:text-xl text-primary-gray mb-5 md:pe-8">
                Transformando corpos e mentes desde 2014
              </p>

              <div className="w-full flex items-center justify-center md:justify-center lg:justify-start gap-2.5">
                <div className="bg-white hover:bg-gray-200 p-2.5 rounded-full cursor-pointer">
                  <FaInstagram size={24} />
                </div>
                <div className="bg-white hover:bg-gray-200 p-2.5 rounded-full cursor-pointer">
                  <FaFacebook size={24} />
                </div>
                <div className="bg-white hover:bg-gray-200 p-2.5 rounded-full cursor-pointer">
                  <FaYoutube size={24} />
                </div>
                <div className="bg-white hover:bg-gray-200 p-2.5 rounded-full cursor-pointer">
                  <FaLinkedin size={24} />
                </div>
              </div>
            </div>

            <div className="flex items-start justify-between gap-6 ps-6 hidden md:hidden lg:flex">
              <div>
                <h5 className="text-white font-bold text-2xl">Endereço:</h5>
                <ul>
                  <li className="text-[16px] text-primary-gray font-medium">
                    Rua das Vascos, 980 - Bairro Novo Santa Cruz, RN - CEP
                    54200-000
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="text-white font-bold text-2xl">Contato:</h5>
                <ul>
                  <li className="text-[16px] text-primary-gray font-medium">
                    (84) 98765-4321
                  </li>
                  <li className="text-[16px] text-primary-gray font-medium">
                    contato@fitstrongperformance.com.br
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-white font-bold text-2xl">
                  Horário de Funcionamento:
                </h5>
                <ul>
                  <li className="text-[16px] text-primary-gray font-medium">
                    Segunda a Sexta: 5h às 23h
                  </li>
                  <li className="text-[16px] text-primary-gray font-medium">
                    Finais de Semana: 7h às 20h
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="w-full flex-col md:flex-col lg:flex-row flex items-center justify-between">
            <p className="text-white text-sm mb-2.5 md:mb-0">
              Copyright - Todos os direitos reservados
            </p>
            <a className="text-white text-sm">Política de Privacidade</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
