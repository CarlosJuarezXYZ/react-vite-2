import { FC, ReactElement } from "react";

import styled from "styled-components";
import ColorsCloting from "../../ui/colors";

interface LogoProps {
  children: string | ReactElement;
  onClick?: ()=>void;
}

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

const Logo: FC<LogoProps> = ({ children,onClick }) => {
  return <ContainerLogo onClick={onClick}>{children}</ContainerLogo>;
};

export default Logo;
