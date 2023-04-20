import { Fragment } from 'react';
import styles from './index.module.css';
import Header from '../component/Header';
import Roulette from '../component/Slider';
import Types from '../types/Types';
import FreeDesign from '../component/FreeDesign';
import Article from '../component/Article';
import CallOrder from '../component/CallOrder';

const Index = () => {
  return (
    <Fragment>
      <Header />
      <Roulette />
      <Types />
      <FreeDesign />
      <Article />
      <div className={styles['call-order']}>
        <CallOrder width="1290px" height='60px' />
      </div>
    </Fragment>
  );
};

export default Index;
