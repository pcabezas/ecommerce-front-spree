export const cartNextStep = async (cartToken: string) => {
  console.log("AQUIII 1", cartToken)
  const res = await fetch(`http://0.0.0.0:3000/api/v1/checkout/next`, {
    method: 'PATCH',
    body: JSON.stringify({ cartToken: cartToken }),
  });
  return res.json();
};
