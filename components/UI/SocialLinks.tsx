import { Fragment } from 'react';
import { BsLinkedin, BsGithub, BsMedium } from 'react-icons/bs';

const SocialLinks = () => {
  return (
    <Fragment>
      <a
        href='https://linkedin.com/in/fabioguedesj/'
        target='_blank'
        rel='noreferrer'>
        <BsLinkedin size={30} className='icon' />
      </a>
      <a
        href='https://github.com/fabioguedesj'
        target='_blank'
        rel='noreferrer'>
        <BsGithub size={35} className='icon' />
      </a>
      <a
        href='https://medium.com/@fabioaz.guedes'
        target='_blank'
        rel='noreferrer'>
        <BsMedium size={35} className='icon' />
      </a>
    </Fragment>
  );
};

export default SocialLinks;
