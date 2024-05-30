import { StorefrontResponse } from '../../interfaces/storefront-response';

export const getShippingRates = async (
  cartToken: string,
): Promise<StorefrontResponse> => {
  const endpointDomain = process.env.SPREE_API_STOREFRONT;
  const action = '/checkout/shipping_rates';
  try {
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
    console.error('Error getting Shipping Rates', error);
    return { data: undefined, ok: false };
  }
};
