import { Fragment } from 'react';
import styles from './index.module.css';
import Header from '../component/Header';
import Roulette from '../component/Slider';

const Index = () => {
  return (
    <Fragment>
      <Header />
      <Roulette />
    </Fragment>
  );
};

export default Index;
