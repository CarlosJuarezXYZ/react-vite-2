import { FC, ReactElement } from "react";

import styled from "styled-components";
import ColorsCloting from "../../ui/colors";

interface LogoProps {
  children: string | ReactElement;
}

const ContainerLogo = styled.div`
  display: flex;
  align-items: start;
  font-size: 50px;
  justify-content: start;
  color: ${ColorsCloting.white};
  font-weight: bold;
  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
`;

const Logo: FC<LogoProps> = ({ children }) => {
  return <ContainerLogo>{children}</ContainerLogo>;
};

export default Logo;
