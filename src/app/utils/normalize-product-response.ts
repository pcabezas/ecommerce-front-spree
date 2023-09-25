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

  const cleanedOptions = defineOptions(option_types, option_values);
  const variantOptions = expandVariantOptions(variants, option_values);
  return {
    id: data.id,
    ...data.attributes,
    variants: variantOptions,
    option_types,
    option_values,
    options: cleanedOptions,
  };
};

const defineOptions = (
  option_types: OptionTypeAttr[],
  option_values: OptionValueAttr[],
) => {
  const options = option_types.map((type) => {
    const values = option_values.filter((v) => v.option_type_id == type.id);
    return { type: type.name, values };
  });
  return options;
};

const expandVariantOptions = (variants, options) => {
  return variants.map((variant) => {
    const variantOptions = variant.relationships.option_values.data.map(
      (value) => {
        return options.find((o) => o.id == value.id);
      },
    );
    variant.options = variantOptions;
    return variant;
  });
};
