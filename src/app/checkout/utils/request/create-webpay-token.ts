export const createWebpayToken = async (
  cartToken: string,
  payment_id: number,
) => {
  const res = await fetch(
    `http://0.0.0.0:3000/api/v1/webpay/create-payment-token`,
    {
      method: 'POST',
      body: JSON.stringify({
        cartToken: cartToken,
        payment_id,
      }),
    },
  );
  return res.json();
};
