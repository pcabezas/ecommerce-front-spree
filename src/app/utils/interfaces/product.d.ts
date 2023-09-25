import { OptionTypeAttr } from './option-type';
import { OptionValueAttr } from './option-value';
import { ProductOption } from './product-options';
import { IRelationships } from './relationships';
import { VariantAttr } from './variant';

export interface ProductAttr {
  id?: string;
  name?: string;
  description?: string;
  price?: string;
  currency?: string;
  display_price?: string;
  available_on?: Date;
  meta_description?: string | null;
  meta_keywords?: string | null;
  updated_at?: Date;
  purchasable?: boolean;
  in_stock?: boolean;
  backorderable?: boolean;
  slug?: string;
  variants: VariantAttr[];
  option_types: OptionTypeAttr[];
  option_values: OptionValueAttr[];
  options: ProductOption;
}
