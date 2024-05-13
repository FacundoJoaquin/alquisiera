'use client'
import { collection, getDocs } from "firebase/firestore";
import Papa from "./components/Papa";
import useChronoFetching from "./hooks/useChronoFetching";
import { useState, useEffect } from "react";
import { db } from "./firebase/config";
import whale from '@/../public/whale.png'
import Image from 'next/image'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Alquileres from "./components/Alquileres";
import Separation from "./ui/Separation";


export default function Home() {


  /*   const [data, setData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("https://scrapp-delta.vercel.app/armando");
          if (!response.ok) {
            throw new Error("Error al obtener los datos");
          }
          const responseData = await response.json();
          setData(responseData);
        } catch (error) {
          console.error("Error al fetchear el endpoint:", error);
        }
      };
  
      fetchData();
    }, []);
  
    useEffect(() => {
      async function fetchData() {
        const asd = await client.execute("SELECT * FROM Alquiler");
        console.log(asd);
      }
      fetchData();
    }, []);
   */
  return (
    <main className="flex flex-col px-16">
      <div className="h-dvh flex flex-col">
        <Navbar />
        <Hero />
      </div>
      <Separation />
      <Alquileres />
    </main>
  );

}

