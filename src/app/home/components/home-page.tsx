import Link from 'next/link';
import CartItemsCounter from '@/app/cart/components/cart-items-counter';
import Products from '@/app/products/page';

const HomePage = () => {
  return (
    <div>
      <div>
        <Link href={'/'}>Home</Link>
      </div>
      <CartItemsCounter />
      <div>
        Home Page
        <Products />
      </div>
    </div>
  );
};

export default HomePage;
