import { collection, getDocs } from "firebase/firestore";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import Card from "../ui/Card";

const Alquileres = () => {
  const [data, setData] = useState(null);
  const [sortedData, setSortedData] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      const colRef = collection(db, "alquileres");
      const snapshot = await getDocs(colRef);
      const data = snapshot.docs.map((doc) => doc.data());
      setData(data);
      return data;
    };

    fetch();
  }, []);

  useEffect(() => {
    const sortData = (data) => {
      return data && data.sort((a, b) => {
        const aPriceNum = getPriceNumber(a.price);
        const bPriceNum = getPriceNumber(b.price);
  
        if (aPriceNum === null) return 1;
        if (bPriceNum === null) return -1;
  
        return aPriceNum - bPriceNum;
      });
    };
    const dataParser = sortData(data);
    setSortedData(dataParser)
  }, [data]);



  const getPriceNumber = (price) => {
    if (price === false) return null;

    const priceNum = parseFloat(price?.replace(/\./g, ''));
    return isNaN(priceNum) ? null : priceNum;
  };


  return (
    <section className=" grid grid-cols-4 gap-20 xs:grid-cols-1 xs:place-items-center xs:gap-8">
      {sortedData &&
        sortedData.map((e, i) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              key={i}
              className="xs:w-full"
            >
              <Card data={e} />
            </motion.div>
          );
        })}

    </section>
  );
};

export default Alquileres;
