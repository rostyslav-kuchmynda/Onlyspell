import cc from 'classcat';
import classes from './styles.module.scss';

type HeaderType = {
  text?: string;
  multiRowText?: Array<string>;
  rowIndex?: number;
  singleHeaderClassName?: string; // help us to override/modify the existing .header class
};

export const Header: React.FC<HeaderType> = ({ text, multiRowText, rowIndex, singleHeaderClassName }) =>
  text ? (
    <h1 className={cc([classes.header, singleHeaderClassName])}>{text}</h1>
  ) : (
    <h1 className={classes.multiRowText}>
      {multiRowText?.map((textRow, idx) => (
        <span
          className={cc([
            {
              [classes.textRowColor]: idx === rowIndex,
            },
          ])}
        >
          {textRow}
        </span>
      ))}
    </h1>
  );
