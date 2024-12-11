import { FC, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { InputEvidenceStyled } from "./Search.styled";
import { useClothesStoreDispatch } from "../../store/context";
import { ClothesActionsEnum } from "../../domain/clothes-action.enum";

const { SearchContainer, SearchInput, SearchButton } = InputEvidenceStyled;

const Search: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatchClothe = useClothesStoreDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    dispatchClothe({type:ClothesActionsEnum.SaveSearchProduct,payload:event.target.value});
  };

  const toggleSearch = () => {
    setIsVisible(!isVisible);
    if (!isVisible) {
      setSearchTerm("");
    }
  };
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
        isOpen={isVisible}
        placeholder="Buscar..."
      />
      <SearchButton onClick={toggleSearch}>
        <AiOutlineSearch color="#fff" size={30} />
      </SearchButton>
    </SearchContainer>
  );
};

export default Search;
