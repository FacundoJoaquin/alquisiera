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
      const now = new Date();
      const hour = now.getHours();

      console.log('La hora es: ', hour)
      await executeDataFetch(9, 10, "armando", fetchedTonightArmando, setFetchedTonightArmando);
      await executeDataFetch(9, 10, "arnoldi", fetchedTonightArnoldi, setFetchedTonightArnoldi);
      await executeDataFetch(9, 10, "bounos", fetchedTonightBounos, setFetchedTonightBounos);
      await executeDataFetch(9, 10, "mallemacci", fetchedTonightMallemacci, setFetchedTonightMallemacci);
      await executeDataFetch(9, 10, "salcovsky", fetchedTonightSalcovsky, setFetchedTonightSalcovsky);
      await executeDataFetch(9, 10, "surwal", fetchedTonightSurwal, setFetchedTonightSurwal);
      await executeDataFetch(9, 10, "zz", fetchedTonightZZ, setFetchedTonightZZ);


      if (hour === 8) {
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
