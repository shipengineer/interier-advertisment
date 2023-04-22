import { useState } from "react";
import styles from "./show-technology.module.css";

const ShowTechnology = (props) => {
  const items = props.photos;
  const [mainItem, setMainItem] = useState(items[0]);
  const onClickHandler = (event) => {
    console.log(event.target.src);
    setMainItem(event.target.src);
  };

  return (
    <div className={styles.background}>
      <img className={styles.mainItem} src={mainItem} alt="" />
      {items.map((elem) => {
        return (
          <img
            className={styles.images}
            src={elem}
            alt=""
            onClick={onClickHandler}
          />
        );
      })}
    </div>
  );
};

export default ShowTechnology;
