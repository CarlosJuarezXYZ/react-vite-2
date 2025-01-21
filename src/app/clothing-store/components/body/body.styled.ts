import styled from "styled-components";

const BodyProductsContainer = styled.div`
  display: grid;
  gap: 30px;
  padding: 50px;
  overflow: hidden;
  flex: 1;

  grid-template-columns: 1fr;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
export const BodyStyled = {
  BodyProductsContainer,
};
