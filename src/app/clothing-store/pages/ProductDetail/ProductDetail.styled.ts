import styled from "styled-components";

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  margin-bottom: 20px;

  @media (max-width: 500px) {
    width: 200px;
    height: 200px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const InfoContainer = styled.div`
  text-align: left;
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 15px;
  color: #333;
`;

const Description = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  color: #555;
`;

const Price = styled.div`
  font-size: 24px;
  color: #e67e22;
  margin-bottom: 15px;

  span {
    text-decoration: line-through;
    color: #bdc3c7;
    margin-left: 10px;
    font-size: 18px;
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

  &:hover {
    background-color: #2980b9;
  }
`;

export const ProductDetailStyled = {
  DetailContainer,
  ImageContainer,
  InfoContainer,
  Title,
  Description,
  Price,
  Button,
};
