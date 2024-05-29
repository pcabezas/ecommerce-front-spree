import { StorefrontResponse } from '../../interfaces/storefront-response';

export const getProducts = async (
  includes?: Array<string>,
): Promise<StorefrontResponse> => {
  const endpointDomain = process.env.SPREE_API_STOREFRONT;
  const action = '/products';

  let includeParams = '';
  if (includes) {
    for (const index in includes) {
      includeParams.length == 0
        ? (includeParams += `include=${includes[index]}`)
        : (includeParams += `,${includes[index]}`);
    }
  }

  try {
    const response = await fetch(
      endpointDomain + action + `?fields[product]=name,slug,price`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
        },
      },
    );
    if (response.ok) {
      const { data, included } = await response.json();
      return { data, included, ok: response.ok };
    } else {
      return { data: undefined, ok: response.ok };
    }
  } catch (error) {
    console.error('Error fetching products:', error);
    return { data: undefined, ok: false };
  }
};
