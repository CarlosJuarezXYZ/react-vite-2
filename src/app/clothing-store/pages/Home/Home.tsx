import { FC } from "react";
import Header from "../../components/header/header";
import Body from "../../components/body/body";
import CardClothing from "../../components/card/Card";

const Home: FC = () => {
  return (
    <>
      <Header />
      <Body />
      <CardClothing src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' title='Example' price='20'/>
    </>
  );
};

export default Home;
