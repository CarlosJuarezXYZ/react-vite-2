import React from "react";
import { EmptyProductsStyled } from "./EmptyProducts.styled";

interface EmptyProductsProps {
  message: string;
}

const { EmptyCartContainer, SadIcon, Message } = EmptyProductsStyled;

const EmptyProducts: React.FC<EmptyProductsProps> = ({ message }) => {
  return (
    <EmptyCartContainer>
      <SadIcon />
      <Message>{message}</Message>
    </EmptyCartContainer>
  );
};

export default EmptyProducts;
