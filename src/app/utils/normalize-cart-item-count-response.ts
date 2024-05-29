import {
  CartItemsCounterBaseResponse,
  CartItemsCounterNormalized,
} from './interfaces/cart-add-item';

export const normalizeCartItemsCount = (
  response: CartItemsCounterBaseResponse,
): CartItemsCounterNormalized => {
  const { id, attributes } = response;
  return {
    id,
    ...attributes,
  };
};
