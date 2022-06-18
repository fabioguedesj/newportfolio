import HeaderContent from 'components/header/HeaderContent';
import HeaderSocialLinks from 'components/header/HeaderSocialLinks';
import classes from './HeaderSection.module.scss';

const HeaderSection = () => {
  return (
    <header className={classes.header}>
      <HeaderSocialLinks />
      <HeaderContent />
    </header>
  );
};

export default HeaderSection;
