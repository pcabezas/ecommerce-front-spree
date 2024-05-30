import { StorefrontResponse } from '../../interfaces/storefront-response';

export const getPaymentMethods = async (
  cartToken: string,
): Promise<StorefrontResponse> => {
  const endpointDomain = process.env.SPREE_API_STOREFRONT;
  const action = '/checkout/payment_methods';
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
    console.error('Error on action Payment Methods', error);
    return { data: undefined, ok: false };
  }
};
