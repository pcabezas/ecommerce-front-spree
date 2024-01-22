'use client'

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const Session = () => {
  const router = useRouter();
  const ensureCartTokenExist = async () => {
    const res = await fetch('http://0.0.0.0:3000/auth/api/cart-token');
    if (res.ok) {
      router.refresh();
    } else {
      console.log('algo fallo');
    }
  };

  useEffect(() => {
    ensureCartTokenExist();
  }, []);

  return <></>;
};
