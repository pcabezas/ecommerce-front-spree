export const getCart = async (cartToken: string) => {
  const res = await fetch(
    `http://0.0.0.0:3000/api/v1/cart?cartToken=${cartToken}`,
  );
  return res.json();
};
