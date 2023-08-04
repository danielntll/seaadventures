import styles from "./Navbar.module.scss";

type ComponentProps = {};

/**
 *
 * @param
 * @returns JSX.Component
 */

const Navbar = ({}: ComponentProps) => {
  // VARIABLES ----------------------
  // CONDITIONS ---------------------
  // FUNCTIONS ----------------------
  // VARIABLES ----------------------
  return (
    <div className={styles.Navbar}>
      <img
        className={styles.logo}
        src="./assets/images/logo.svg"
        alt="Header Logo SeaAdventures"
      />
    </div>
  );
};

export default Navbar;
