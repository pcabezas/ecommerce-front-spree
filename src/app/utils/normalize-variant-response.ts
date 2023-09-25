import { VariantAttr } from './interfaces/variant';

export const normalizeVariant = (response): VariantAttr => {
  return {
    id: response.id,
    ...response.attributes,
    relationships: response.relationships,
  };
};
