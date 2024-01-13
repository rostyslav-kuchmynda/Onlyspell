import { Header } from '../Header';

import classes from './styles.module.scss';

import PurpleStar from '../../assets/HomePageHeader/purple_star.svg';
import GreenFigure from '../../assets/HomePageHeader/green_figure.svg';

const HEADER_TITLE_ROWS = ['Let us conjure', 'a love spell on', 'your costumers'];
const COLORED_ROW_INDEX = 1;

export const HomePageHeader = () => (
  <div className={classes.homePageHeaderWrapper}>
    <img className={classes.homePageHeaderGreenFigure} src={GreenFigure} alt="Green figure" />
    <Header multiRowText={HEADER_TITLE_ROWS} rowIndex={COLORED_ROW_INDEX} />
    <img className={classes.homePageHeaderPurpleStar} src={PurpleStar} alt="Purple star" />
  </div>
);
