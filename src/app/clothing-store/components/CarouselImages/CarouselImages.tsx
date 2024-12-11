import React from "react";
import { Carousel } from "antd";
import { CarouselImagesStyled } from "./CarouselImages.styled";

interface ImageCarouselProps {
  images: { id: number; src: string }[];
}

const { CarouselContainer, Image } = CarouselImagesStyled;

const CarouselImages: React.FC<ImageCarouselProps> = ({ images }) => {
  return (
    <CarouselContainer>
      <Carousel autoplay>
        {images.map((image) => (
          <div key={image.id}>
            <Image src={image.src} alt={`Image ${image.id}`} />
          </div>
        ))}
      </Carousel>
    </CarouselContainer>
  );
};

export default CarouselImages;
