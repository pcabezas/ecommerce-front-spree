import { getCart } from '@/app/cart/utils/requests/get-cart';
import { CART_COOKIE_NAME } from '@/app/utils/constants';
import { cookies } from 'next/headers';
import React from 'react';
import Address from '../components/address';
import Delivery from '../components/delivery';
import Registration from '../components/registration';
import Payment from '../components/payment';
import Confirm from '../components/confirm';

interface Props {
  params: { state: string };
}

const Checkout = async ({ params: { paramState } }: Props) => {
  const cartToken = cookies().get(CART_COOKIE_NAME)!;
  const cartResponse = await getCart(cartToken.value);
  const {
    response: {
      data: {
        attributes: { state },
      },
    },
  } = cartResponse;
  switch (state) {
    case 'cart':
      return <Registration cartToken={cartToken} />;
    case 'address':
      return <Address cartToken={cartToken} />;
    case 'delivery':
      return <Delivery cartToken={cartToken} />;
    case 'payment':
      return <Payment cartToken={cartToken} />;
    case 'confirm':
      return <Confirm cartToken={cartToken} />;
    default:
      <div>Undefined state: {state}</div>;
  }
};

export default Checkout;
