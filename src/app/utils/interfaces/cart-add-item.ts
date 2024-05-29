export default interface CartAddItem {
  variant_id: number;
  quantity: number;
  public_metadata?: object;
  private_metadata?: object;
}

export interface CartItemsCounterData {
  data: CartItemsCounterBaseResponse;
}
export interface CartItemsCounterBaseResponse {
  id: number;
  type: string;
  attributes: CartItemsCounterAttributes;
}
export interface CartItemsCounterAttributes {
  item_count: number;
}

export interface CartItemsCounterNormalized {
  id: number;
  item_count: number;
}
