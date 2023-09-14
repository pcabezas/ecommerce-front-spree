import { OptionValueAttr } from './interfaces/option-value';

export const normalizeOptionValue = (response): OptionValueAttr => {
  return {
    id: response.id,
    ...response.attributes,
  };
};
