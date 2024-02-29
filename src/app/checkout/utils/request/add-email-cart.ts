interface Payload {
  email: string;
}

export const addEmailToCart = async (cartToken: string, payload: Payload) => {
  const res = await fetch(`http://0.0.0.0:3000/api/v1/checkout`, {
    method: 'PATCH',
    body: JSON.stringify({
      cartToken: cartToken,
      order: { ...payload },
    }),
  });
  return res.json();
};
