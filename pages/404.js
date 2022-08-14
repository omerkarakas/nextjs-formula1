import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      //router.go(-1);//go back
      router.push('/');
    }, 3000);
  }, [router]);

  return (
    <div className="not-found">
      <h1>Oops...</h1>
      <h2>That page cannot be found</h2>
      <p>
        Go back to <Link href="/">Home Page</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
