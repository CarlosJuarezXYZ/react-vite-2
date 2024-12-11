import { Drawer, Flex } from "antd";
import {
  UnorderedListOutlined,
  BookOutlined,
  LinkedinOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";

import { Text } from "../Text/Text";
import { Image } from "antd";
import { FC, useState } from "react";
import ColorsCloting from "../../ui/colors";
import { DrawerStyled } from "./Drawer.styled";
import { windowOpen } from "../../../utilities/window";

const { DrawerBody } = DrawerStyled;

export const DrawerEvidence: FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  
  return (
    <>
      <Drawer
        onClose={onClose}
        open={open}
        placement="left"
        closable={false}
        getContainer={false}
        width={340}
        styles={{ body: { padding: 0, backgroundColor: "#021220" } }}
      >
        <Image
          width="100%"
          height={250}
          src="/images/perfil-about.png"
          preview={false}
        />
        <DrawerBody>
          <Text fontStyle color={ColorsCloting.white} bold size={24}>
            Carlos Juarez
          </Text>
          <Flex gap={20}>
            <LinkedinOutlined
              style={{
                fontSize: "32px",
                color: ColorsCloting.white,
                cursor: "pointer",
              }}
              onClick={()=>windowOpen("https://www.linkedin.com/in/carlos-ju%C3%A1rez-xyz/")}
            />
            <BookOutlined
              style={{
                fontSize: "32px",
                color: ColorsCloting.white,
                cursor: "pointer",
              }}
            />
            <WhatsAppOutlined
              style={{
                fontSize: "32px",
                color: ColorsCloting.white,
                cursor: "pointer",
              }}
              onClick={()=>windowOpen("https://api.whatsapp.com/send?phone=51982279718")}
            />
          </Flex>
          <Text fontStyle color={ColorsCloting.white} bold size={16}>
            carlostuna015@gmail.com
          </Text>
        </DrawerBody>
      </Drawer>
      <UnorderedListOutlined onClick={showDrawer} />
    </>
  );
};
