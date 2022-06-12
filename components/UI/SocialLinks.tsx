import Github from 'components/svg/Github';
import Linkedin from 'components/svg/Linkedin';
import Medium from 'components/svg/Medium';
import { Fragment } from 'react';

const SocialLinks = () => {
  return (
    <Fragment>
      <Linkedin />
      <Github />
      <Medium />
    </Fragment>
  );
};

export default SocialLinks;
