import { FC, ReactElement } from "react";
import { Card } from "antd";

export interface CardsProps {
  src: string;
  title: string;
  price: string;
}

const { Meta } = Card;

const CardClothing: FC<CardsProps> = ({ src, title, price }): ReactElement => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src={src} />}
    >
      <Meta title={title} description={`S/${price}`} />
    </Card>
  );
};

export default CardClothing;
