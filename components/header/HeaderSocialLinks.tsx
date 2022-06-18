import SocialLinks from 'components/UI/SocialLinks';
import classes from './HeaderSocialLinks.module.scss';

const HeaderSocialLinks = () => {
  return (
    <div className={classes.social}>
      <SocialLinks />
      <div className={classes.line} />
    </div>
  );
};

export default HeaderSocialLinks;
