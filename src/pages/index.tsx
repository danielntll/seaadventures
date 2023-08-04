import Head from "next/head";
import styles from "@/styles/pages/Home.module.scss";
import { CardData } from "@/utils/types/typeCard";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DropdownList from "@/components/DropdownList";
import { useState, useEffect } from "react";
import Button from "@/components/Button";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import ContentHome from "@/components/ContentHome";
import ContentHomeFiltred from "@/components/ContentHomeFiltred";
import { typeDataSorted } from "@/utils/types/typeDataSorted";
import HeroSection2 from "@/components/HeroSection2";
import { textHomepage } from "@/utils/data/text_Page_Home";

type PageProps = {
  data: {
    data: CardData[];
  };
  allDeparturePorts: string[];
  sortedData: typeDataSorted[];
  randomData: CardData[];
};

export default function Home(props: PageProps) {
  // VARIABLES ----------------------
  const stepData = 8;
  // CONDITIONS ---------------------
  const [isFilterActive, setIsFilterActive] = useState<boolean>(false);
  const [dataToShow, setDataToShow] = useState<CardData[]>([]);
  const [specificFilter, setSpecificFilter] = useState<string>("");
  // FUNCTIONS ----------------------
  const handleFilter = (filterValue: string) => {
    if (filterValue !== "All") {
      setIsFilterActive(true);
      setSpecificFilter("");
    } else {
      setIsFilterActive(false);
    }
  };
  const handleSpecificFilter = (valueFilter: string) => {
    valueFilter === "All"
      ? setSpecificFilter("")
      : setSpecificFilter(valueFilter);
  };

  const handleAddMoreContent = () => {
    const auxArray: CardData[] = [...dataToShow];
    let localStep: number;
    if (props.data.data.length - dataToShow.length < stepData) {
      localStep = props.data.data.length - dataToShow.length;
    } else {
      localStep = stepData;
    }

    for (
      let index = dataToShow.length;
      index < localStep + dataToShow.length;
      index++
    ) {
      auxArray.push(props.data.data[index]);
    }
    setDataToShow(auxArray);
  };

  useEffect(() => {
    if (props) {
      handleAddMoreContent();
    }
  }, [props]);
  // VARIABLES ----------------------
  return (
    <>
      <Head>
        <title>
          SeaAdventures - Tour Operator di itinerari marittimi e esperienze
          uniche a bordo di imbarcazioni
        </title>
        <meta
          name="description"
          content="Benvenuti su SeaAdventures, il Tour Operator specializzato in itinerari marittimi con partenze dai porti italiani. Scoprite le meraviglie del mare e delle coste con esperienze uniche a bordo di diverse tipologie di imbarcazioni."
        />
        <meta
          name="keywords"
          content="SeaAdventures, Tour Operator, itinerari marittimi, esperienze uniche, imbarcazioni, viaggiatori, mare, coste, porti italiani, partenze, destinazioni, scoprire meraviglie."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./assets/images/logo.svg" />
        <meta name="author" content="SeaAdventures - by Daniel Turcanu"></meta>
      </Head>
      <main className={`${styles.main}`}>
        <header>
          <Navbar />
        </header>
        <section>
          <HeroSection
            title="Titolo dinamico"
            backgroundImageUrl="https://firebasestorage.googleapis.com/v0/b/meal-hub-3d81b.appspot.com/o/extra%2Fhero.jpeg?alt=media&token=09bef443-8c29-4fc0-acc2-2fe0652e8c59"
          />
        </section>
        {/* ----- */}
        <section className={styles.section__container}>
          <div className={styles.section__content__header}>
            <DropdownList
              values={["Mostra porti di partenza"]}
              name={"Tutti i risultati"}
              callback={(value) => handleFilter(value)}
            />
            {isFilterActive ? (
              <DropdownList
                values={props.allDeparturePorts}
                name="Tutti i porti"
                callback={(value) => handleSpecificFilter(value)}
              />
            ) : null}
          </div>
          <div className={styles.section__content}>
            {isFilterActive ? (
              <ContentHomeFiltred
                filter={specificFilter}
                data={props.sortedData}
              />
            ) : (
              <ContentHome dataToShow={dataToShow} />
            )}
          </div>
          <div className={styles.section__cta}>
            {!isFilterActive && props.data.data.length !== dataToShow.length ? (
              <Button
                width="auto"
                text="MOSTRA ALTRI"
                direction="right"
                onClick={() => handleAddMoreContent()}
                icon={(size) => <IoChevronDownCircleOutline size={size} />}
              />
            ) : null}
          </div>
        </section>
        {/* ------- */}
        <section>
          <HeroSection2
            boxData={[
              {
                counter: "+20",
                title: "Dinamico",
              },
              {
                counter: "+10",
                title: "Dinamico",
              },
              {
                counter: "+3",
                title: "Dinamico",
              },
              {
                counter: "+8",
                title: "Dinamico",
              },
            ]}
          />
        </section>
        {/* --------- */}
        <div className={styles.section__content}>
          <h2 className={styles.section__content__title}>
            {textHomepage.section_randomData}
          </h2>
          <ContentHome dataToShow={props.randomData} />
        </div>
        {/* ------- */}
        <footer className={styles.footer}></footer>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  let data;
  let allDeparturePorts;
  let sortedData;
  let randomData;
  await fetch("http://localhost:3001/api/allDepartues", {
    method: "POST",
    body: "getAllData",
  }).then(async (res) => {
    const alldata = await res.json();
    data = alldata;
    allDeparturePorts = alldata.allDeparturePorts;
    sortedData = alldata.dataSorted;
    randomData = alldata.randomData;
  });
  return {
    props: {
      data,
      allDeparturePorts: allDeparturePorts,
      sortedData: sortedData,
      randomData: randomData,
    },
  };
}
