import { FC, ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface NavbarInterface {
  icon: ReactElement;
  route: string;
  name: string;
}

const NavbarContainer = styled.nav`
  display: flex;
  gap: 10px;
`;

const ContainerRoute = styled.div`
  display: flex;
  gap: 10px;
`;

const Navbar: FC<NavbarInterface[]> = (navbarArray) => {
  const navigate = useNavigate();

  return (
    <NavbarContainer>
      {navbarArray.map(({ icon, route, name }) => (
        <ContainerRoute onClick={() => navigate(route)}>
          {icon} {name}
        </ContainerRoute>
      ))}
    </NavbarContainer>
  );
};

export default Navbar;
