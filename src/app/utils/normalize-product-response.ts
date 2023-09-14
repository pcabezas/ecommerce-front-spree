import { OptionTypeAttr } from './interfaces/option-type';
import { OptionValueAttr } from './interfaces/option-value';
import { ProductAttr } from './interfaces/product';
import { ProductResponse } from './interfaces/product-response';
import { VariantAttr } from './interfaces/variant';
import { normalizeOptionType } from './normalize-option-type-response';
import { normalizeOptionValue } from './normalize-option-value-response';
import { normalizeVariant } from './normalize-variant-response';

export const normalizeProduct = (response: ProductResponse): ProductAttr => {
  const { data, included } = response;
  let variants: VariantAttr[] = [];
  let option_types: OptionTypeAttr[] = [];
  let option_values: OptionValueAttr[] = [];
  included?.forEach((value) => {
    switch (value.type) {
      case 'variant':
        variants.push(normalizeVariant(value));
        break;
      case 'option_type':
        option_types.push(normalizeOptionType(value));
        break;
      case 'option_value':
        option_values.push(normalizeOptionValue(value));
        break;
      default:
        break;
    }
  });
  return {
    id: data.id,
    ...data.attributes,
    variants,
    option_types,
    option_values,
  };
};
