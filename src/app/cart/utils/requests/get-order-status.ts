export const getOrderStatus = async (
  cartToken: string,
  orderNumber: string,
) => {
  const res = await fetch(
    `http://0.0.0.0:3000/api/v1/cart/status?cartToken=${cartToken}&orderNumber=${orderNumber}`,
  );
  return res.json();
};
