import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import { SuccessModalStyled } from "./SuccessModal.styled";

const {StyledModal} = SuccessModalStyled;

const SuccessModal: React.FC<{ isVisible: boolean; onClose: () => void }> = ({ isVisible, onClose }) => {
  return (
    <StyledModal
      visible={isVisible}
      onCancel={onClose}
      footer={null}
      centered
      width={400}
    >
      <CheckCircleOutlined className="icon-check" />
      <div className="thank-you-message">¡Gracias por tu compra!</div>
      <div className="thank-you-detail">Tu boleta llegará pronto a tu correo.</div>
    </StyledModal>
  );
};

export default SuccessModal;
