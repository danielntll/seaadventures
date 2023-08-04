import styles from "./DropdownList.module.scss";

type ComponentProps = {
  name: string;
  values: string[];
  callback: (e: string) => void;
};

const DropdownList = ({ name, values, callback }: ComponentProps) => {
  // VARIABLES ----------------------
  // CONDITIONS ---------------------
  // FUNCTIONS ----------------------
  const handleOnChange = (e: string) => {
    console.log(e);
    callback(e);
  };
  // VARIABLES ----------------------
  return (
    <div className={styles.DropdownList}>
      <select
        onChange={(e) => handleOnChange(e.target.value)}
        name={name}
        id={name}
      >
        <option value="All">{name}</option>
        {values.map((list: string, index: number) => {
          return (
            <option
              key={name + list + index}
              className={styles.list}
              value={list}
            >
              {list}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropdownList;
