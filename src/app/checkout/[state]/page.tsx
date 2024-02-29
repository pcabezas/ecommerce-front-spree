import { getCart } from '@/app/cart/utils/requests/get-cart';
import { CART_COOKIE_NAME } from '@/app/utils/constants';
import { cookies } from 'next/headers';
import React from 'react';
import Address from '../components/address';
import Delivery from '../components/delivery';
import Registration from '../components/registration';

interface Props {
  params: { state: string };
}

const Checkout = async ({ params: { paramState } }: Props) => {
  const cartToken = cookies().get(CART_COOKIE_NAME)!;
  const {
    data: { state },
  } = await getCart(cartToken.value);
  switch (state) {
    case 'cart':
      return <Registration cartToken={cartToken} />;
    case 'address':
      return <Address cartToken={cartToken} />;
    case 'delivery':
      return <Delivery cartToken={cartToken} />;

    default:
      <div>Undefined state: {state}</div>;
  }
};

export default Checkout;
