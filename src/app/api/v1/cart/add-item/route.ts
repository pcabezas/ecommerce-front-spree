import addItem from '@/app/utils/requests/storefront/add-item';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { cartToken, variantId, quantity } = await req.json();
  const response = await addItem(cartToken, variantId, quantity);
  return NextResponse.json({ response, status: 200 });
}
