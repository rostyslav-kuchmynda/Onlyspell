import classes from './styles.module.scss';

import Behance from '../../../assets/behance.svg';
import Facebook from '../../../assets/facebook.svg';
import Instagram from '../../../assets/instagram.svg';
import Linkedin from '../../../assets/linkedin.svg';
import Pinterest from '../../../assets/pinterest.svg';
import Twitter from '../../../assets/twitter.svg';
import Youtube from '../../../assets/youtube.svg';

const SOCIAL_MEDIAS = {
  instagram: Instagram,
  linkedin: Linkedin,
  facebook: Facebook,
  twitter: Twitter,
  behance: Behance,
  youtube: Youtube,
  pinterest: Pinterest,
};

export const DropDownSocialMedia = () => (
  <div className={classes.socialMediaContainer}>
    {Object.entries(SOCIAL_MEDIAS).map(([key, value]) => (
      <img
        key={key}
        className={classes.socialMediaItem}
        tabIndex={0}
        role="button"
        src={value}
        onClick={() => console.log('Social Media')}
      />
    ))}
  </div>
);
