import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


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
