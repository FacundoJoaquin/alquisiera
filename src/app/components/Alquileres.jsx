  import { collection, getDocs } from "firebase/firestore";
  import { motion } from "framer-motion";
  import { useEffect, useState } from "react";
  import Card from "../ui/Card";
  import { db } from "../utils/firebase/config";
  import { sortByAmount, sortDataByButtons } from "../utils/functions/sortData";
  import Loader from "./icons/Loader";
  import Paginator from "./Paginator";

  export const maxValues = [
    { id: 1, name: 'Todos', value: 0 },
    { id: 2, name: '$200.000', value: 200000 },
    { id: 3, name: '$300.000', value: 300000 },
    { id: 4, name: '$400.000', value: 400000 },
    { id: 5, name: '$500.000', value: 500000 },
    { id: 6, name: '$600.000', value: 600000 },


  ]

  const Alquileres = () => {
    const [dataFetching, setDataFetching] = useState(undefined);
    const [data, setData] = useState(undefined);
    const [maxCanPay, setMaxCanPay] = useState(undefined);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState([]);
    const itemsPerPage = 8;



    useEffect(() => {
      const fetch = async () => {
        const colRef = collection(db, "alquileres");
        const snapshot = await getDocs(colRef);
        const data = snapshot.docs.map((doc) => doc.data());
        setDataFetching(data);
        return data;
      };

      fetch();
    }, []);

    useEffect(() => {
      const dataParser = sortByAmount(dataFetching);
      setData(dataParser)
    }, [dataFetching]);


    const handleMaxPriceChange = (value) => {
      setMaxCanPay(value);
      setCurrentPage(1)
    };

    useEffect(() => {
      const dataParser = sortDataByButtons(dataFetching, maxCanPay);
      setData(dataParser);
    }, [dataFetching, maxCanPay]);

    const isButtonSelected = (value) => {
      return maxCanPay === value;
    };

    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };

    return (
      <section className="flex flex-col w-full gap-y-4">
        {data && data?.length > 0 && <p className="text-center text-2xl text-strongMainBlue font-bold xs:text-base">Al día de hoy contamos con {data.length} alquileres.</p>}
        <div className="flex w-full flex-col gap-y-4 items-center mb-4">
          <label htmlFor="maxPrice" className="text-2xl font-semibold text-strongMainBlue">QUIERO VER PRECIOS DESDE</label>
          <div className="flex gap-x-4 xs:grid xs:grid-cols-3 xs:gap-3 xs:gap-x-6 tb:grid tb:grid-cols-3 tb:gap-3 tb:gap-x-6">
            {maxValues.map((e) => {
              return (
                <button key={e.id} className={`bg-mainBlue rounded-full w-24 py-1 border text-white hover:bg-strongMainBlue transition-colors duration-300 xs:w-16 xs:text-xs xs:text-center ${isButtonSelected(e.value) ? 'bg-strongMainBlue' : ''
                  }`}
                  onClick={() => handleMaxPriceChange(e.value)}>
                  {e.name}
                </button>
              )
            })}

          </div>
        </div>
        <div className="grid xl:grid-cols-4 gap-20 xs:grid-cols-1 xs:place-items-center xs:gap-8 lg:grid-cols-3 sm:grid-cols-2 2xl:grid-cols-4 tb:grid-cols-2 tb:place-items-center tb:gap-8 ">
    {currentItems ? (
      currentItems.map((e, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="w-full "
        >
          <Card data={e} />
        </motion.div>
      ))
    ) : (
      <div className="p-1 w-full grid place-items-center">
        <Loader style={'size-10 animate-spin text-mainBlue'} />
        <p>Cargando alquileres...</p>
      </div>
    )}
  </div>
        {data && data.length > 0 && (
          <Paginator
            items={data}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            setCurrentItems={setCurrentItems}
            onPageChange={handlePageChange}
          
          />
        )}

      </section>
    );
  };

  export default Alquileres;

