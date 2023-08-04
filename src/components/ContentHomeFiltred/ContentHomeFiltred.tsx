import { CardData } from "@/utils/types/typeCard";
import { typeDataSorted } from "@/utils/types/typeDataSorted";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card";
import styles from "./ContentHomeFiltred.module.scss";

type ComponentProps = {
  data: typeDataSorted[];
  filter?: string;
};

const ContentHomeFiltred = ({ data, filter }: ComponentProps) => {
  // VARIABLES ----------------------
  // CONDITIONS ---------------------
  const [localData, setLocalData] = useState<typeDataSorted[]>(data);
  // FUNCTIONS ----------------------
  useEffect(() => {
    if (filter !== "") {
      data.map((aux: typeDataSorted) => {
        aux.departure === filter ? setLocalData([aux]) : null;
      });
    } else {
      setLocalData(data);
    }
  }, [filter]);
  // VARIABLES ----------------------
  return (
    <div className={styles.sortedContainer}>
      {localData.map((data: typeDataSorted, index: number) => {
        return (
          <div key={index + data.departure} className={styles.container}>
            {filter ? null : (
              <div className={styles.header}>
                <h2>{data.departure}</h2>
              </div>
            )}
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
