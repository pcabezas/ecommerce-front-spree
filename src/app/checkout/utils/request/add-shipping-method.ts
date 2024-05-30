export const addShippingMethod = async (
  cartToken: string,
  shipping_method_id: number,
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/checkout/select-shipping-method`,
    {
      method: 'PATCH',
      body: JSON.stringify({
        cartToken: cartToken,
        shipping_method_id,
      }),
    },
  );
  return res.json();
};
