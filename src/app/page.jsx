"use client";
import AboutUs from "./components/FAQS";
import Alquileres from "./components/Alquileres";
import Hero from "./components/Hero";

import Separation from "./ui/Separation";

export default function Home() {
  return (
    <main className="flex flex-col px-16 xs:px-6">
      <div className="h-dvh flex flex-col">
        <Hero />
      </div>
      <Separation title={"INFO"} id={"info"} />
      <AboutUs />

      <Separation title={"LOS ALQUILERES DE HOY"} id={"alquileres"} />
      <Alquileres />

      <Separation title={"SOBRE NOSOTROS"} id={"aboutUs"} />
      <div className="h-96 overflow-hidden w-full">
        <div className="w-1/3 flex flex-col gap-y-2">
          <h3 className="text-3xl text-strongMainBlue font-semibold">
            ¿Quienes somos?
          </h3>
          <p className="text-xl">
            Somos Facu e Indi, una pareja que intentamos mezclar nuestras
            pasiones y terminamos acá, con la intención de ayudar a alguien a
            encontrar su próximo hogar.
          </p>
          <p className="text-xl">
            Cada detalle fue realizado con amor y esfuerzo, con la esperanza de
            que esta plataforma sea de utilidad para todos aquellos que buscan
            una casita donde vivir.
          </p>
        </div>
      </div>
    </main>
  );
}
