import { cFontSize } from "@/utils/constants/cFontSizes";
import styles from "./Button.module.scss";
import { IoChevronForward } from "react-icons/io5";

/**
 *
 * @param {*} width string - "full" | "half" | "auto" (default -> "auto")
 * @param {*} size "xl" | "lg" | "md" | "sm" | "xs" - (default -> "sm")
 * @param {*} text string - (default -> "")
 * @param {*} shape "round" | "default" | "light" | "square" - (default -> "default")
 * @param {*} submit boolean - (default -> false) If true it will act like a submit button for Form component
 * @param {*} icon ReactComponent - (default -> IoChevronForward)
 * @param {*} direction "left" | "right" - (default - "right") - Is the icon position.
 * @param {*} color "primary" | "secondary" | "tertiary" | "success" | "warning" | "danger" | "dark" | "medium" | "light" - (default - "primary")
 * @param {*} type "fill" | "outline" | "underline" | "text" - (default - "fill")
 * @param {*} onClick callback - (default -> console.log("Click"))
 * @returns
 */

type ComponentProps = {
  width?: "full" | "half" | "auto";
  size?: "xl" | "lg" | "md" | "sm" | "xs";
  text?: string;
  shape?: "round" | "default" | "light" | "square";
  submit?: boolean;
  icon?: (iconSize: number) => React.ReactNode | null;
  direction?: "left" | "right";
  color?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "warning"
    | "danger"
    | "medium"
    | "light";
  type?: "fill" | "outline" | "underline" | "text";
  onClick?: () => void;
};

const Button: React.FC<ComponentProps> = ({
  width = "auto",
  size = "sm",
  text = "Button",
  shape = "default",
  submit = false,
  icon = (iconSize: number) => {
    return <IoChevronForward size={iconSize} />;
  },
  direction = "left",
  color = "primary",
  type = "fill",
  onClick = () => {
    console.log("Click");
  },
}) => {
  // VARIABLES ----------------------
  // CONDITIONS ---------------------
  // FUNCTIONS ----------------------
  // RETURN -------------------------
  return (
    <>
      <button
        onClick={onClick}
        type={submit ? "submit" : "button"}
        className={`
        ${styles.Button}
        ${styles[size]}
        ${styles[width]}
        ${styles[direction]}
        ${styles[type + "_" + color]}
        ${styles[type !== "underline" && type !== "text" ? shape : "square"]}
      `}
      >
        {icon ? icon(cFontSize[size]) : null}
        {text ? <span className={styles.text}>{text}</span> : null}
      </button>
    </>
  );
};

export default Button;
