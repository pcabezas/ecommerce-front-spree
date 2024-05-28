'use server';

import {
  checkCartTokenCookie,
  forceToRefreshCartTokenCookie,
} from '@/app/auth/utils/check-cart-token-cookie';
import { getCart } from '@/app/utils/requests/storefront/get-cart';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { CART_COOKIE_NAME } from '@/app/utils/constants';

const ensureCartOrRefreshToken = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get(CART_COOKIE_NAME)!;
  const cartResponse = await getCart(token.value, []);
  if (!cartResponse.ok && cartResponse.data === undefined) {
    const res: boolean = await forceToRefreshCartTokenCookie();
    return res;
  }
  return true;
};

export async function GET(req: NextRequest) {
  const res: boolean = await checkCartTokenCookie();
  const cartRes: boolean = await ensureCartOrRefreshToken();
  return new NextResponse('success', {
    status: res && cartRes ? 200 : 400,
  });
}
