import { cookies } from 'next/headers';

export const getUser = async () => {
  const res = await fetch(`${process.env.AUTH0_BASE_URL}/api/auth/me`, {
    headers: {
      cookie: `appSession=${cookies().get('appSession')?.value}`
    }
  })
  let user;

  if (res.body !== null) {
    user = await res.json();
  } else {
    user = { 'email': 'anonymous'}
  }

  return user;
}
