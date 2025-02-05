import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { LayoutStyled } from "./Layout.styled";

const { LayoutContainer, MainContent } = LayoutStyled;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
    <LayoutContainer>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </LayoutContainer>
    </>
  );
};

export default Layout;
