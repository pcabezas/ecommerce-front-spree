export const getProducts = async () => {
  const endpointDomain = process.env.SPREE_API_STOREFRONT;
  const action = '/products';

  // TODO: Find better way to set Query Params
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
  const { data } = await response.json();
  return data;
};
