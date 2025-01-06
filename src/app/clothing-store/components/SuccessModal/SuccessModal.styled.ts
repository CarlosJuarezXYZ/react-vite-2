import { Modal } from "antd";
import styled from "styled-components";

const StyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 12px;
  }
  .ant-modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    animation: fadeIn 0.5s ease-in-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .icon-check {
    font-size: 48px;
    color: #52c41a;
    margin-bottom: 16px;
  }

  .thank-you-message {
    font-size: 18px;
    font-weight: 500;
    color: #333;
    margin-top: 8px;
  }

  .thank-you-detail {
    font-size: 14px;
    color: #666;
    margin-top: 4px;
  }
`;

export const SuccessModalStyled = {
    StyledModal
}