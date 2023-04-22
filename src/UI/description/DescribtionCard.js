import styles from "./description-card.module.css";
const DescriptionCard = (props) => {
  const expandHandler = (description) => {};
  return (
    <div className={styles.background}>
      <img src={props.img} alt="" />
      <span className={styles.span}>{props.description.name}</span>
      <button className={styles.button} onClick={expandHandler}>
        ПОДРОБНЕЕ
      </button>
    </div>
  );
};

export default DescriptionCard;
