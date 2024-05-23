import { CartData, CartInterface } from '@/app/utils/interfaces/cart';

export const getCart = async (
  cartToken: string,
  includes: Array<string>,
): Promise<CartData> => {
  const endpointDomain = process.env.SPREE_API_STOREFRONT;
  let includeParams = '';
  for (const index in includes) {
    includeParams.length == 0
      ? (includeParams += `include=${includes[index]}`)
      : (includeParams += `,${includes[index]}`);
  }
  const action = `/cart?${includeParams}`;
  const response = await fetch(endpointDomain + action, {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
      'X-Spree-Order-Token': cartToken,
    },
  });
  const { data, included } = await response.json();
  return { data, included };
};
