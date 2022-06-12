import HeaderContent from 'components/header/HeaderContent';
import HeaderSocialLinks from 'components/header/HeaderSocialLinks';
import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 48rem;
  margin-bottom: 10rem;
  background-image: linear-gradient(
      to bottom right,
      ${({ theme }) => theme.colors.lightPurple + 'E6'},
      ${({ theme }) => theme.colors.darkPurple + 'E6'}
    ),
    url('images/header-background.jpg');
  background-size: cover;
  background-position: center;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 45rem, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 45rem, 0 100%);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderSection = () => {
  return (
    <StyledHeader>
        <HeaderSocialLinks />
        <HeaderContent />
    </StyledHeader>
  )
};

export default HeaderSection;
