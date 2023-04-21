import styles from './call-order.module.css'
import user_img from '../assets/icons/user-icon.png'
import phone_img from '../assets/icons/phone-icon.png'
const CallOrder = (props) => {
    return (
        <form className={styles.background} style={{ width: `${props.width}`, alignSelf: 'center' }}  >
            <span className={styles.span}>ПОЛУЧИТЕ ПОДРОБНУЮ СМЕТУ ПО ИГОТОВЛЕНИИ ВЫВЕСКИ</span>
            <span style={{ paddingBottom: '20px' }}>
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
            <div className={styles.container} style={{ width: `${props.width}`, height: `${props.height}` }}>
                <div className={styles['user-phone']} >
                    <img src={user_img} alt="запрос имени пользователя" />
                    <input type="text" name="Ваше имя" id="index1" placeholder='Ваше имя' />
                </div>
                <div className={styles['user-phone']}>
                    <img src={phone_img} alt="запрос номера телефона" />
                    <input type="text" name="Номер телефона" id="index1" placeholder='Номер телефона' />
                </div>

                <button type="submit" className={styles['order-button']}>ЗАКАЗАТЬ</button>
            </div>
            <div className={styles['check-box']}>
                <input type="checkbox" id="agreement" />
                <label >Согласие с политикой обработки персональных данных</label>
            </div>
        </form >);
}

export default CallOrder;