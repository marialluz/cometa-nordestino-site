import Colaboradores from "@/components/Colaboradores";
import CometaNordestino from "@/components/CometaNordestino";
import Contato from "@/components/Contato";
import Experimentos from "@/components/Experimentos";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cometa Nordestino</title>
      </Head>
      <div className="App scroll-smooth">
        <Header />
        <CometaNordestino />
        <Colaboradores />
        <Experimentos />
        <Contato />
        <Footer />
      </div>
    </>
  );
}
