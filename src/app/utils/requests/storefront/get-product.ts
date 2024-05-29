import { ProductResponse } from '@/app/utils/interfaces/product-response';
import { normalizeProduct } from '@/app/utils/normalize-product-response';

export const getProduct = async (
  productId: number,
  includes: Array<string>,
): Promise<ProductResponse> => {
  const endpointDomain = process.env.SPREE_API_STOREFRONT;
  let includeParams = '';
  for (const index in includes) {
    includeParams.length == 0
      ? (includeParams += `include=${includes[index]}`)
      : (includeParams += `,${includes[index]}`);
  }
  const action = `/products/${productId}?${includeParams}`;

  // TODO: Find better way to set Query Params
  const response = await fetch(endpointDomain + action, {
    method: 'GET',
    headers: {
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
    },
  });
  const parsedResponse: ProductResponse = await response.json();
  return parsedResponse;
};
