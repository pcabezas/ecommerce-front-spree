'use client';

import { ProductAttr } from '@/app/utils/interfaces/product';
import OptionValues from './option-values/option-values';
import { useEffect, useState } from 'react';

const ProductContainer = ({ product }: { product: ProductAttr }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const { options } = product;

  useEffect(() => {
    selectDefaultOptionFromProduct(product, setSelectedOptions);
  }, [product]);

  return (
    <OptionValues
      options={options}
      selectedOptions={selectedOptions}
    ></OptionValues>
  );
};

const selectDefaultOptionFromProduct = (product, updater) => {
  product.variants[0]?.options?.forEach((v) => {
    updater((choices) => ({
      ...choices,
      [v.option_type_id]: v.id,
    }));
  });
};

export default ProductContainer;
