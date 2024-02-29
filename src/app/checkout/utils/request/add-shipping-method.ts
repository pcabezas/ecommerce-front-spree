export const addShippingMethod = async (
  cartToken: string,
  shipping_method_id: number,
) => {
  const res = await fetch(
    'http://0.0.0.0:3000/api/v1/checkout/select-shipping-method',
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
