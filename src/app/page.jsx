'use client'
import { collection, getDocs } from "firebase/firestore";
import Papa from "./components/Papa";
import useChronoFetching from "./hooks/useChronoFetching";
import { useState, useEffect } from "react";
import { db } from "./firebase/config";
export default function Home() {
  const [data, setData] = useState(null);
useChronoFetching()
useEffect(() => {
   const fetch = async () => {
     const colRef = collection(db, 'alquileres'); // Reemplaza 'nombreDeTuColeccion' con el nombre real de tu colección
     const snapshot = await getDocs(colRef);
     const data = snapshot.docs.map(doc => doc.data());
     setData(data);
     return data;
   
   }

   fetch()
 }, [])


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
    <>
      {/* <Hero /> */}
      {data && data.map((e,i) => {
        return (
          <div key={i}>
            {e.title}
          </div>
        )
      })}
    </>
  );
}

/*    */
