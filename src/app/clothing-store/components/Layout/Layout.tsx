import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../header/header';


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
    <Header/>
      <main>{children}</main>
    <Footer/>
    </>
  );
};

export default Layout;
