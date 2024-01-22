'use server'

import { NextRequest, NextResponse } from 'next/server';
import checkCartTokenCookie from '../../utils/check-cart-token-cookie';

export async function GET(req: NextRequest) {
  const res: boolean = await checkCartTokenCookie();
  return new NextResponse('success', {
    status: res ? 200 : 400,
  });
}

/*
export async function GET(request: Request) {
  try {
    console.log("EJECUTANDO GET COOKIE");
    const cookieStore = cookies();
    const token = cookieStore.get(CART_COOKIE_NAME);
    console.log("GET COOKIE TOKEN", token);

    return Response.json({ status: 200, token });
  } catch (error) {
    return Response.json({ error: error, status: 400 });
  }
}


export async function GET(request: NextRequest) {
  console.log("Executing")
  try {
    const token: CartTokenCookie = { value: 'ABC123455'};
    const test = `${CART_COOKIE_NAME}=${JSON.stringify(token)}`;
    return new NextResponse('success', {
      status: 200,
      headers: {
        'Set-Cookie': `${test}; sameSite=strict; httpOnly=true;`,
      },
    });
  } catch (error) {
    return new Response('not working');
  }
}
*/
