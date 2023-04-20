import TypeItem from './type_item/TypeItem';
import styles from './types.module.css';
import img1 from '../assets/types/logotipnastenu-1 1.png';
import img2 from '../assets/types/logotipnastenu-2 1.png';
import img3 from '../assets/types/logotipnastenu-3 1.png';
import img4 from '../assets/types/logotipnastenu-4 1.png';
import img5 from '../assets/types/logotipnastenu-5 1.png';
import img6 from '../assets/types/logotipnastenu-6 1.png';
import img7 from '../assets/types/logotipnastenu-7 1.png';
import img8 from '../assets/types/logotipnastenu-8 1.png';
import img9 from '../assets/types/logotipnastenu-9 1.png';
import img10 from '../assets/types/logotipnastenu-10 1.png';
import img11 from '../assets/types/logotipnastenu-11 1.png';
import img12 from '../assets/types/logotipnastenu-12 1.png';
import { Fragment } from 'react';
const Types = () => {
  const typesArray = [
    {
      label: 'Объемный логотип с подсветкой',
      src: img1,
    },
    {
      label: 'Объемный логотип на подложке',
      src: img2,
    },
    {
      label: 'Плоские логотипы с подстветкой',
      src: img3,
    },
    {
      label: 'Плоский логотип на подложке',
      src: img4,
    },
    {
      label: 'Объемный логотип без подсветки',
      src: img5,
    },
    {
      label: 'Плоский логотип без подсветки',
      src: img6,
    },
    {
      label: 'Оргстекло 10 мм',
      src: img7,
    },
    {
      label: 'Оргстекло 5мм + металл 1 мм',
      src: img8,
    },
    {
      label: 'Апликация на подложке',
      src: img9,
    },
    {
      label: 'Накладные элементы на подложке',
      src: img10,
    },
    {
      label: 'Акрилайты',
      src: img11,
    },
    {
      label: 'Фигурный короб с подсветкой',
      src: img12,
    },
  ];

  return (
    <div
      className={styles.full}
    >
      <span className={styles.title}>ТЕХНОЛОГИИ ПРОИЗВОДСТВА</span>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className={styles.background}>
          {typesArray.map((elem) => (
            <TypeItem src={elem.src} label={elem.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Types;
