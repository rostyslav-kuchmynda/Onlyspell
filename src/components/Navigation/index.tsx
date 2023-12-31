import classes from './styles.module.scss';

import BrandLogo from '../../assets/Navigation/brand_logo.svg';
import MenuIcon from '../../assets/Navigation/menu_icon.svg';

const NAVIGATION_MENU = {
  about: 'About',
  ourServices: 'Our services',
  portfolio: 'Portfolio',
  contactUs: 'Contact Us',
};

export const Navigation = () => (
  <nav className={classes.navigationContainer}>
    <img tabIndex={0} role="button" src={BrandLogo} onClick={() => console.log('BRANDLOGO')} />
    <div className={classes.navigationContainerMenu}>
      <div className={classes.navigationMenuItems}>
        {Object.entries(NAVIGATION_MENU).map(([key, value]) => (
          <p key={key}>{value}</p>
        ))}
      </div>
      <img
        className={classes.navMenuIcon}
        tabIndex={0}
        role="button"
        src={MenuIcon}
        onClick={() => console.log('MENU')}
      />
    </div>
  </nav>
);
