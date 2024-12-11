import styled from "styled-components";

const ContentHeader = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  border-radius: 0 0 0 20px;
  margin-bottom: 20px;
  color: #fff;
  background: #007bff;
`;

const ContainerIcons = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  padding: 0px 50px;
  @media (max-width: 800px) {
    gap: 10px;
    padding: 10px 0px;
  }
`;

export const HeaderStyled = {
  ContentHeader,
  ContainerIcons,
};
