import CartTokenCookie from '@/app/utils/interfaces/cart-token-cookie';
import { VariantAttr } from '@/app/utils/interfaces/variant';
import { Button } from '@sajari/react-components';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { addItem } from '../utils/requests/add-item';

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
      const {
        status,
        response: { data, ok },
      } = await addItem(cartToken.value, variant.id, quantity);
      if (status === 200 && ok) {
        // TODO: show success message
      } else {
        // TODO: show error message
      }
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
