export const createPayment = async (
  cartToken: string,
  payment_method_id: number,
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/checkout/create-payment`,
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
