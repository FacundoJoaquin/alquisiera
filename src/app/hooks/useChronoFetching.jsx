import { addDoc, collection, deleteDoc, getDocs, serverTimestamp } from "firebase/firestore";
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
      const wakeServer = async () => {
        try {
          const response = await fetch('https://cron-scrapper.onrender.com/wakeUp');
          if (!response.ok) {
            throw new Error("Error al obtener los datos");
          }
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error("Error al fetchear el endpoint:", error);
        }
      };
  
      wakeServer();
    }, 14 * 60 * 1000); // CADA 14 MINUTOS
  
    return () => clearInterval(interval);
  }, []);

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

  const clearFirebaseCollection = async () => {
    const collectionRef = collection(db, "alquileres");
    const querySnapshot = await getDocs(collectionRef);

    querySnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });

    console.log("Colección 'alquileres' eliminada correctamente");
  };


  return null;
};

export default useChronoFetching;
