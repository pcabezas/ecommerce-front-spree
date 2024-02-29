import { CartInterface } from '@/app/utils/interfaces/cart';

export const updateCheckout = async (
  cartToken: string,
  body: object,
): Promise<CartInterface> => {
  const endpointDomain = process.env.SPREE_API_STOREFRONT;
  const action = '/checkout';
  const response = await fetch(endpointDomain + action, {
    method: 'PATCH',
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

export const nextCheckoutStep = async (
  cartToken: string,
): Promise<CartInterface> => {
  const endpointDomain = process.env.SPREE_API_STOREFRONT;
  const action = '/checkout/next';
  const response = await fetch(endpointDomain + action, {
    method: 'PATCH',
    headers: {
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
      'X-Spree-Order-Token': cartToken,
    },
  });
  const parsedResponse = await response.json();
  return parsedResponse;
};

export const updateShippingMethod = async (
  cartToken: string,
  body: object,
): Promise<CartInterface> => {
  const endpointDomain = process.env.SPREE_API_STOREFRONT;
  const action = '/checkout/select_shipping_method';
  const response = await fetch(endpointDomain + action, {
    method: 'PATCH',
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
