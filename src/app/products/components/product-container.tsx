'use client';

import { ProductAttr } from '@/app/utils/interfaces/product';
import OptionValues from './option-values/option-values';
import { useEffect, useState } from 'react';
import { getSelectedVariant } from '../helpers/get-selected-variant';
import AddToCart from '@/app/cart/components/add-to-cart';
import CartTokenCookie from '@/app/utils/interfaces/cart-token-cookie';

const ProductContainer = ({
  product,
  cartToken,
}: {
  product: ProductAttr;
  cartToken: CartTokenCookie;
}) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const { options } = product;
  const variant = getSelectedVariant(product, selectedOptions);

  useEffect(() => {
    selectDefaultOptionFromProduct(product, setSelectedOptions);
  }, [product]);

  return (
    <div>
      <OptionValues
        options={options}
        selectedOptions={selectedOptions}
      ></OptionValues>
      <AddToCart
        cartToken={cartToken}
        variant={variant}
        quantity={1}
      ></AddToCart>
    </div>
  );
};

const selectDefaultOptionFromProduct = (product: ProductAttr, updater) => {
  product.variants[0]?.options?.forEach((v) => {
    updater((choices) => ({
      ...choices,
      [v.option_type_id]: v.id,
    }));
  });
};

export default ProductContainer;
