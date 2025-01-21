import styled from "styled-components";
import ColorsCloting from "../../ui/colors";

const Content = styled.div`

`;
const Content1 = styled.div`
  display: flex;
  width: 100%;
  color: ${ColorsCloting.white};
  background-color: ${ColorsCloting.black};
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media (max-width: 765px) {
    flex-direction: column;
    gap: 0px;
  }
`;
const ContentFooter = styled.div`
  height: auto;
  display: block;
  align-items: start;
  justify-content: center;
  text-align: center;
`;

const ContentIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const Copyright = styled.div`
  text-align: center;
  background-color: #1a252f;
  padding: 20px;
  color: #bdc3c7;
  font-size: 14px;
`;

const FooterSection = styled.div`
  @media (max-width: 765px) {
    text-align: center;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  ul li {
    margin-bottom: 10px;
  }

  ul li a {
    color: #bdc3c7;
    text-decoration: none;

    &:hover {
      color: #fff;
    }
  }
`;

export const FooterStyled = {
  ContentFooter,
  ContentIcons,
  Copyright,
  Content,
  Content1,
  FooterSection,
};
