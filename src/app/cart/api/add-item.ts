const addItem = async (
  tokenCart: string,
  variantId: number,
  quantity: number,
) => {
  const endpointDomain = 'http://0.0.0.0:4000/api/v2/storefront';
  const action = '/cart/add_item';
  const body = {
    variant_id: variantId,
    quantity,
  };
  console.log(endpointDomain + action);
  // TODO: Find better way to set Query Params
  const response = await fetch(endpointDomain + action, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
      'X-Spree-Order-Token': tokenCart,
    },
  });
  const parsedResponse = await response.json();
  return parsedResponse;
};

export default addItem;
