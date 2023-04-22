import ShowTechnology from "./ShowTechnology";
import styles from "./description-expand.module.css";
const DescriptionExpand = (props) => {
  return (
    <div className={styles.background}>
      <ShowTechnology photos={props.photos} />
    </div>
  );
};

export default DescriptionExpand;
