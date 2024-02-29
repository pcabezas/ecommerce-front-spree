import CartTokenCookie from '@/app/utils/interfaces/cart-token-cookie';
import { GuestUserForm } from './guest-user-form';

interface Props {
  cartToken: CartTokenCookie;
}
const Registration = ({ cartToken }: Props) => {
  return (
    <div>
      <GuestUserForm cartToken={cartToken}></GuestUserForm>
    </div>
  );
};

export default Registration;
