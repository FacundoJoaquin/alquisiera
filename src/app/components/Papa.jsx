'use client'

import { collection, getDocs, query } from "firebase/firestore";
import { useEffect } from 'react';
import { db } from "../firebase/config";

const Papa = () => {
    useEffect(() => {
       /*  const fetch = async () => {
          const q = query(
            collection(db, "alquileres"),
          );
          try {
            const querySnapshot = await getDocs(q);
            const controlesArray = [];
            querySnapshot.forEach((doc) => {
              const controlData = doc.data();
              controlesArray.push(controlData);
            });
            console.log(controlesArray)
          } catch (error) {
            console.error("Error al obtener los documentos:", error);
          }
        }; */
        const fetch = async () => {
          const colRef = collection(db, 'alquileres'); // Reemplaza 'nombreDeTuColeccion' con el nombre real de tu colección
          const snapshot = await getDocs(colRef);
          const data = snapshot.docs.map(doc => doc.data());
          console.log(data);
          return data;
        
        }
    
        fetch()
      }, [])
    

  return (
    <div>Papa</div>
  )
}

export default Papa