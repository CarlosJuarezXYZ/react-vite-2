import styled from "styled-components";

const CartContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const CartItemsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const CartItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const ItemImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const ItemDetails = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const ItemTitle = styled.h3`
  font-size: 18px;
  margin: 0;
  color: #333;
`;

const ItemPrice = styled.p`
  font-size: 16px;
  margin: 5px 0;
  color: #555;
`;

const Quantity = styled.p`
  font-size: 14px;
  color: #777;
`;

const TotalContainer = styled.div`
  text-align: right;
  margin-top: 20px;
  font-size: 22px;
  color: #e67e22;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 20px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 16px;

  &:hover {
    background-color: #2980b9;
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    font-size: 14px;
  }
`;

export const CartPageStyled = {
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
};
