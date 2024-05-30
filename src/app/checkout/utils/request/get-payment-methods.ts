export const getPaymentMethods = async (cartToken: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/checkout/payment-methods?cartToken=${cartToken}`,
  );
  return res.json();
};
