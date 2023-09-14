import CartAddItem from '@/app/utils/interfaces/cart-add-item';

export const addToCart = async (tokenCart: string, item: CartAddItem) => {
  const endpointDomain = process.env.SPREE_API_STOREFRONT;
  const action = '/cart/add_item';
  const response = await fetch(endpointDomain + action, {
    method: 'POST',
    headers: {
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
      'X-Spree-Order-Token': tokenCart,
    },
    body: JSON.stringify(item),
  });
  const { data } = await response.json();
  return data;
};
