import { FC } from "react";
import { Carousel } from "antd";
import { Image } from "antd";

export interface CarouselProps {
  src: string;
}

const CarouselImage: FC<any> = ({ arrayImages }) => {
  return (
    <Carousel autoplay>
      {arrayImages.map(({ src }: CarouselProps) => {
        return (
          <Image
            preview={false}
            key={src}
            height={500}
            width="100%"
            src={src}
          />
        );
      })}
    </Carousel>
  );
};

export default CarouselImage;
