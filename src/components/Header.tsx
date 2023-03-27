import Image from "next/image";

function Header() {
  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="flex mx-auto px-4 sm:px-6 lg:px-8 items-center justify-between">
        <Image
          width={80}
          height={80}
          src="/images/logo_cometa_nordestino.jpg"
          alt="Logo Cometa Nordestino"
          quality={100}
          priority
          unoptimized
        />
        <div className="flex gap-10 pr-24 text-[#4c90bd] font-semibold">
          <a className="hover:bg-[#4c90bd] hover:text-white rounded-lg py-1 px-2" href="#home">Cometa Nordestino</a>
          <a className="hover:bg-[#4c90bd] hover:text-white rounded-lg py-1 px-2" href="#colaboradores">Colaboradores</a>
          <a className="hover:bg-[#4c90bd] hover:text-white rounded-lg py-1 px-2" href="#experimentos">Experimentos</a>
          <a className="hover:bg-[#4c90bd] hover:text-white rounded-lg py-1 px-2" href="#contato">Fale conosco</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
