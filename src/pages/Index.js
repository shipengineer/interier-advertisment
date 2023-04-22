import { Fragment } from 'react';
import styles from './index.module.css';
import Header from '../component/Header';
import Slider from '../component/Slider';
import Types from '../types/Types';
import FreeDesign from '../component/FreeDesign';
import Article from '../component/Article';
import CallOrder from '../component/CallOrder';
import map_img from '../assets/map.png'
import Footer from '../component/Footer'
import Flickity from 'react-flickity-component';
import slide1 from '../assets/slider/logotipnastenu-1 1.png';
import slide2 from '../assets/slider/logotipnastenu-1 2.png';
import slide3 from '../assets/slider/logotipnastenu-10 1.png';
import slide4 from '../assets/slider/logotipnastenu-4 1.png';
import slide5 from '../assets/slider/logotipnastenu-8 1.png';
import "flickity/css/flickity.css";
const Index = () => {


  return (
    <Fragment>
      <Header />
      <Slider >

        <Flickity className={styles.flickity} >
          <img src={slide1} />
          <img src={slide2} />
          <img src={slide3} />
          <img src={slide4} />
          <img src={slide5} />
        </Flickity>

      </Slider>
      <Types />
      <FreeDesign />
      <Article />
      <div className={styles['call-order']}>
        <CallOrder width="1290px" height='60px' />
      </div>
      <div className={styles['call-order']} style={{ overflowX: 'hidden' }}>
        <img src={map_img} size='1920px' alt="Карта проезда" />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Index;
