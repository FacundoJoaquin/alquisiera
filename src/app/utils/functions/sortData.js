export function sortByAmount(data) {
  return (
    data &&
    data.sort((a, b) => {
      const aPriceNum = parseToNumber(a.price);
      const bPriceNum = parseToNumber(b.price);
      
      if (aPriceNum === 'Sin precio') return 1;
      if (bPriceNum === 'Sin precio') return -1;
      return aPriceNum - bPriceNum;
    })
  );
}

export function parseToNumber(price) {
  if (price === false) return null;
  const priceNum = parseFloat(price?.replace(/\./g, ""));
  return isNaN(priceNum) ? 'Sin precio' : priceNum;
}

export function sortDataByButtons(data, maxPrice) {
  const numMaxPrice = maxPrice ? parseFloat(maxPrice) : Infinity;
  
  return (
    data &&
    data
      .map((item) => {
        const itemPrice = parseToNumber(item.price);
        if (itemPrice === 'Sin precio' || itemPrice === null || itemPrice > numMaxPrice) {
          item.price = 'Sin precio';
        }
        return item;
      })
      .sort((a, b) => {
        const aPriceNum = parseToNumber(a.price);
        const bPriceNum = parseToNumber(b.price);
        
        if (aPriceNum === 'Sin precio') return 1;
        if (bPriceNum === 'Sin precio') return -1;
        return aPriceNum - bPriceNum;
      })
  );
}
