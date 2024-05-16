"use client";
import AboutUs from "./components/AboutUs";
import Alquileres from "./components/Alquileres";
import FAQS from "./components/FAQS";
import Hero from "./components/Hero";
import Separation from "./ui/Separation";

export default function Home() {
  return (
    <main className="flex flex-col px-16 xs:px-6">
      <div className="flex flex-col ">
        <Hero />
      </div>
      <Separation title={"INFO"} id={"info"} />
      <FAQS />

      <Separation title={"LOS ALQUILERES DE HOY"} id={"alquileres"} />
      <Alquileres />

      <Separation title={"SOBRE NOSOTROS"} id={"aboutUs"} />
      <AboutUs />
    </main>
  );
}
