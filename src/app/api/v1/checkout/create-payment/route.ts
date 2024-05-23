import { createPayment } from '@/app/utils/requests/storefront/create-payment';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { cartToken, payment_method_id } = await req.json();
  const response = await createPayment(cartToken, { payment_method_id }, [
    'payments',
  ]);
  return NextResponse.json({ response, status: 200 });
}
