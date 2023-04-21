import styles from './header.module.css';
import index_icon from '../assets/icons/index-icon.png';
import technology_icon from '../assets/icons/gear-icon.png';
import work_icon from '../assets/icons/work-icon.png';
import contacts_icon from '../assets/icons/contact-icon.png';
import telegram_icon from '../assets/icons/telegram-icon.png';
import viber_icon from '../assets/icons/viber-icon.png';
import whatsup_icon from '../assets/icons/whatsapp-icon.png';
import logo_icon from '../assets/logo.png';
import delimetr from '../assets/delimetr.png';
import NavButton from '../UI/NavButton';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className={styles.background}>
      <NavLink to={'/index'} style={{ marginTop: '-2px' }}>
        <img src={logo_icon} alt='переход на главную' />
      </NavLink>

      <NavButton link={'/index'} icon={index_icon} label={'ГЛАВНАЯ'} color={'#1c1d1e'} />
      <NavButton
        link={'/technology'}
        icon={technology_icon}
        label={'ТЕХНОЛОГИИ'}
        color={'#1c1d1e'}
      />
      <NavButton link={'/works'} icon={work_icon} label={'НАШИ РАБОТЫ'} color={'#1c1d1e'} />
      <NavButton link={'/contacts'} icon={contacts_icon} label={'КОНТАКТЫ'} color={'#1c1d1e'} />
      <div className={styles['phone-container']}>
        <a className={styles.email} href='tel:+79172366574'>
          +7 (917) 236-65-74
        </a>
        <a className={styles.email} href='tel:+74952366574'>
          +7 (495) 236-65-74
        </a>
      </div>
      <img src={delimetr} alt='разделитель' />

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
    </div>
  );
};

export default Header;
