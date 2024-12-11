import React from "react";
import { FilterButtonStyled } from "./FilterButton.styled";

interface FilterButtonProps {
  text: string;
  onClick: (text: string) => void;
}

const { Button } = FilterButtonStyled;

const FilterButton: React.FC<FilterButtonProps> = ({ text, onClick }) => {
  const handleClick = () => {
    onClick(text);
  };

  return <Button onClick={handleClick}>{text}</Button>;
};

export default FilterButton;
