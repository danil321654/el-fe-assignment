const priceCheck = (products, productPrices, productSold, soldPrice) => {
  const productPriceMap = products.reduce(
    (res, nextProduct, index) => ({
      ...res,
      [nextProduct]: productPrices[index],
    }),
    {}
  );
  return productSold.reduce(
    (res, product, index) =>
      productPriceMap[product] !== soldPrice[index] ? res + 1 : res,
    0
  );
};

console.log(priceCheck(
  ["eggs", "milk", "cheese"],
  [2.89, 3.29, 5.79],
  ["eggs", "eggs", "cheese", "milk"],
  [2.89, 2.99, 5.97, 3.29]
));

console.log(priceCheck(
    ['rice', 'sugar', 'wheat', 'cheese'],
	[16.89, 56.92, 20.89, 345.99],
	['rice', 'cheese'],
	[18.99, 400.89]
));