import { StorefrontResponse } from '../../interfaces/storefront-response';

export const createWebpayToken = async (
  cartToken: string,
  payment_id: number,
): Promise<StorefrontResponse> => {
  const payload = {
    webpay: { payment_id },
  };
  try {
    const endpointDomain = process.env.SPREE_API_STOREFRONT;
    const action = `/webpay/payment/init-transaction`;
    const response = await fetch(endpointDomain + action, {
      method: 'PUT',
      headers: {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        'X-Spree-Order-Token': cartToken,
      },
      body: JSON.stringify(payload),
    });
    if (response.ok) {
      const { data, included } = await response.json();
      return { data, included, ok: response.ok };
    } else {
      return { data: undefined, ok: response.ok };
    }
  } catch (error) {
    console.error('Error on action Create Webpay Token', error);
    return { data: undefined, ok: false };
  }
};
