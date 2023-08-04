import { CardData } from "@/utils/types/typeCard";
import Card from "../Card";
import styles from "./ContentHome.module.scss";

type ComponentProps = {
  dataToShow: CardData[];
};

const ContentHome = ({ dataToShow }: ComponentProps) => {
  // VARIABLES ----------------------
  // CONDITIONS ---------------------
  // FUNCTIONS ----------------------
  console.log(dataToShow);
  // VARIABLES ----------------------
  return (
    <div className={styles.ContentHome}>
      {dataToShow?.map((card: CardData, index: number) => {
        return <Card key={index + "HomePageCards" + card.id} data={card} />;
      })}
    </div>
  );
};

export default ContentHome;
