export function sortByAmount(data) {
  return (
    data &&
    data.sort((a, b) => {
      const aPriceNum = parseToNumber(a.price);
      const bPriceNum = parseToNumber(b.price);

      if (aPriceNum === null) return 1;
      if (bPriceNum === null) return -1;

      return aPriceNum - bPriceNum;
    })
  );
}

export function parseToNumber(price) {
  if (price === false) return null;

  const priceNum = parseFloat(price?.replace(/\./g, ""));
  return isNaN(priceNum) ? null : priceNum;
}


export function sortDataByButtons(data, maxPrice) {
    const numMaxPrice = maxPrice ? parseFloat(maxPrice) : Infinity;

    return data &&
      data
        .filter((item) => {
          const itemPrice = parseToNumber(item.price);
          return itemPrice !== null && itemPrice <= numMaxPrice;
        })
        .sort((a, b) => {
          const aPriceNum = parseToNumber(a.price);
          const bPriceNum = parseToNumber(b.price);
          if (aPriceNum === null) return 1;
          if (bPriceNum === null) return -1;
          return aPriceNum - bPriceNum;
        });
  };