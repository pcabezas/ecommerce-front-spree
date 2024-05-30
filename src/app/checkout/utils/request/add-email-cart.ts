interface Payload {
  email: string;
}

export const addEmailToCart = async (cartToken: string, payload: Payload) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/checkout`, {
    method: 'PATCH',
    body: JSON.stringify({
      cartToken: cartToken,
      order: { ...payload },
    }),
  });
  return res.json();
};
