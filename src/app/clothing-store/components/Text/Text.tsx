import styled from "styled-components";

interface TextProps {
  color: string;
  size: number;
  textAlign?: string;
  bold?:boolean;
  fontStyle?:boolean;
}

export const Text = styled.p<TextProps>`
  color: ${({ color }) => color};
  font-weight: ${({bold})=>bold ? "bold" : "500"};
  font-family: sans-serif;
  font-size: ${({ size }) => size}px;
  text-align:${({ textAlign }) => textAlign};
  margin: 0;
  font-style:${({fontStyle})=>fontStyle ? "italic":""};
`;
