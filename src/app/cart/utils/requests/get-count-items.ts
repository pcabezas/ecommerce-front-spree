export const getCountItems = async (cartToken: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/cart/items-count?cartToken=${cartToken}`,
  );
  return res.json();
};
