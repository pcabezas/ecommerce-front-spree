import getCartItemsCount from '@/app/utils/requests/storefront/cart-items-count';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const token: string = searchParams.get('cartToken')!;
  const response = await getCartItemsCount(token);
  return NextResponse.json({ response, status: 200 });
}
