import styles from "./Card.module.scss";
import { textCard } from "../../utils/data/text_Component_Card";

import { useState, useEffect } from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { cFontSize } from "@/utils/constants/cFontSizes";
import Button from "../Button";
import { CardData } from "@/utils/types/typeCard";

type ContainerProps = {
  data: CardData;
};
/**
 *
 * @param data - obj type CardData - id: string;
    code: string;
    title: string;
    departure: {
        portCode: string;
        countryCode: string;
        Port: string;
    };
    arrival: {
        portCode: string;
        countryCode: string;
        Port: string;
    };
    budget: {
        currencyCode: string;
        value: number;
        costType: string;
    };
    itinerary: Itinerary[];
    numberOfDays: number;
    reservationsAvailable: number;
    reservations: number;
    reservationsType: string;
    boatType: string;
    departureDate: string;
    arrivalDate: string;
 * @returns JSX.Element
 */

const Card: React.FC<ContainerProps> = ({ data }) => {
  // VARIABLES ----------------------
  // CONDITIONS ---------------------
  const [departureDate, setDepartureDate] = useState<Date>(
    new Date("2023-01-07 7:50:00")
  );
  const [arrivalDate, setArrivalDate] = useState<Date>(
    new Date("2023-08-13 18:00:00")
  );
  // FUNCTIONS ----------------------
  useEffect(() => {
    if (data) {
      setDepartureDate(new Date(data.departureDate));
      setArrivalDate(new Date(data.arrivalDate));
    }
  }, [data]);

  const handleOnClick = () => {
    console.log("handleOnClick : ", data.id);
  };
  // VARIABLES ----------------------
  return (
    <div className={styles.Card}>
      <div className={styles.header}>
        <div className={styles.subtitle}>
          <h3>
            {data?.budget.value}
            {data?.budget.currencyCode}
          </h3>
          <p>{data?.budget.costType}</p>
        </div>
        <div className={styles.title}>
          <h2>{data?.title}</h2>
        </div>
      </div>
      <div className={styles.section__1}>
        <div className={styles.sx}>
          <p className={styles.departure__title}>{textCard.departure__title}</p>
          <h3 className={styles.departure__value}>{data?.departure.Port}</h3>
        </div>
        <div className={styles.dx}>
          <h4 className={styles.boatType}>{data?.boatType}</h4>
          <h4 className={styles.numberOfDays}>
            {data?.numberOfDays > 1
              ? data?.numberOfDays + " " + textCard.numberOfDays.multiple
              : data?.numberOfDays + " " + textCard.numberOfDays.single}
          </h4>
        </div>
      </div>
      <div className={styles.section__2}>
        <div className={styles.dx}>
          <p className={styles.departureDate}>
            {departureDate?.getDate() < 10
              ? "0" + departureDate?.getDate()
              : departureDate?.getDate()}
            /
            {departureDate?.getMonth() < 10
              ? "0" + (departureDate?.getMonth() + 1)
              : departureDate?.getMonth() + 1}
            /{departureDate?.getFullYear()}
          </p>
          <p className={styles.departureHour}>
            {departureDate?.getHours() < 10
              ? "0" + departureDate?.getHours()
              : departureDate?.getHours()}
            :
            {departureDate?.getMinutes() < 10
              ? "0" + departureDate?.getMinutes()
              : departureDate?.getMinutes()}
          </p>
        </div>
        <div className={styles.center}>
          <IoArrowForwardOutline size={cFontSize["lg"]} />
        </div>
        <div className={styles.sx}>
          <p className={styles.departureDate}>
            {arrivalDate?.getDate() < 10
              ? "0" + arrivalDate?.getDate()
              : arrivalDate?.getDate()}
            /
            {arrivalDate?.getMonth() < 10
              ? "0" + (arrivalDate?.getMonth() + 1)
              : arrivalDate?.getMonth() + 1}
            /{arrivalDate?.getFullYear()}
          </p>
          <p className={styles.departureHour}>
            {arrivalDate?.getHours() < 10
              ? "0" + arrivalDate?.getHours()
              : arrivalDate?.getHours()}
            :
            {arrivalDate?.getMinutes() < 10
              ? "0" + arrivalDate?.getMinutes()
              : arrivalDate?.getMinutes()}
          </p>
        </div>
      </div>
      <div className={styles.section__3}>
        <p className={styles.reservations}>
          {data?.reservations + " " + data?.reservationsType}
        </p>
        <p className={styles.reservationsAvailable__text}>
          {textCard.reservationsAvailable}
          <span className={styles.reservationsAvailable__value}>
            {" " + data?.reservationsAvailable}
          </span>
        </p>
      </div>
      <div className={styles.cta}>
        <Button
          onClick={() => handleOnClick()}
          width="full"
          icon={() => null}
          text={textCard.cta}
        />
      </div>
    </div>
  );
};

export default Card;
