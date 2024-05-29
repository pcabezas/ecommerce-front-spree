import { StorefrontResponse } from '../../interfaces/storefront-response';

export const getCart = async (
  cartToken: string,
  includes?: Array<string>,
): Promise<StorefrontResponse> => {
  const endpointDomain = process.env.SPREE_API_STOREFRONT;
  let includeParams = '';
  if (includes) {
    for (const index in includes) {
      includeParams.length == 0
        ? (includeParams += `include=${includes[index]}`)
        : (includeParams += `,${includes[index]}`);
    }
  }
  try {
    const action = `/cart?${includeParams}`;
    const response = await fetch(endpointDomain + action, {
      method: 'GET',
      headers: {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        'X-Spree-Order-Token': cartToken,
      },
    });
    if (response.ok) {
      const { data, included } = await response.json();
      return { data, included, ok: response.ok };
    } else {
      return { data: undefined, ok: response.ok };
    }
  } catch (error) {
    return { data: undefined, ok: false };
  }
};
