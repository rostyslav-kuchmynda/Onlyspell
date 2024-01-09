import classes from './styles.module.scss';
import cc from 'classcat';

type BrandButtonType = {
  text: string;
  narrow?: boolean;
  onClick: () => void;
};

export const BrandButton: React.FC<BrandButtonType> = ({ text, narrow = false, onClick }) => (
  <button
    onClick={onClick}
    className={cc([
      classes.brandButton,
      {
        [classes.narrowBrandButton]: narrow,
      },
    ])}
  >
    {text}
  </button>
);
