import React from "react";

import Image from "next/image";

const Contato: React.FC = () => {
  return (
    <div
      className="bg-[#d4920a] flex flex-col items-center p-16"
      id="contato"
    >
      <h1 className="text-[#2972a3] font-semibold text-2xl">
        Entre em contato conosco!
      </h1>
      <h1 className="text-white">
        Para tirar alguma dúvida ou apenas conversar, nos procure na rede abaixo
        que preferir.
      </h1>
      <div className="flex gap-10 items-center pt-4">
        <a href="mailto:madulima06@hotmail.com">
          <Image
            src="/images/gmail.png"
            alt="Logo do Gmail"
            height={64}
            width={64}
          />
        </a>
        <a href="https://www.instagram.com/cometanordestino/" target="_blank">
          <Image
            src="/images/instagram.png"
            alt="Logo do Instagram"
            height={56}
            width={56}
          />
        </a>
      </div>
    </div>
  );
};

export default Contato;
