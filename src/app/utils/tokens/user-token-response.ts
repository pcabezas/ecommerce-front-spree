import Cookies from 'js-cookie';
import type { IOAuthToken } from '../interfaces/user-token-response';
import UserTokenResponseParseError from '../errors/user-token-response-error';

const USER_TOKEN_NAME = process.env.USER_TOKEN_NAME || 'spree_auth_token';

export const getUserTokenResponse = (): IOAuthToken | undefined => {
  const stringifiedToken = Cookies.get(USER_TOKEN_NAME);

  if (!stringifiedToken) {
    return undefined;
  }

  try {
    const token: IOAuthToken = JSON.parse(stringifiedToken);
    return token;
  } catch (parseError) {
    throw new Error('Could not parse stored user token response.');
  }
};

/**
 * Retrieves the saved user token response. If the response fails json parsing,
 * removes the saved token and returns @type {undefined} instead.
 */
export const ensureUserTokenResponse = (): IOAuthToken | undefined => {
  try {
    return getUserTokenResponse();
  } catch (error) {
    if (error instanceof UserTokenResponseParseError) {
      removeUserTokenResponse();

      return undefined;
    }

    throw error;
  }
};

export const setUserTokenResponse = (token: IOAuthToken) => {
  const cookieOptions = {
    expires: 7200 as number,
  };

  Cookies.set(USER_TOKEN_NAME, JSON.stringify(token), cookieOptions);
};

export const removeUserTokenResponse = () => {
  Cookies.remove(USER_TOKEN_NAME);
};
