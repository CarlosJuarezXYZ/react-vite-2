import { Drawer } from "antd";
import styled from "styled-components";

const DrawerContainer = styled(Drawer)`
  border: 1px solid blue;
`;

const DrawerBody = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const DrawerStyled = {
  DrawerContainer,
  DrawerBody,
};
