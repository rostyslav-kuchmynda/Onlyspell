import { DropDownSocialMedia } from './DropDownSocialMedia';
import { DropDownButton } from './DropDownButton';

import classes from './styles.module.scss';

import BrandLogo from '../../assets/DropDown/brand_logo.svg';
import CloseIcon from '../../assets/DropDown/close_icon.svg';

const DROPDOWN_NAVIGATION_MENU = {
  home: 'Home',
  about: 'About',
  portfolio: 'Portfolio',
  ourMagicalLibrary: 'Our Magical Library',
  questionsAndAnswers: 'Questions and Answers',
  aboutOrshonRadio: 'About orshon radio',
  ourProducts: 'Our products',
  contactUs: 'Contact Us',
};

export const DropDown = () => (
  <div className={classes.dropDownContainer}>
    <div>
      <div className={classes.dropDownHeader}>
        <img tabIndex={0} role="button" src={BrandLogo} onClick={() => console.log('LOGO')} />
        <img
          className={classes.navCloseIcon}
          tabIndex={0}
          role="button"
          src={CloseIcon}
          onClick={() => console.log('CLOSED DD NAV')}
        />
      </div>
      <nav className={classes.dropDownNavigation}>
        {Object.entries(DROPDOWN_NAVIGATION_MENU).map(([key, value]) => (
          <p className={classes.navigationItem} key={key}>
            {value}
          </p>
        ))}
      </nav>
    </div>
    <div className={classes.dropDownFooter}>
      <DropDownSocialMedia />
      <DropDownButton />
    </div>
  </div>
);
