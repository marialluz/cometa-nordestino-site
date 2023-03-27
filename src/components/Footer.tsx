import Image from "next/image";

function Footer() {
  return (
    <header className="bg-white shadow-lg shadow-[#4c90bd]">
      <div className="flex mx-auto px-4 items-center justify-center gap-20">
        <Image
          src="/images/ufrn-logo.png"
          alt="Logo Ufrn"
          height={65}
          width={130}
          quality={100}
          priority
          unoptimized
        />
        <Image
          width={180}
          height={90}
          src="/images/logo-ifba.png"
          alt="Logo Ifba"
          quality={100}
          priority
          unoptimized
        />
        <Image
          width={50}
          height={50}
          src="/images/logo-uefs.png"
          alt="Logo Uefs"
          quality={100}
          priority
          unoptimized
        />
        <Image
          width={100}
          height={50}
          src="/images/logo-cnpq.png"
          alt="Logo Cnpq"
          quality={100}
          priority
          unoptimized
        />
        <Image
          width={100}
          height={100}
          src="/images/logo_cometa_nordestino.jpg"
          alt="Logo Cometa Nordestino"
          quality={100}
          priority
          unoptimized
        />
      </div>
    </header>
  );
}

export default Footer;
