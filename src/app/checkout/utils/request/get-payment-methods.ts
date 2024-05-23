export const getPaymentMethods = async (cartToken: string) => {
  const res = await fetch(
    `http://0.0.0.0:3000/api/v1/checkout/payment-methods?cartToken=${cartToken}`,
  );
  return res.json();
};
