import SocialLinks from 'components/UI/SocialLinks';
import classes from './FooterSocialLinks.module.scss';

const FooterSocialLinks = () => {
  return (
    <div className={classes.social}>
      <SocialLinks />
    </div>
  );
};

export default FooterSocialLinks;
