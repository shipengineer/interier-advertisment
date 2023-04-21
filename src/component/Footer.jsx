import styles from './footer.module.css';
import index_icon from '../assets/icons/index-icon-ligth.png';
import technology_icon from '../assets/icons/gear-icon-ligth.png';
import work_icon from '../assets/icons/work-icon-ligth.png';
import contacts_icon from '../assets/icons/contact-icon-ligth.png';
import telegram_icon from '../assets/icons/telegram-icon.png';
import viber_icon from '../assets/icons/viber-icon.png';
import whatsup_icon from '../assets/icons/whatsapp-icon.png';

import NavButton from '../UI/NavButton';

const Footer = () => {
    return (
        <div className={styles.background}>
            <div className={styles['nav-links']}>
                <NavButton
                    link={'/index'}
                    icon={index_icon}
                    label={'ГЛАВНАЯ'}
                    color={'#ffff'}
                />
                <NavButton
                    link={'/technology'}
                    icon={technology_icon}
                    label={'ТЕХНОЛОГИИ'}
                    color={'#ffff'}
                />
                <NavButton
                    link={'/works'}
                    icon={work_icon}
                    label={'НАШИ РАБОТЫ'}
                    color={'#ffff'} />
                <NavButton
                    link={'/contacts'}
                    icon={contacts_icon}
                    label={'КОНТАКТЫ'}
                    color={'#ffff'} />
            </div>
            <span className={styles.delimetr}>
                <svg width="1" height="138" viewBox="0 0 1 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.1" width="1" height="138" fill="white" />
                </svg>
            </span>
            <div className={styles['nav-links']}>
                <p>ОБЪЕМНЫЕ ЛОГОТИПЫ</p>
                <p>ЛОГОТИПЫ С ПОДСВЕТКОЙ</p>
                <p>ВЫВЕСКА ДЛЯ ОФИСА</p>
                <p>ИНТЕРЬЕРНАЯ РЕКЛАМА</p>
            </div>
            <span className={styles.delimetr}>
                <svg width="1" height="138" viewBox="0 0 1 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.1" width="1" height="138" fill="white" />
                </svg>
            </span>
            <div className={styles['phone-container']}>
                <a className={styles.email} href='tel:+79172366574'>
                    +7 (917) 236-65-74
                </a>
                <a className={styles.email} href='tel:+74952366574'>
                    +7 (495) 236-65-74
                </a>
            </div>
            <span className={styles.delimetr}>
                <svg width="1" height="138" viewBox="0 0 1 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.1" width="1" height="138" fill="white" />
                </svg>
            </span>

            <div className={styles['messager-container']}>
                <a className={styles.email} href='mailto:pochta@mail.ru'>
                    pochta@mail.ru
                </a>
                <a className={styles['contact-app']} href='#'>
                    <img src={whatsup_icon} alt='переход в ватсап' />
                </a>
                <a className={styles['contact-app']} href='#'>
                    <img src={telegram_icon} alt='переход в телеграм' />
                </a>
                <a className={styles['contact-app']} href='#'>
                    <img src={viber_icon} alt='переход в вайбер' />
                </a>
            </div>
            <span className={styles.delimetr}>
                <svg width="1" height="138" viewBox="0 0 1 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect opacity="0.1" width="1" height="138" fill="white" />
                </svg>
            </span>
            <address className={styles.address}>наб. Обводного канала, 199-201, лит.Н, ДЦ "Обводный двор", офис 14, этаж 1</address>
        </div >

    );
}

export default Footer;