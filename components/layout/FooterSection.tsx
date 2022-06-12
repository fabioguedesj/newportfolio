import Disclaimer from 'components/footer/Disclaimer';
import FooterSocialLinks from 'components/footer/FooterSocialLinks';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-image: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.colors.lightPurple},
    ${({ theme }) => theme.colors.darkPurple}
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 20rem;
`;

const FooterSection = () => {
  return (
    <StyledFooter>
      <FooterSocialLinks />
      <Disclaimer />
    </StyledFooter>
  );
};

export default FooterSection;
