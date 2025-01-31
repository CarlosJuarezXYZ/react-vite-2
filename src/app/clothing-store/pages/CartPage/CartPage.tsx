import React from "react";
import {
  useClothesStoreDispatch,
  useClothesStoreState,
} from "../../store/context";
import { useNavigate } from "react-router-dom";
import { clothesRoutes } from "../../clothes-routes";
import { CartPageStyled } from "./CartPage.styled";
import { ClothesActionsEnum } from "../../domain/clothes-action.enum";
import EmptyProducts from "../../components/EmptyProducts/EmptyProducts";

const {
  CartContainer,
  CartItemsGrid,
  CartItemContainer,
  ItemImage,
  ItemDetails,
  ItemTitle,
  ItemPrice,
  Quantity,
  TotalContainer,
  Button,
} = CartPageStyled;

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const disptachClothe = useClothesStoreDispatch();
  const calculateTotal = () => {
    return shoppingCart
      .reduce((total, item) => total + item.price * item.quantity!, 0)
      .toFixed(2);
  };

  const { shoppingCart } = useClothesStoreState();

  const handleProceedToCheckout = () => {
    navigate(clothesRoutes.checkout);
  };

  const handleRemoveItem = (id: number) => {
    disptachClothe({ type: ClothesActionsEnum.DeleteProduct, payload: id });
  };

  return shoppingCart.length === 0 ? (
    <EmptyProducts message="No products in the cart" />
  ) : (
    <CartContainer>
      <CartItemsGrid>
        {shoppingCart.map((item) => (
          <CartItemContainer key={item.id}>
            <ItemImage src={item.src} alt={item.title} />
            <ItemDetails>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemPrice>${item.price}</ItemPrice>
              <Quantity>Quantity: {item.quantity}</Quantity>
              <Button onClick={() => handleRemoveItem(item.id)}>Remove</Button>
            </ItemDetails>
          </CartItemContainer>
        ))}
      </CartItemsGrid>
      <TotalContainer>Total: ${calculateTotal()}</TotalContainer>
      <Button onClick={handleProceedToCheckout}>Proceed to Checkout</Button>
    </CartContainer>
  );
};

export default CartPage;
