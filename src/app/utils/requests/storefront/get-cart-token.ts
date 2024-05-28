import CartTokenCookie from '@/app/utils/interfaces/cart-token-cookie';

const getCartToken = async (): Promise<CartTokenCookie | undefined> => {
  const endpointDomain = process.env.SPREE_API_STOREFRONT;
  const action = '/cart';

  try {
    const response = await fetch(endpointDomain + action, {
      method: 'POST',
      headers: {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
      },
    });

    if (response.ok) {
      const {
        data: { attributes },
      } = await response.json();
      const { token } = attributes;
      return { value: token };
    } else {
      return undefined;
    }
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default getCartToken;
