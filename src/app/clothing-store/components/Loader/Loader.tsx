import React from "react";
import styled, { keyframes } from "styled-components";
import { LoadingOutlined } from "@ant-design/icons";

// Animación giratoria
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Contenedor centrado
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #282c34; /* Fondo oscuro */
  z-index: 1000;
`;

// Icono animado
const SpinningIcon = styled(LoadingOutlined)`
  width: 100px;
  height: 100px;
  animation: ${spin} 2s linear infinite;
  fill: #61dafb; /* Color de React */
`;

const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <SpinningIcon />
    </LoaderContainer>
  );
};

export default Loader;
