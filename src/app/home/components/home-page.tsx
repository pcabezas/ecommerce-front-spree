import CartItemsCounter from '@/app/cart/components/cart-items-counter';
import Products from '@/app/products/page';
import { cookies } from 'next/headers';

const HomePage = () => {
  const nextCookies = cookies();
  const cartToken = nextCookies.get('spree_cart_token');
  return (
    <div>
      <CartItemsCounter cartToken={cartToken}></CartItemsCounter>
      Home Page
      <Products></Products>
    </div>
  );
};

export default HomePage;
