'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const Session = () => {
  const router = useRouter();
  const ensureCartTokenExist = async () => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_API_URL + '/auth/cart-token',
    );
    if (res.status === 200) {
      router.refresh();
    } else {
      console.error('algo fallo');
    }
  };

  useEffect(() => {
    ensureCartTokenExist();
  }, []);

  return <></>;
};
