import { FC, ReactElement } from "react";
import { LogoStyled } from "./Logo.styled";

const {ContainerLogo} = LogoStyled;

interface LogoProps {
  children: string | ReactElement;
  onClick?: ()=>void;
}



const Logo: FC<LogoProps> = ({ children,onClick }) => {
  return <ContainerLogo onClick={onClick}>{children}</ContainerLogo>;
};

export default Logo;
