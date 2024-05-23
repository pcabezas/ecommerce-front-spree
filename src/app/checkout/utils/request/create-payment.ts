export const createPayment = async (
  cartToken: string,
  payment_method_id: number,
) => {
  const res = await fetch(
    `http://0.0.0.0:3000/api/v1/checkout/create-payment`,
    {
      method: 'POST',
      body: JSON.stringify({
        cartToken: cartToken,
        payment_method_id,
      }),
    },
  );
  return res.json();
};
