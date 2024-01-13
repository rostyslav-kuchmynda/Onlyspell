import { FooterNavigationItem } from '../FooterNavigationItem';

import classes from './styles.module.scss';

import Facebook from '../../assets/Footer/facebook_footer.svg';
import Instagram from '../../assets/Footer/instagram_footer.svg';
import Youtube from '../../assets/Footer/youtube_footer.svg';
import Whatsapp from '../../assets/Footer/whatsapp_footer.svg';

const FOOTER_TOPSECTION_TEXT = 'Got start the magic in your business';
const FOOTER_TOPSECTION_TITLE = "Let's Talk";

const FOOTER_BOTTOMSECTION_TEXT =
  "We will cast a spell to see the future, to analyze your audience deeply. We will create a masterpiece brand's art for your business that will attract everyone ";

const SOCIAL_MEDIAS = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  whatsapp: Whatsapp,
};

const FOOTER_NAVIGATION_MENU_ITEMS = {
  home: 'Home',
  portfolio: 'Portfolio',
  about: 'About',
  ourMagicalLibrary: 'Our Magical Library',
  recommendations: 'Recommendations',
  questionsAndAnswers: 'Questions and Answers',
  ourProducts: 'Our products',
  aboutOrshonRadio: 'About orshon radio',
  contactUs: 'Contact Us',
};

export const Footer = () => (
  <div className={classes.footerContainer}>
    <div className={classes.footerTopSectionContainer}>
      <div className={classes.footerTopSectionTextWrapper}>
        <p className={classes.footerTopSectionText}>{FOOTER_TOPSECTION_TEXT}</p>
        <p className={classes.footerTopSectionTitle}>{FOOTER_TOPSECTION_TITLE}</p>
      </div>
      <div className={classes.footerSocialMediaContainer}>
        {Object.entries(SOCIAL_MEDIAS).map(([key, value]) => (
          <img
            key={key}
            className={classes.socialMediaFooterItem}
            tabIndex={0}
            role="button"
            src={value}
            onClick={() => console.log('Social Media FOOTER')}
          />
        ))}
      </div>
    </div>
    <div className={classes.footerBottomSectionContainer}>
      <p className={classes.footerBottomSectionText}>{FOOTER_BOTTOMSECTION_TEXT}</p>
      <nav className={classes.footerBottomSectionNavigationWrapper}>
        <ul className={classes.footerBottomSectionNavigation}>
          {Object.entries(FOOTER_NAVIGATION_MENU_ITEMS).map(([key, value]) => (
            <FooterNavigationItem key={key} text={value} onClick={() => null} />
          ))}
        </ul>
      </nav>
    </div>
  </div>
);
