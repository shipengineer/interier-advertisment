import liberty_img from '../assets/liberty-img.png'
import CallOrder from './CallOrder';
import styles from "./free-design.module.css"
const FreeDesign = () => {
    return (
        <div className={styles.layout}>
            <div className={styles.card}>
                <span className={styles.title}>Бесплатный эскиз</span>
                <div className={styles['design-container']}>
                    <img src={liberty_img} alt="Дизайн с размерами " />
                    <CallOrder width='410px' heigth='407px' />
                </div>
            </div>
        </div>
    );
}

export default FreeDesign;