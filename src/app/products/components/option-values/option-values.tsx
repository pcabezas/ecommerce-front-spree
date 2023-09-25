'use client';

import { Radio, RadioGroup, Swatch } from '@sajari/react-components';
import { ProductOption } from '@/app/utils/interfaces/product-options';
import { SelectedOptions } from '../../helpers/get-selected-variant';

const OptionValues = ({
  options,
  selectedOptions,
}: {
  options: ProductOption[];
  selectedOptions: SelectedOptions;
}) => {
  const render = options.map((opt) => {
    if (opt.type === 'color') {
      return renderOptionColor(opt, selectedOptions);
    } else {
      return renderOptionRadio(opt, selectedOptions);
    }
  });
  return render;
};

const renderOptionColor = (
  opt: ProductOption,
  selectedOptions: SelectedOptions,
) => {
  return (
    <div className="pb-4" key={opt.type}>
      <h2 className="uppercase font-medium text-sm tracking-wide">
        {opt.type}
      </h2>
      <div role="listbox" className="flex flex-row py-4">
        <Swatch checkedColors={checkedColor(opt, selectedOptions)}>
          {opt.values.map((v) => {
            return (
              <Swatch.Color
                key={v.id}
                id={v.id.toString()}
                bg={v.presentation}
              />
            );
          })}
        </Swatch>
      </div>
    </div>
  );
};

const renderOptionRadio = (
  opt: ProductOption,
  selectedOptions: SelectedOptions,
) => {
  const selectedValueId = getSelectedOptionValueId(opt, selectedOptions);
  return (
    <div key={opt.type}>
      <h2 className="uppercase font-medium text-sm tracking-wide">
        {opt.type}
      </h2>
      <RadioGroup inline value={selectedValueId}>
        {opt.values.map((v) => {
          return (
            <Radio key={v.id} value={v.id}>
              {v.presentation}
            </Radio>
          );
        })}
      </RadioGroup>
    </div>
  );
};

const checkedColor = (
  option: ProductOption,
  selectedOptions: SelectedOptions,
) => {
  const selectedValue = getSelectedOptionValueId(option, selectedOptions);
  return [selectedValue];
};

const getSelectedOptionValueId = (
  option: ProductOption,
  selectedOptions: SelectedOptions,
) => {
  const id = selectedOptions[option.values[0].option_type_id];
  return id == undefined ? '0' : id.toString();
};
export default OptionValues;
