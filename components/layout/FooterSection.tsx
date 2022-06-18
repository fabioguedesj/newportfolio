import Disclaimer from 'components/footer/Disclaimer';
import FooterSocialLinks from 'components/footer/FooterSocialLinks';
import classes from './FooterSection.module.scss';

const FooterSection = () => {
  return (
    <div className={classes.footer}>
      <FooterSocialLinks />
      <Disclaimer />
    </div>
  );
};

export default FooterSection;
