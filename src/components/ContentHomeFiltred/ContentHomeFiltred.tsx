import { CardData } from "@/utils/types/typeCard";
import { typeDataSorted } from "@/utils/types/typeDataSorted";
import Card from "../Card";
import styles from "./ContentHomeFiltred.module.scss";

type ComponentProps = {
  data: typeDataSorted[];
};

const ContentHomeFiltred = ({ data }: ComponentProps) => {
  // VARIABLES ----------------------
  // CONDITIONS ---------------------
  // FUNCTIONS ----------------------
  // VARIABLES ----------------------
  return (
    <div className={styles.sortedContainer}>
      {data.map((data: typeDataSorted, index: number) => {
        return (
          <div key={index + data.departure} className={styles.container}>
            <div className={styles.header}>
              <h2>{data.departure}</h2>
            </div>
            <div className={styles.ContentHomeFiltred}>
              {data.data.map((card: CardData, index: number) => {
                return (
                  <Card key={index + "HomePageCards" + card.id} data={card} />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContentHomeFiltred;
