import { updateCheckout } from '@/app/utils/requests/storefront/update-checkout';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(req: NextRequest) {
  const { cartToken, order } = await req.json();
  const response = await updateCheckout(cartToken, {
    order: { ...order, use_billing: true },
  });
  return NextResponse.json({ response, status: 200 });
}
