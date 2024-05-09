import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";

const useChronoFetching = () => {
  const [fetchedTonightArmando, setFetchedTonightArmando] = useState(false);
  const [fetchedTonightArnoldi, setFetchedTonightArnoldi] = useState(false);
  const [fetchedTonightBounos, setFetchedTonightBounos] = useState(false);
  const [fetchedTonightMallemacci, setFetchedTonightMallemacci] = useState(false);
  const [fetchedTonightSalcovsky, setFetchedTonightSalcovsky] = useState(false);
  const [fetchedTonightSurwal, setFetchedTonightSurwal] = useState(false);
  const [fetchedTonightZZ, setFetchedTonightZZ] = useState(false);

  const [data, setData] = useState([]);
 

  useEffect(() => {
    const interval = setInterval(async () => {
      const now = new Date();
      const hour = now.getHours();

      await executeDataFetch(14, 15, "armando", fetchedTonightArmando, setFetchedTonightArmando);
      await executeDataFetch(14, 15, "arnoldi", fetchedTonightArnoldi, setFetchedTonightArnoldi);
      await executeDataFetch(14, 15, "bounos", fetchedTonightBounos, setFetchedTonightBounos);
      await executeDataFetch(14, 15, "mallemacci", fetchedTonightMallemacci, setFetchedTonightMallemacci);
      await executeDataFetch(14, 15, "salcovsky", fetchedTonightSalcovsky, setFetchedTonightSalcovsky);
      await executeDataFetch(14, 15, "surwal", fetchedTonightSurwal, setFetchedTonightSurwal);
      await executeDataFetch(14, 15, "zz", fetchedTonightZZ, setFetchedTonightZZ);


      if (hour === 6) {
        setFetchedTonightArmando(false)
        setFetchedTonightArnoldi(false)
        setFetchedTonightBounos(false)
        setFetchedTonightMallemacci(false)
        setFetchedTonightSalcovsky(false)
        setFetchedTonightSurwal(false)
        setFetchedTonightZZ(false)
      }
    }, 10 * 1000); // CADA 25 MINUTOS PARA QUE TENGA 2 TRY

    return () => clearInterval(interval);
  }, [fetchedTonightArmando,
    fetchedTonightArnoldi,
    fetchedTonightBounos,
    fetchedTonightMallemacci,
    fetchedTonightSalcovsky,
    fetchedTonightSurwal,
    fetchedTonightZZ]);

  const fetchData = async (endpoint) => {
    try {
      const response = await fetch(`https://scrapp-delta.vercel.app/${endpoint}`);
      if (!response.ok) {
        throw new Error("Error al obtener los datos");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al fetchear el endpoint:", error);
    }
  };


  const writeFirebase = async (data) => {
    const createdAt = serverTimestamp(); 
    const promises = data.map(async (item) => { 
      return addDoc(collection(db, "alquileres"), {
        ...item, 
        timeStamp: createdAt
      });
    });

    try {
      await Promise.all(promises); 
      console.log("Todos los documentos se han agregado correctamente");
    } catch (error) {
      console.error("Error al agregar documentos:", error);
    }
  }

  const executeDataFetch = async (startHour, endHour, endpoint, isFetched, setFetched) => {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= startHour && hour < endHour && !isFetched) {
      console.log(`ejecutando ${endpoint}`);
      const data = await fetchData(endpoint);
      if (data) {
        await writeFirebase(data);
        setFetched(true); 
      }
    }
  };

  return null; 
};

export default useChronoFetching;
