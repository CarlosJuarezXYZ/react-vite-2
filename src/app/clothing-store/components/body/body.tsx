import { FC } from "react";
import CarouselImage from "../carousel/Carousel";

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

const Body: FC = () => {
  return <CarouselImage arrayImages={arrayImages} />;
};

export default Body;
