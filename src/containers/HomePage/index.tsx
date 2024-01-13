import { Footer } from '../../components/Footer';
import { HomePageHeader } from '../../components/HomePageHeader';
import { Navigation } from '../../components/Navigation';

import classes from './styles.module.scss';

export const HomePage = () => (
  <div className={classes.homePageContainer}>
    <Navigation />
    <HomePageHeader />
    <Footer />
  </div>
);
