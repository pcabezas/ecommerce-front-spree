import { OptionTypeAttr } from './interfaces/option-type';

export const normalizeOptionType = (response): OptionTypeAttr => {
  return {
    id: response.id,
    ...response.attributes,
  };
};
