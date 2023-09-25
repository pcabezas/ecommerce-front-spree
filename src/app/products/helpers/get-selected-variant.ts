import { ProductAttr } from '@/app/utils/interfaces/product';

export type SelectedOptions = Record<number, string | null>;

export const getSelectedVariant = (
  product: ProductAttr,
  opts: SelectedOptions,
) => {
  const selectedValuesIds = Object.values(opts);
  const variant = product.variants.find((variant) => {
    const variantValuesIds = variant.options.map((opt) => opt.id);
    return variantValuesIds.toString() == selectedValuesIds.toString();
  });
  return variant;
};
