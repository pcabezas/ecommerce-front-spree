export const cartNextStep = async (cartToken: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout/next`, {
    method: 'PATCH',
    body: JSON.stringify({ cartToken: cartToken }),
  });
  return res.json();
};
