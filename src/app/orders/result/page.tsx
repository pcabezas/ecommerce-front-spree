import { CART_COOKIE_NAME } from '@/app/utils/constants';
import { cookies } from 'next/headers';
import Detail from '../detail';

export default function OrderDetail({
  searchParams,
}: {
  searchParams?: { [key: string]: string };
}) {
  const cartToken = cookies().get(CART_COOKIE_NAME)!;
  const orderNumber = searchParams?.order_number!;
  return <Detail cartToken={cartToken} orderNumber={orderNumber} />;
}
