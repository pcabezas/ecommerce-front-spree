import Link from 'next/link';
import { getProducts } from './utils/requests/get-products';

export default async function Products() {
  const {
    status,
    response: { data, ok },
  } = await getProducts();

  if (status !== 200 || (status === 200 && !ok)) {
    throw new Error('Error giving products');
  }

  return (
    <div>
      {data.map((product) => (
        <div key={product.slug}>
          {product.attributes.name} | {product.attributes.slug} |
          {product.attributes.price}
          <Link href={'/products/' + product.id}>Go PDP</Link>
        </div>
      ))}
    </div>
  );
}
