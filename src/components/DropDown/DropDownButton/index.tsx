import classes from './styles.module.scss';

import ArrowRightIcon from '../../../assets/DropDownButton/arrow_right.svg';

const BUTTON_TEXT = 'Let’s start the magic in your business';

export const DropDownButton = () => (
  <button className={classes.dropDownButtonContainer}>
    <span>{BUTTON_TEXT}</span>
    <img className={classes.rightArrowIcon} src={ArrowRightIcon} />
  </button>
);
