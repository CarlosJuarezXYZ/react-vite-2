import { FC, useEffect } from "react";
import CarouselImage from "../carousel/Carousel";
import CardClothing from "../card/Card";
import { ClothingActions } from "../../store/action";
import {
  useClothingStoreDispatch,
  useClothingStoreState,
} from "../../store/context";
import { BodyStyled } from "./body.styled";

const arrayImages = [
  {
    src: "https://safestorage.pe/wp-content/uploads/2022/05/ordenado-ropa-closet-safe-storage.jpg",
    width: 100,
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQKfWytSxTEHK1PJIEVkKr0r9i_CZpdCgDD7ks_PCZWA&s",
    width: 100,
  },
  {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL_OBK9_oeD3-4QGon_Ok8u_e7hMjZs-3cWV2KIVmoxg&s",
    width: 100,
  },
];

const { ContentProducts, FlexBox } = BodyStyled;

const Body: FC = () => {
  const dispatchClothing = useClothingStoreDispatch();
  const { productsClothingStore } = useClothingStoreState();

  useEffect(() => {
    const productsStore = async (): Promise<void> => {
      try {
        await ClothingActions.getProductsClothingStore(dispatchClothing);
      } catch (error) {
        throw new Error(error as string);
      }
    };
    productsStore();
  }, []);

  return (
    <div>
      <CarouselImage arrayImages={arrayImages} />
      <FlexBox>
        <h1>Products</h1>
        <ContentProducts>
          {productsClothingStore.map(({ id, src, title, price }) => (
            <CardClothing key={id} src={src} title={title} price={price} />
          ))}
        </ContentProducts>
      </FlexBox>
    </div>
  );
};

export default Body;
