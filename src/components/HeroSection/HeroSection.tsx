import styles from "./HeroSection.module.scss";

type ComponentProps = {
  backgroundImageUrl?: string;
  title?: string;
};

/**
 *
 * @param backgroundImageUrl - string (optional) - Url of the background
 * @param title - string (optional) - Hero title
 *
 * @returns JSX.Component
 */

const HeroSection = ({
  backgroundImageUrl = "https://firebasestorage.googleapis.com/v0/b/meal-hub-3d81b.appspot.com/o/extra%2Fhero.jpeg?alt=media&token=09bef443-8c29-4fc0-acc2-2fe0652e8c59",
  title = "Lorem ipsum dolor sit",
}: ComponentProps) => {
  // VARIABLES ----------------------
  // CONDITIONS ---------------------
  // FUNCTIONS ----------------------
  // VARIABLES ----------------------
  return (
    <div
      className={styles.HeroSection}
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      <span role="img" aria-label="[hero image SeaAdventures]"></span>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
};

export default HeroSection;
