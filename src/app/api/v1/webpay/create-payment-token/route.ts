import { createWebpayToken } from '@/app/utils/requests/storefront/create-webpay-token';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { cartToken, payment_id } = await req.json();
  const response = await createWebpayToken(cartToken, payment_id);
  return NextResponse.json({ response, status: 200 });
}
