import { cookies } from 'next/headers';
const { AUTH0_BASE_URL } = process.env

export const getUser = async () => {
  let res, user = null;
  if (AUTH0_BASE_URL) {
    res = await fetch(`${AUTH0_BASE_URL}/api/auth/me`, {
      headers: {
        cookie: `appSession=${cookies().get('appSession')?.value}`
      }
    })
  }

  if (res?.body) {
    user = await res.json();
  } else {
    user = { 'email': 'anonymous'}
  }

  return user;
}
