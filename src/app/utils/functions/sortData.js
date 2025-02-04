export function sortByAmount(data) {
  return (
    data &&
    data.sort((a, b) => {
      const aPriceNum = parseToNumber(a.price);
      const bPriceNum = parseToNumber(b.price);

      if (aPriceNum === "Sin precio") return 1;
      if (bPriceNum === "Sin precio") return -1;
      return aPriceNum - bPriceNum;
    })
  );
}

export function parseToNumber(price) {
  if (price === false) return null;
  const priceNum = parseFloat(price?.replace(/\./g, ""));
  return isNaN(priceNum) ? "Sin precio" : priceNum;
}

export function sortDataByButtons(data, minPrice) {
  const numMinPrice = minPrice ? parseFloat(minPrice) : 0;

  // Creamos una copia del array original para no modificar los datos originales
  const newData = data?.map((item) => ({ ...item }));

  return (
    newData &&
    newData
      .map((item) => {
        const itemPrice = parseToNumber(item.price);
        if (
          itemPrice === false ||
          itemPrice === null ||
          itemPrice === "Sin precio"
        ) {
          item.price = "Sin precio";
        }
        return item;
      })
      .filter((item) => {
        const itemPrice = parseToNumber(item.price);
        // Si minPrice es 0 o undefined, mostramos todos los alquileres
        if (minPrice === 0 || minPrice === undefined) {
          return true;
        }
        // Si minPrice tiene un valor, filtramos los que no tienen precio
        return (
          itemPrice !== "Sin precio" &&
          itemPrice !== false &&
          itemPrice !== null &&
          itemPrice >= numMinPrice
        );
      })
      .sort((a, b) => {
        const aPriceNum = parseToNumber(a.price);
        const bPriceNum = parseToNumber(b.price);

        if (aPriceNum === "Sin precio") return 1;
        if (bPriceNum === "Sin precio") return -1;
        return aPriceNum - bPriceNum;
      })
  );
}
