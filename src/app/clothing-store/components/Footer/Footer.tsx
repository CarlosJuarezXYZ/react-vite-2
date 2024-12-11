import { FC } from "react";
import { FooterStyled } from "./Footer.styled";
import { WhatsAppOutlined } from "@ant-design/icons";
import { YoutubeOutlined } from "@ant-design/icons";
import { TikTokOutlined } from "@ant-design/icons";
import { FacebookOutlined } from "@ant-design/icons";

const {
  ContentFooter,
  Content1,
  FooterSection,
  ContentIcons,
  Copyright,
  Content,
} = FooterStyled;
const Footer: FC = () => {
  return (
    <Content>
      <Content1>
        <ContentFooter>
          <h2>Follow us</h2>
          <ContentIcons>
            <WhatsAppOutlined style={{ fontSize: "35px", color: "#08c" }} />
            <YoutubeOutlined style={{ fontSize: "35px", color: "#08c" }} />
            <TikTokOutlined style={{ fontSize: "35px", color: "#08c" }} />
            <FacebookOutlined style={{ fontSize: "35px", color: "#08c" }} />
          </ContentIcons>
        </ContentFooter>
        <FooterSection>
          <h2>Contact</h2>
          <ul>
            <li>Email: info@company.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 123 Street, City, Country</li>
          </ul>
        </FooterSection>
      </Content1>
      <Copyright>
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </Copyright>
    </Content>
  );
};

export default Footer;
