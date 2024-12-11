import React from 'react';
import FilterButton from '../FilterButton/FilterButton';
import { ButtonContainerStyled } from './FilterButtonContainer.styled';

const {ButtonContainer} = ButtonContainerStyled;

interface ButtonContainerProps {
  buttons: string[];
  onButtonClick: (text: string) => void;
}

const FilterButtonContainer: React.FC<ButtonContainerProps> = ({ buttons, onButtonClick }) => {
  return (
    <ButtonContainer>
      {buttons.map((text) => (
        <FilterButton key={text} text={text} onClick={onButtonClick} />
      ))}
    </ButtonContainer>
  );
};

export default FilterButtonContainer;