// import { collection, getDocs } from "firebase/firestore";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import Card from "../ui/Card";
// import { db } from "../utils/firebase/config";
// import { sortByAmount, sortDataByButtons } from "../utils/functions/sortData";
// import Loader from "./icons/Loader";
// import Paginator from "./Paginator";

// export const maxValues = [
//   { id: 1, name: 'Todos', value: 0 },
//   { id: 2, name: '$200.000', value: 200000 },
//   { id: 3, name: '$300.000', value: 300000 },
//   { id: 4, name: '$400.000', value: 400000 },
//   { id: 5, name: '$500.000', value: 500000 },
//   { id: 6, name: '$600.000', value: 600000 },


// ]

// const Alquileres = () => {
//   const [dataFetching, setDataFetching] = useState(undefined);
//   const [data, setData] = useState(undefined);
//   const [maxCanPay, setMaxCanPay] = useState(undefined);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [currentItems, setCurrentItems] = useState([]);
//   const itemsPerPage = 8;



//   useEffect(() => {
//     const fetch = async () => {
//       const colRef = collection(db, "alquileres");
//       const snapshot = await getDocs(colRef);
//       const data = snapshot.docs.map((doc) => doc.data());
//       setDataFetching(data);
//       return data;
//     };

//     fetch();
//   }, []);

//   useEffect(() => {
//     const dataParser = sortByAmount(dataFetching);
//     setData(dataParser)
//   }, [dataFetching]);


//   const handleMaxPriceChange = (value) => {
//     setMaxCanPay(value);
//     setCurrentPage(1)
//   };

//   useEffect(() => {
//     const dataParser = sortDataByButtons(dataFetching, maxCanPay);
//     setData(dataParser);
//   }, [dataFetching, maxCanPay]);

//   const isButtonSelected = (value) => {
//     return maxCanPay === value;
//   };

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   return (
//     <section className="flex flex-col w-full gap-y-4">
//       {data && data?.length > 0 && <p className="text-center text-2xl text-strongMainBlue font-bold xs:text-base">Al día de hoy contamos con {data.length} alquileres.</p>}
//       <div className="flex w-full flex-col gap-y-4 items-center mb-4">
//         <label htmlFor="maxPrice" className="text-2xl font-semibold text-strongMainBlue">QUIERO VER PRECIOS DESDE</label>
//         <div className="flex gap-x-4 xs:grid xs:grid-cols-3 xs:gap-3 xs:gap-x-6 tb:grid tb:grid-cols-3 tb:gap-3 tb:gap-x-6">
//           {maxValues.map((e) => {
//             return (
//               <button key={e.id} className={`bg-mainBlue rounded-full w-24 py-1 border text-white hover:bg-strongMainBlue transition-colors duration-300 xs:w-16 xs:text-xs xs:text-center ${isButtonSelected(e.value) ? 'bg-strongMainBlue' : ''
//                 }`}
//                 onClick={() => handleMaxPriceChange(e.value)}>
//                 {e.name}
//               </button>
//             )
//           })}

//         </div>
//       </div>
//       <div className="grid xl:grid-cols-4 gap-20 xs:grid-cols-1 xs:place-items-center xs:gap-8 lg:grid-cols-3 sm:grid-cols-2 2xl:grid-cols-4 tb:grid-cols-2 tb:place-items-center tb:gap-8 ">
//   {currentItems ? (
//     currentItems.map((e, i) => (
//       <motion.div
//         key={i}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.4, ease: "easeInOut" }}
//         className="w-full "
//       >
//         <Card data={e} />
//       </motion.div>
//     ))
//   ) : (
//     <div className="p-1 w-full grid place-items-center">
//       <Loader style={'size-10 animate-spin text-mainBlue'} />
//       <p>Cargando alquileres...</p>
//     </div>
//   )}
// </div>
//       {data && data.length > 0 && (
//         <Paginator
//           items={data}
//           itemsPerPage={itemsPerPage}
//           currentPage={currentPage}
//           setCurrentItems={setCurrentItems}
//           onPageChange={handlePageChange}
        
//         />
//       )}

//     </section>
//   );
// };

// export default Alquileres;

