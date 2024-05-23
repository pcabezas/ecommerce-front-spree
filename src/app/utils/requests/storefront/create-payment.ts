import { CartInterface } from '@/app/utils/interfaces/cart';

export const createPayment = async (
  cartToken: string,
  body: object,
  includes: Array<string>,
): Promise<CartInterface> => {
  let includeParams = '';
  for (const index in includes) {
    includeParams.length == 0
      ? (includeParams += `include=${includes[index]}`)
      : (includeParams += `,${includes[index]}`);
  }
  const endpointDomain = process.env.SPREE_API_STOREFRONT;
  const action = `/checkout/create_payment?${includeParams}`;
  const response = await fetch(endpointDomain + action, {
    method: 'POST',
    headers: {
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
      'X-Spree-Order-Token': cartToken,
    },
    body: JSON.stringify(body),
  });
  const parsedResponse = await response.json();
  return parsedResponse;
};
