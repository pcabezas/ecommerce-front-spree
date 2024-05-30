import { StorefrontResponse } from '../../interfaces/storefront-response';

export const createPayment = async (
  cartToken: string,
  body: object,
  includes: Array<string>,
): Promise<StorefrontResponse> => {
  let includeParams = '';
  for (const index in includes) {
    includeParams.length == 0
      ? (includeParams += `include=${includes[index]}`)
      : (includeParams += `,${includes[index]}`);
  }
  try {
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
    if (response.ok) {
      const { data, included } = await response.json();
      return { data, included, ok: response.ok };
    } else {
      return { data: undefined, ok: response.ok };
    }
  } catch (error) {
    console.error('Error on action Create Payment', error);
    return { data: undefined, ok: false };
  }
};
