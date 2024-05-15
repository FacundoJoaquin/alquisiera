"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/../public/logo.png";
const Navbar = () => {
  const navigateToId = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full flex justify-around items-center text-2xl pt-2 absolute font-semibold sm:w-full xs:w-full">
      <Link href={"https://alquisiera.vercel.app"}>
        <Image
          src={logo}
          className="w-64 xs:w-80"
          alt="Imagen del logo de Alquisiera, pagina que te ayuda a encontrar alquiler barato en Puerto Madryn"
        />
      </Link>
      <ul className="flex ml-10 gap-x-8 xs:hidden">
        <li className="hover:text-mainBlue transition-colors duration-200">
          <button onClick={() => navigateToId("home")}>INICIO</button>
        </li>
        <li className="hover:text-mainBlue transition-colors duration-200">
          <button onClick={() => navigateToId("info")}>INFO</button>
        </li>
        <li className="hover:text-mainBlue transition-colors duration-200">
        <button onClick={() => navigateToId("aboutUs")}>SOBRE NOSOTROS</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
