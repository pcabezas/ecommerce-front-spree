'use client';

import CartTokenCookie from '@/app/utils/interfaces/cart-token-cookie';
import { checkUserCart } from '@/app/utils/user-cart';
import { Fragment } from 'react';

export const Session = ({
  cartToken,
}: {
  cartToken: CartTokenCookie | undefined;
}) => {
  checkUserCart(cartToken);
  return <Fragment></Fragment>;
};
