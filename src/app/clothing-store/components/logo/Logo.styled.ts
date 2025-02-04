import styled from "styled-components";
import ColorsCloting from "../../ui/colors";

const ContainerLogo = styled.div`
  display: flex;
  align-items: start;
  font-style:italic;
  font-size: 50px;
  justify-content: start;
  color: ${ColorsCloting.white};
  font-weight: bold;
  //width:200px;
  padding:0;
  //border:1px solid black;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
  }
`;

export const LogoStyled = {
  ContainerLogo,
};