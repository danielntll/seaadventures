import styles from "./HeroSection2.module.scss";

type BoxData = {
  title: string;
  counter: string;
};

type ComponentProps = {
  backgroundImageUrl?: string;
  boxData?: BoxData[];
};

/**
 *
 * @param backgroundImageUrl - string (optional) - Url of the background
 * @param boxData - array of obj - BoxData = {counter : string, title : string} (optional) - Counter and title of counter
 *
 * @returns JSX.Component
 */

const HeroSection2 = ({
  backgroundImageUrl = "https://firebasestorage.googleapis.com/v0/b/meal-hub-3d81b.appspot.com/o/extra%2Fhero.jpeg?alt=media&token=09bef443-8c29-4fc0-acc2-2fe0652e8c59",
  boxData = [
    {
      counter: "+20",
      title: "Destinazioni",
    },
  ],
}: ComponentProps) => {
  // VARIABLES ----------------------
  // CONDITIONS ---------------------
  // FUNCTIONS ----------------------
  // VARIABLES ----------------------
  return (
    <div
      className={styles.HeroSection2}
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      <span role="img" aria-label="[hero image SeaAdventures]"></span>
      <div className={styles.title__container}>
        {boxData?.map((data: BoxData, index: number) => {
          return (
            <div className={styles.title__box}>
              <h2 className={styles.counter}>{data.counter}</h2>
              <h2 className={styles.title}>{data.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroSection2;
