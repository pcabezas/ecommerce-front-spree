import Link from 'next/link';
import { getProducts } from './api/get-products';

const Products = async () => {
  const products = await getProducts();
  return (
    <div>
      {products.map((product) => (
        <div key={product.slug}>
          {product.attributes.name} | {product.attributes.slug} |
          {product.attributes.price}
          <Link href={'/products/' + product.id}>Go PDP</Link>
        </div>
      ))}
    </div>
  );
};

export default Products;
