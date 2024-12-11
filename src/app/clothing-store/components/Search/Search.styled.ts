import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  max-width: 300px;
  margin: 0 auto;
`;

const SearchInput = styled.input<{ isOpen: boolean }>`
  width: ${({ isOpen }) => (isOpen ? "200px" : "0")};
  padding: ${({ isOpen }) => (isOpen ? "10px" : "0")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  transition: width 0.3s ease, opacity 0.3s ease, padding 0.3s ease;
  border: none;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  outline: none;
  &:focus {
    outline: none;
  }
  @media (max-width: 500px) {
    width: 120px;
    height: 10px;
    border: none;
  }
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0px;
  align: center;
  position: relative;
  z-index: 1;
  &:hover {
    color: #333;
  }
  &:focus {
    outline: none;
  }
`;

const SearchIcon = styled.div`
  background: transparent;
  cursor: pointer;
`;

export const InputEvidenceStyled = {
  SearchContainer,
  SearchInput,
  SearchIcon,
  SearchButton,
};
