import classes from './styles.module.scss';

import NavStar from '../../assets/Footer/navigation_star.svg';

type FooterNavigationItemType = {
  text: string;
  key: string;
  onClick: () => void;
};

export const FooterNavigationItem: React.FC<FooterNavigationItemType> = ({ text, key }) => (
  <li className={classes.footerBottomSectionNavigationItem} tabIndex={0} role="button" key={key}>
    <img src={NavStar} alt="Star Navigation Item" />
    <span className={classes.footerBottomSectionNavigationText}>{text}</span>
  </li>
);
