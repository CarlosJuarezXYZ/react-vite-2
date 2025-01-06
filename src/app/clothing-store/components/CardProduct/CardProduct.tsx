import React from "react";
import { RateProduct } from "../../domain/clothes";
import { CardProductStyled } from "./CardProduct.styled";
import Button from "antd/es/button";
import { Stack } from "@mui/material";

interface CardProps {
  image: string;
  title: string;
  offerPrice: number;
  realPrice: string;
  onClick?:()=>void;
  onSaveProduct?:()=>void;
  description?: string;
  isBestSeller?: boolean;
  rating?: RateProduct;
}

const {
  CardContainer,
  ImageContainer,
  PriceContainer,
  OfferPrice,
  RealPrice,
  BestSellerTag,
  ButtonsContainer,
} = CardProductStyled;

const CardProduct: React.FC<CardProps> = ({
  image,
  title,
  offerPrice,
  realPrice,
  isBestSeller,
  onClick,
  onSaveProduct
}) => {

  return (
    <CardContainer>
      {isBestSeller && <BestSellerTag>Más Vendido</BestSellerTag>}
      <Stack>
      <ImageContainer style={{ backgroundImage: `url(${image})` }} />
      <h4>{title}</h4>
      </Stack>
      <PriceContainer>
        <OfferPrice>${offerPrice}</OfferPrice>
        <RealPrice>${realPrice}</RealPrice>
      </PriceContainer>
      <ButtonsContainer>
      <Button onClick={onClick} type='primary'>ver mas detalle</Button>
      <Button type="link" onClick={onSaveProduct}>Add to cart</Button>
      </ButtonsContainer>
    </CardContainer>
  );
};

export default CardProduct;
