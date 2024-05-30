export const getShippingRates = async (cartToken: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/checkout/shipping-rates?cartToken=${cartToken}`,
  );
  return res.json();
};
