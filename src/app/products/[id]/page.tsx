import { ProductResponse } from '@/app/utils/interfaces/product-response';
import { getProduct } from '../api/get-product';
import { normalizeProduct } from '@/app/utils/normalize-product-response';
import { ProductAttr } from '@/app/utils/interfaces/product';
import ProductContainer from '../components/product-container';

const Product = async ({ params }: { params: { id: number } }) => {
  const { id } = params;
  const response: ProductResponse = await getProduct(id, [
    'variants',
    'option_types',
    'variants.option_values',
  ]);
  const product: ProductAttr = normalizeProduct(response);
  return (
    <div>
      <ProductContainer product={product}></ProductContainer>
    </div>
  );
};

export default Product;
