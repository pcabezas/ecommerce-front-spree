import { StorefrontResponse } from '../../interfaces/storefront-response';

const getCartItemsCount = async (
  tokenCart: string,
): Promise<StorefrontResponse> => {
  const endpointDomain = process.env.SPREE_API_STOREFRONT;
  const action = '/cart';

  // TODO: Find better way to set Query Params
  try {
    const response = await fetch(
      endpointDomain + action + `?fields[cart]=item_count`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/vnd.api+json',
          'Content-Type': 'application/vnd.api+json',
          'X-Spree-Order-Token': tokenCart,
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

export default getCartItemsCount;
