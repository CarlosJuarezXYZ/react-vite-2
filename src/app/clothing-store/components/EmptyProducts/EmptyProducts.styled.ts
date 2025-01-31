import styled from "styled-components";
import { FaSadTear } from 'react-icons/fa';

const EmptyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100vh;
  text-align: center;
  width:100vw;
`;

const SadIcon = styled(FaSadTear)`
  font-size: 150px;
  color: #888;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 24px;
  color: #555;
  font-weight: 500;
`;

export  const EmptyProductsStyled = {
    EmptyCartContainer,
    SadIcon,
    Message
}