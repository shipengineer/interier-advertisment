import styles from './type-item.module.css';
import border from '../../assets/types/layout.png';
const TypeItem = (props) => {
  return (
    <div className={styles.main}>
      <img className={styles.img} src={props.src} alt={props.label}></img>
      <img className={styles.border} src={border} />
      <span className={styles.span}>{props.label}</span>
      <span>
        <svg
          width='100'
          height='1'
          viewBox='0 0 100 1'
          fill='#E4E5E6'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect width='100' height='1' fill='#E4E5E6' />
        </svg>
      </span>
    </div>
  );
};

export default TypeItem;
