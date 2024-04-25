import { FC } from "react";
import styled from "styled-components";
import Logo from "../logo/Logo";

const ContainerHeader = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
height:auto;
padding:20px 0px;
background-color:#154C72;
`


const Header:FC = () => {
    return (<ContainerHeader><Logo children='Fashion Store'/></ContainerHeader>)
}

export default Header;