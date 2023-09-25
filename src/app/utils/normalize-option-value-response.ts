import { OptionValueAttr } from './interfaces/option-value';

export const normalizeOptionValue = (response): OptionValueAttr => {
  const {
    relationships: {
      option_type: {
        data: { id: option_type_id },
      },
    },
  } = response;
  return {
    id: response.id,
    option_type_id,
    ...response.attributes,
  };
};
