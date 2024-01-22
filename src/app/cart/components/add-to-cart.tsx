import CartTokenCookie from '@/app/utils/interfaces/cart-token-cookie';
import { VariantAttr } from '@/app/utils/interfaces/variant';
import { Button } from '@sajari/react-components';
import { useState } from 'react';
import addItem from '../api/add-item';
import { useRouter } from 'next/navigation';

const AddToCart = ({
  cartToken,
  variant,
  quantity,
}: {
  cartToken: CartTokenCookie;
  variant: VariantAttr;
  quantity: number;
}) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const addToCart = async () => {
    setLoading(true);
    try {
      const order = await addItem(cartToken.value, variant.id, quantity);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const buttonHandle = async (e) => {
    await addToCart();
    router.refresh();
  };

  return (
    <div>
      <Button
        size="lg"
        appearance="primary"
        aria-label="ADD TO CART"
        onClick={buttonHandle}
        loading={loading}
      >
        ADD TO CART
      </Button>
    </div>
  );
};

export default AddToCart;
