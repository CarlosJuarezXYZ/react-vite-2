import styled from "styled-components";

const CarouselContainer = styled.div`
  max-width: 350px;
  margin: 0 auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
  @media (min-width: 600px) {
    max-width: 500px;
  }

  @media (min-width: 900px) {
    max-width: 800px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  @media (min-width: 900px) {
    height: 350px;
  }
`;

export const CarouselImagesStyled = {
  CarouselContainer,
  Image,
};
