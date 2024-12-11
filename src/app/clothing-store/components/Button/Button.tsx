import React from "react";
import styled from "styled-components";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  primary?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${(props) => (props.primary ? "#007BFF" : "#6C757D")};
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.primary ? "#0056b3" : "#5a6268")};
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: ${(props) => (props.primary ? "#004085" : "#343a40")};
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
`;

const Button: React.FC<ButtonProps> = ({ label, onClick, primary = false }) => {
  return (
    <StyledButton onClick={onClick} primary={primary}>
      {label}
    </StyledButton>
  );
};

export default Button;
