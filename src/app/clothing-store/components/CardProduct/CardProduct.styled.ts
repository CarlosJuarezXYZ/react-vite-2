import styled from "styled-components";

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 250px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  height: 430px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  padding: 0px 0px 20px 0px;
  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    max-width: 300px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  padding-top: 75%;
  background-size: cover;
  background-position: center;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 16px;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px 16px;
`;

const OfferPrice = styled.span`
  font-size: 1.2rem;
  color: #d32f2f;
  font-weight: bold;
`;

const RealPrice = styled.span`
  font-size: 1rem;
  color: #999;
  text-decoration: line-through;
`;

const BestSellerTag = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #1677ff;
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  text-transform: uppercase;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Espaciar los botones */
  margin-top: auto; /* Empujar el contenedor hacia abajo */
  padding: 0 16px;
  gap: 10px; /* Espacio entre botones */
`;

export const CardProductStyled = {
  CardContainer,
  ImageContainer,
  Description,
  PriceContainer,
  OfferPrice,
  RealPrice,
  BestSellerTag,
  ButtonsContainer,
};
