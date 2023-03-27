import Image from "next/image";
import React from "react";

const Experimentos: React.FC = () => {
  return (
    <div
      className="bg-[#4c90bd] bg-opacity-80 flex flex-col items-center p-28"
      id="experimentos"
    >
      <h1 className="text-[#2972a3] font-semibold text-2xl">Experimentos</h1>
      <h1 className="text-white">Navegue pelos nossos experimentos!</h1>

      <div className="grid grid-cols-3 gap-10 p-4">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Image
            src="/images/polarizacaoLuz.jpg"
            alt="Polarização da Luz"
            height={144}
            width={288}
          />
          <div className="p-1 bg-[#d4920a]">
            <div className="font-semibold text-center text-white mb-2">
              Polarização da Luz
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Image
            src="/images/polarizacaoLuz.jpg"
            alt="Polarização da Luz"
            height={144}
            width={288}
          />

          <div className="p-1 bg-[#d4920a]">
            <div className="font-semibold text-center text-white mb-2">
              Polarização da Luz
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Image
            src="/images/polarizacaoLuz.jpg"
            alt="Polarização da Luz"
            height={144}
            width={288}
          />

          <div className="p-1 bg-[#d4920a]">
            <div className="font-semibold text-center text-white mb-2">
              Polarização da Luz
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Image
            src="/images/polarizacaoLuz.jpg"
            alt="Polarização da Luz"
            height={144}
            width={288}
          />

          <div className="p-1 bg-[#d4920a]">
            <div className="font-semibold text-center text-white mb-2">
              Polarização da Luz
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Image
            src="/images/polarizacaoLuz.jpg"
            alt="Polarização da Luz"
            height={144}
            width={288}
          />

          <div className="p-1 bg-[#d4920a]">
            <div className="font-semibold text-center text-white mb-2">
              Polarização da Luz
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Image
            src="/images/polarizacaoLuz.jpg"
            alt="Polarização da Luz"
            height={144}
            width={288}
          />

          <div className="p-1 bg-[#d4920a]">
            <div className="font-semibold text-center text-white mb-2">
              Polarização da Luz
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experimentos;
