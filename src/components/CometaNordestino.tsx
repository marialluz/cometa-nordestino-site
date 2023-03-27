import Image from "next/image";
import React from "react";
import LogoCometaNordestino from "../images/logo_cometa_nordestino.jpg";

const CometaNordestino: React.FC = () => {
  return (
    <div
      className="bg-[#4c90bd] bg-opacity-80 flex flex-col items-center p-28 bg-wave bg-no-repeat bg-bottom pb-48"
      id="home"
    >
      <h1 className="text-[#2972a3] font-semibold text-3xl">
        Da academia às escolas:
      </h1>
      <h1 className="text-white font-semibold text-lg">Conheça o cometa nordestino!</h1>

      <div className="p-6 flex items-center gap-20">
        <Image
          width={250}
          height={250}
          src="/images/logo_cometa_nordestino.jpg"
          alt="Logo Cometa Nordestino"
          className="rounded-full"
          quality={100}
          priority
          unoptimized
        />
        <div className="w-96 text-justify text-white">
          <p className="indent-8">
            Motivado pela necessidade de popularizar o conhecimento científico,
            o Cometa Nordestino reúne três instituições nordestinas com o
            propósito de levar às escolas do Rio Grande do Norte e da Bahia
            ações direcionadas ao aprendizado em Astronomia e Astronáutica.
          </p>
          <p className="indent-8">
            Para além de resultados imediatos, a expectativa é ampliar o acesso
            ao conhecimento científico e superar problemáticas reais ligadas ao
            campo da Ciência e Tecnologia. Afinal, tão importante quanto a
            produção de conhecimento é a divulgação dos seus resultados e
            avanços.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CometaNordestino;
