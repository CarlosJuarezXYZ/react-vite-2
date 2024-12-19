import { FC } from "react";
import Logo from "../logo/Logo";
import { AiFillHome, AiOutlineShoppingCart } from "react-icons/ai";
import { DrawerEvidence } from "../Drawer/Drawer";
import { useNavigate } from "react-router-dom";
import { clothesRoutes } from "../../clothes-routes";
import Search from "../Search/Search";
import { HeaderStyled } from "./Header.styled";

const {ContentHeader,ContainerIcons} = HeaderStyled;

const Header: FC = () => {
  const navigate = useNavigate();
  return (
    <ContentHeader>
      <Logo>Charly</Logo>
      <ContainerIcons>
          <Search/>
          <AiFillHome  style={{ cursor: "pointer" }}  onClick={()=>navigate(clothesRoutes.home)} size={30} />
          <AiOutlineShoppingCart  style={{ cursor: "pointer" }} onClick={()=>navigate(clothesRoutes.cartPage)} size={30} />
          <DrawerEvidence />
        </ContainerIcons>
    </ContentHeader>
  );
};

export default Header;
