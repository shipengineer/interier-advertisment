import { useState } from 'react';
import styles from './slider.module.css';
import slide1 from '../assets/slider/logotipnastenu-1 1.png';
import slide2 from '../assets/slider/logotipnastenu-1 2.png';
import slide3 from '../assets/slider/logotipnastenu-10 1.png';
import slide4 from '../assets/slider/logotipnastenu-4 1.png';
import slide5 from '../assets/slider/logotipnastenu-8 1.png';
const Roulette = () => {
  //   const [slideNumber, setSlide] = useState(1);
  //   const [autoPlay, setAutoPlay] = useState(true);
  //   setInterval(() => {
  //     if (!autoPlay && slideNumber > 5) {
  //       setSlide(1);
  //       setAutoPlay(true);
  //     }

  //     setSlide(slideNumber + 1);
  //   }, 2000);
  return (
    <div className={styles.background}>
      <div className={styles.card}>
        <div className={styles.description}>
          <span className={styles.title}>ЛОГОТИПЫ НА СТЕНУ</span>
          <ul>
            <li>Интерьерное качество</li>
            <li>На рынке 8 лет</li>
            <li>Гарантия 3 года</li>
          </ul>
          <button className={styles['call-back']}>
            ЗАКАЗАТЬ ОБРАТНЫЙ ЗВОНОК
          </button>
        </div>
        <div className={styles['image-container']}>
          <div className={styles.images}>
            <img src={slide1} alt='' />
            <img src={slide2} alt='' />
            <img src={slide3} alt='' />
            <img src={slide4} alt='' />
            <img src={slide5} alt='' />
          </div>
          <div className={styles.buttons}>
            <button className={styles.previous}>prev</button>
            <button className={styles.next}>next</button>
          </div>
        </div>
        <div className={styles.marks}>
          <img src='' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Roulette;
