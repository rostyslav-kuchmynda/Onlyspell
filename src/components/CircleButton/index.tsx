import classes from './styles.module.scss';

type CircleButtonType = {
  text: string;
};

export const CircleButton: React.FC<CircleButtonType> = ({ text }) => (
  <button className={classes.dropDownButtonContainer}>
    <span>{text}</span>
  </button>
);
