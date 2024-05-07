'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "./db/client";
import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://scrapp-delta.vercel.app/armando');
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error('Error al fetchear el endpoint:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData(){
      const asd = await client.execute("SELECT * FROM Alquiler");
      console.log(asd);
    }
    fetchData();
  }, [])

  return (
    <div className="">
      {data && data.map((e, i) => {
        return (
          <div className="h-[30rem] w-72 rounded-lg p-2 flex flex-col justify-evenly border" key={i}>
            <div className="w-full h-48 border rounded-lg overflow-hidden">
              <Image src={e.imgUrl} alt={e.title} width={272} height={112}/>
            </div>
              <h2 className="w-fullfont-semibold">{e.title}</h2>
            <div className="flex items-center">
            <p className="text-gray-500">{e.location}</p>
              <h3 className=" text-xl font-semibold">{e.price}</h3>
            </div>
            <p>{e.company}</p>
            <a className="bg-[#141414] text-white hover:bg-[#303030] p-1 rounded-md w-full cursor-pointer text-center" target="__BLANK" onClick={() => window.open(e.url)}>Ver link</a>
          </div>
        )
      })}
    </div>
  );
}
