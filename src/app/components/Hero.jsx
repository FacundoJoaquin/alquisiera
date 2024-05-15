import Image from "next/image";
import React from "react";
import whale from "@/../public/whale.png";
const Hero = () => {
  const goToSection = () => {
    const alquileresSection = document.getElementById("alquileres");
    if (alquileresSection) {
      alquileresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex mt-16 xs:mt-28 xs:flex-col xs:justify-around xs:h-dvh">
      <div className="w-1/3 p-4  flex flex-col  justify-center gap-y-4 xs:w-full xs:p-2">
        <h3 className="text-5xl font-semibold xs:text-4xl">
          Encontra tu{" "}
          <span className="text-mainBlue font-bold">próximo hogar</span> acá!
        </h3>
        <p className="text-gray-400 xs:text-lg text-xl">
          Alquileando es una contribución a la comunidad de Puerto Madryn.{" "}
          <br /> En estos tiempos difíciles, encontrar nuestro próximo hogar es
          realmente desafiante. <br /> Espero que ahora sea un poco más fácil.
        </p>
        <button
          onClick={() => {goToSection}}
          className="bg-mainBlue rounded-full w-36 py-2 border text-white hover:bg-strongMainBlue transition-colors duration-300"
        >
          Ver alquileres
        </button>
      </div>

      <div className="w-2/3 p-16 flex justify-center items-center xs:w-full xs:p-2">
        <Image src={whale} alt="whale" />
      </div>
    </div>
  );
};

export default Hero;
