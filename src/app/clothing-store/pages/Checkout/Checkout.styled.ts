import styled from "styled-components";

const CheckoutContainer = styled.div`
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const ErrorText = styled.div`
  color: red;
  margin-top: 5px;
`;

const PaymentMethodContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const PaymentOption = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const RadioInput = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 12px 24px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 16px;

  &:hover {
    background-color: #2980b9;
  }
  &:disabled {
    background-color: #b0c4de;
    cursor: not-allowed;
  }
`;

export const CheckoutStyled = {
  CheckoutContainer,
  Section,
  FormGroup,
  Label,
  Input,
  ErrorText,
  PaymentMethodContainer,
  PaymentOption,
  RadioInput,
  Button,
};
