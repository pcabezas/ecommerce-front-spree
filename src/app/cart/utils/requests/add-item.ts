export const addItem = async (
  cartToken: string,
  variantId: number,
  quantity: number,
) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart/add-item`, {
    method: 'POST',
    body: JSON.stringify({
      cartToken: cartToken,
      variantId,
      quantity,
    }),
  });
  return res.json();
};
