import React from "react";
import {
  useClothesStoreDispatch,
  useClothesStoreState,
} from "../../store/context";
import { Flex } from "antd";
import { useNavigate } from "react-router-dom";
import { clothesRoutes } from "../../clothes-routes";
import { ClothesActions } from "../../store/action";
import { ShoppingCartInterface } from "../../domain/clothes";
import { ProductDetailStyled } from "./ProductDetail.styled";

const {
  DetailContainer,
  ImageContainer,
  InfoContainer,
  Title,
  Description,
  Price,
  Button,
} = ProductDetailStyled;

const ProductDetail: React.FC = () => {
  const { productClothesDetail } = useClothesStoreState();
  const dispatchClothing = useClothesStoreDispatch();
  const navigate = useNavigate();

  const onContinue = ({
    id,
    title,
    price,
    quantity,
    src,
  }: ShoppingCartInterface): void => {
    ClothesActions.saveProductClotheFake(dispatchClothing, {
      id,
      title,
      price,
      quantity,
      src,
    });
    navigate(clothesRoutes.cartPage);
  };

  return (
    <DetailContainer>
      <ImageContainer>
        <img
          src={productClothesDetail?.image}
          alt={productClothesDetail?.title}
        />
      </ImageContainer>
      <InfoContainer>
        <Title>{productClothesDetail?.title}</Title>
        <Description>{productClothesDetail?.description}</Description>
        <Price>
          ${productClothesDetail?.offerPrice}
          <span>${productClothesDetail?.realPrice}</span>
        </Price>
        <Flex justify="space-between">
          <Button
            onClick={() =>
              onContinue({
                id: productClothesDetail?.id as number,
                title: productClothesDetail?.title as string,
                price: productClothesDetail?.offerPrice as number,
                src: productClothesDetail?.image as string,
              })
            }
          >
            Add to Cart
          </Button>
          <Button onClick={() => navigate(-1)}>Volver</Button>
        </Flex>
      </InfoContainer>
    </DetailContainer>
  );
};

export default ProductDetail;
