import { cookies } from 'next/headers';

const HomePage = () => {
  const nextCookies = cookies();
  const cartToken = nextCookies.get('spree_cart_token');
  return <div>Hola Mundo Home2</div>;
};

export default HomePage;
