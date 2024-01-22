import { CartInterface } from '@/app/utils/interfaces/cart';

export const getCart = async (cartToken: string): Promise<CartInterface> => {
  const endpointDomain = process.env.SPREE_API_STOREFRONT;
  const action = '/cart';

  // TODO: Find better way to set Query Params
  const response = await fetch(endpointDomain + action, {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
      'X-Spree-Order-Token': cartToken,
    },
  });
  const {
    data: { attributes },
  } = await response.json();
  return attributes;
};
