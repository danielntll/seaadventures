import styles from "./Navbar.module.scss";

type ComponentProps = {};

const Navbar = ({}: ComponentProps) => {
  // VARIABLES ----------------------
  // CONDITIONS ---------------------
  // FUNCTIONS ----------------------
  // VARIABLES ----------------------
  return (
    <div className={styles.Navbar}>
      <img
        className={styles.logo}
        src="https://firebasestorage.googleapis.com/v0/b/meal-hub-3d81b.appspot.com/o/extra%2Flogo.svg?alt=media&token=8b1ff380-8988-491a-9780-a4e27a0cb210"
        alt=""
      />
    </div>
  );
};

export default Navbar;
