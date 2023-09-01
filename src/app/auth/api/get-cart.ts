import { setCartToken } from '@/app/utils/tokens/cart-token-response';

const getCart = async () => {
  const endpointDomain = 'http://0.0.0.0:4000/api/v2/storefront';
  const action = '/cart';

  // TODO: Find better way to set Query Params
  const response = await fetch(
    endpointDomain + action + `?fields[cart]=token`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
      },
    },
  );
  const {
    data: { attributes },
  } = await response.json();
  const { token } = attributes;
  setCartToken(token);
};

export default getCart;
