import SocialLinks from 'components/UI/SocialLinks';
import StyledSocial from './HeaderSocialLinks.styled';

const HeaderSocialLinks = () => {
  return (
    <StyledSocial>
      <SocialLinks />
      <div className='line' />
    </StyledSocial>
  );
};

export default HeaderSocialLinks;
