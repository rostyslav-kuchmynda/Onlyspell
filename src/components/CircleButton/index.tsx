import classes from './styles.module.scss';

import ArrowRightIcon from '../../assets/DropDownButton/arrow_right.svg';

type CircleButtonType = {
  text: string;
};

export const CircleButton: React.FC<CircleButtonType> = ({ text }) => (
  <button className={classes.circleButtonContainer}>
    <span>{text}</span>
    <img className={classes.rightArrowIcon} src={ArrowRightIcon} />
  </button>
);
