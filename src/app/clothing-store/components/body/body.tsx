import { FC, useEffect, useState } from "react";
import CardProduct from "../CardProduct/CardProduct";
import CarouselImages from "../CarouselImages/CarouselImages";
import FilterButtonContainer from "../FilterButtonContainer/FilterButtonContainer";
import {
  useClothesStoreDispatch,
  useClothesStoreState,
} from "../../store/context"
import { ClothesActions } from "../../store/action";
import { Categories } from "../../domain/categories";
import { useNavigate } from "react-router-dom";
import { clothesRoutes } from "../../clothes-routes";
import { BodyStyled } from "./body.styled";
import { categories } from "./categories";

const { BodyProductsContainer, BodyContainer } = BodyStyled;

const Body:FC = () => {
  const dispatchClothing = useClothesStoreDispatch();
  const { productsClothesFakeStore,searchProduct } = useClothesStoreState();
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState(
    productsClothesFakeStore
  );

  const filterBySearchTerm = searchProduct
    ? filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchProduct.toLowerCase())
      )
    : filteredProducts;

  const [visibleItems, setVisibleItems] = useState<any>([]);

  useEffect(() => {
    let startIndex = 0;
    const itemsPerPage = 5;

    const updateVisibleItems = () => {
      const nextItems = productsClothesFakeStore
        .slice(startIndex, startIndex + itemsPerPage)
        .map((product) => ({
          id: product.id,
          src: product.image,
        }));

      setVisibleItems(nextItems);

      startIndex =
        (startIndex + itemsPerPage) % productsClothesFakeStore.length;
    };

    updateVisibleItems();

    const intervalId = setInterval(updateVisibleItems, 5000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productsClothesFakeStore]);

  useEffect(() => {
    setFilteredProducts(productsClothesFakeStore);
  }, [productsClothesFakeStore]);

  useEffect(() => {
    const productsClothe = async (): Promise<void> => {
      try {
        await ClothesActions.getProductsClothesFake(dispatchClothing);
      } catch (error) {
        throw new Error(error as string);
      }
    };
    productsClothe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleButtonClick = (category: string) => {
    if (category === Categories.All) {
      setFilteredProducts(productsClothesFakeStore);
    } else {
      setFilteredProducts(
        productsClothesFakeStore.filter(
          (product) => product.category === category
        )
      );
    }
  };

  const onContinue = async (id: number) => {
    try {
      await ClothesActions.getProductDetailClothesFake(dispatchClothing, id);
      navigate(clothesRoutes.productDetail);
    } catch (error) {
      throw new Error(error as string);
    }
  };

  return (
    <BodyContainer>
      <CarouselImages images={visibleItems} />
      <FilterButtonContainer
        buttons={categories}
        onButtonClick={handleButtonClick}
      />
      <BodyProductsContainer>
        {filterBySearchTerm.map(
          ({
            id,
            image,
            title,
            description,
            offerPrice,
            realPrice,
            isBetSeller,
          }) => (
            <div>
             <CardProduct
              key={id}
              id={id}
              image={image}
              title={title}
              description={description}
              offerPrice={offerPrice}
              realPrice={realPrice}
              isBestSeller={isBetSeller}
              onClick={() => onContinue(id)}
            />
            </div>
          )
        )}
      </BodyProductsContainer>
    </BodyContainer>
  );
};

export default Body;
