import { CartInterface } from '@/app/utils/interfaces/cart';
import { StorefrontResponse } from '../../interfaces/storefront-response';

export const updateCheckout = async (
  cartToken: string,
  body: object,
): Promise<StorefrontResponse> => {
  const endpointDomain = process.env.SPREE_API_STOREFRONT;
  const action = '/checkout';
  try {
    const response = await fetch(endpointDomain + action, {
      method: 'PATCH',
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
    console.error('Error updating checkout:', error);
    return { data: undefined, ok: false };
  }
};

export const nextCheckoutStep = async (
  cartToken: string,
): Promise<StorefrontResponse> => {
  const endpointDomain = process.env.SPREE_API_STOREFRONT;
  const action = '/checkout/next';
  try {
    const response = await fetch(endpointDomain + action, {
      method: 'PATCH',
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
    console.error('Error on action next:', error);
    return { data: undefined, ok: false };
  }
};

export const updateShippingMethod = async (
  cartToken: string,
  body: object,
): Promise<StorefrontResponse> => {
  const endpointDomain = process.env.SPREE_API_STOREFRONT;
  const action = '/checkout/select_shipping_method';
  try {
    const response = await fetch(endpointDomain + action, {
      method: 'PATCH',
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
    console.error('Error on action Select shipping method:', error);
    return { data: undefined, ok: false };
  }
};
