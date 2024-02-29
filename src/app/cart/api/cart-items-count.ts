const getCartItemsCount = async (tokenCart: string) => {
  const endpointDomain = process.env.SPREE_API_STOREFRONT;
  const action = '/cart';

  // TODO: Find better way to set Query Params
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
  const {
    data: { attributes },
  } = await response.json();
  const { item_count: itemCount } = attributes;
  return itemCount;
};

export default getCartItemsCount;
