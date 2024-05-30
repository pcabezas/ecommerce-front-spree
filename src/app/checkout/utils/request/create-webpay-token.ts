export const createWebpayToken = async (
  cartToken: string,
  payment_id: number,
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/webpay/create-payment-token`,
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
