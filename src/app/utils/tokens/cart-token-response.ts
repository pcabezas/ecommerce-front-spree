'use client';

import { setCookie, getCookie, deleteCookie } from 'cookies-next';

const CART_COOKIE_NAME = process.env.CART_COOKIE_NAME || 'spree_cart_token';

export const getCartToken = () => {
  return getCookie(CART_COOKIE_NAME);
};

export const setCartToken = (cartToken: string) => {
  setCookie(CART_COOKIE_NAME, cartToken);
};

export const removeCartToken = () => {
  deleteCookie(CART_COOKIE_NAME);
};
