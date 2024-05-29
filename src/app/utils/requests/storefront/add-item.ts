import { StorefrontResponse } from '../../interfaces/storefront-response';

const addItem = async (
  tokenCart: string,
  variantId: number,
  quantity: number,
): Promise<StorefrontResponse> => {
  const endpointDomain = process.env.SPREE_API_STOREFRONT;
  const action = '/cart/add_item';
  const body = {
    variant_id: variantId,
    quantity,
  };
  try {
    const response = await fetch(endpointDomain + action, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        'X-Spree-Order-Token': tokenCart,
      },
    });
    if (response.ok) {
      const { data, included } = await response.json();
      return { data, included, ok: response.ok };
    } else {
      return { data: undefined, ok: response.ok };
    }
  } catch (error) {
    console.error('Error on method add_item:', error);
    return { data: undefined, ok: false };
  }
};

export default addItem;
