import { Fragment } from 'react';
import styles from './index.module.css';
import Header from '../component/Header';
import Roulette from '../component/Slider';
import Types from '../types/Types';
import FreeDesign from '../component/FreeDesign';

const Index = () => {
  return (
    <Fragment>
      <Header />
      <Roulette />
      <Types />
      <FreeDesign />
    </Fragment>
  );
};

export default Index;
