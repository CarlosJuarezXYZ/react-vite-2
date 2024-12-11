import React from "react";
import { RateProduct, ShoppingCartInterface } from "../../domain/clothes";
import { CardProductStyled } from "./CardProduct.styled";
import Button from "antd/es/button";
import { useClothesStoreDispatch } from "../../store/context";
import { ClothesActions } from "../../store/action";
import { Stack } from "@mui/material";

interface CardProps {
  id:number;
  image: string;
  title: string;
  offerPrice: number;
  realPrice: number;
  onClick?:()=>void;
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
  id,
  image,
  title,
  offerPrice,
  realPrice,
  isBestSeller,
  rating,
  onClick
}) => {
  const dispatchClothing = useClothesStoreDispatch();
  const onSaveProductCart = ({
    id,
    title,
    price,
    src,
  }: ShoppingCartInterface): void => {
    ClothesActions.saveProductClotheFake(dispatchClothing, {
      id,
      title,
      price,
      src,
    });
    alert(`${title} add`);
  };
  console.log({rating});
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
      <Button type="link" onClick={()=>onSaveProductCart({id:id,title:title,price:offerPrice,src:image})}>Add to cart</Button>
      </ButtonsContainer>
    </CardContainer>
  );
};

export default CardProduct;
