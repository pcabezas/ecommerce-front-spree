import CartTokenCookie from '@/app/utils/interfaces/cart-token-cookie';
import { AddressForm } from './address-form';

interface Props {
  cartToken: CartTokenCookie;
}

const Address = ({ cartToken }: Props) => {
  return <AddressForm cartToken={cartToken}></AddressForm>;
};

export default Address;
