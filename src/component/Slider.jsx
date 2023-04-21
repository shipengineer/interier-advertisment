import { useState } from 'react';
import styles from './slider.module.css';

import in_use from '../assets/slider/use-slide.png';
import not_in_use from '../assets/slider/not-use-slide.png';
const Slider = (props) => {

  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <div className={styles.description}>
          <span className={styles.title}>ЛОГОТИПЫ НА СТЕНУ</span>
          <ul className={styles.ul}>
            <li className={styles.li}>Интерьерное качество</li>
            <li className={styles.li}>На рынке 8 лет</li>
            <li className={styles.li}>Гарантия 3 года</li>
          </ul>
          <button className={styles['call-back']}>
            ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК
          </button>
        </div>
        <div className={styles.images}> {props.children}</div>
      </div>

    </div>
  );
};

export default Slider;
