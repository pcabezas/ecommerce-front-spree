export interface VariantAttr {
  id: number;
  sku?: string;
  price?: string;
  currency?: string;
  display_price?: string;
  weight?: string;
  height?: string;
  width?: string;
  depth?: string;
  is_master?: boolean;
  options_text?: string;
  purchasable?: boolean;
  in_stock?: boolean;
  backorderable?: boolean;
}
