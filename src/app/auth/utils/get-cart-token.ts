import CartTokenCookie from '@/app/utils/interfaces/cart-token-cookie';

const getCartToken = async (): Promise<CartTokenCookie> => {
  const endpointDomain = process.env.SPREE_API_STOREFRONT;
  const action = '/cart';

  // TODO: Find better way to set Query Params
  const response = await fetch(endpointDomain + action, {
    method: 'POST',
    headers: {
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
    },
  });
  const {
    data: { attributes },
  } = await response.json();
  const { token } = attributes;
  return token;
};

export default getCartToken;
