export const getShippingRates = async (cartToken: string) => {
  const res = await fetch(
    `http://0.0.0.0:3000/api/v1/checkout/shipping-rates?cartToken=${cartToken}`,
  );
  return res.json();
};
