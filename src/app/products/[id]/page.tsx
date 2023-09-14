import { ProductResponse } from '@/app/utils/interfaces/product-response';
import { getProduct } from '../api/get-product';
import { normalizeProduct } from '@/app/utils/normalize-product-response';
import { ProductAttr } from '@/app/utils/interfaces/product';

const Product = async ({ params }: { params: { id: number } }) => {
  const { id } = params;
  const response: ProductResponse = await getProduct(id, [
    'variants',
    'option_types',
    'variants.option_values',
  ]);
  const product: ProductAttr = normalizeProduct(response);
  const { variants } = product;
  const { option_types } = product;

  return (
    <div>
      {product.name}
      {variants &&
        variants.length > 0 &&
        variants.map((variant) => <div key={variant.id}>{variant.sku}</div>)}
    </div>
  );
};

export default Product;
