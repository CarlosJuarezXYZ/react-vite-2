import React from "react";
import Footer from "../Footer/Footer";
import { LayoutStyled } from "./Layout.styled";
import Header from "../Header/Header";

const { LayoutContainer, MainContent } = LayoutStyled;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
