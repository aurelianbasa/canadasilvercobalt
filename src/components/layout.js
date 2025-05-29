import * as React from 'react';

import Header from '@components/header';
import Footer from '@components/footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className='bg-beigeLight'>{children}</main>
      <Footer />
    </>
  );
}
