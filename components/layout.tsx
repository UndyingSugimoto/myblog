import React from 'react';
import Alert from './alert';
import Footer from './footer';
import Meta from './meta';

type Props = {
  preview?: boolean;
  meta?: Meta;
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ preview, meta, children }) => {
  return (
    <>
      {meta ? meta : <Meta />}
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
