import { FC } from 'react';
import classes from './ResourceContent.module.scss';
import Image from 'next/image';
import { FaShare } from 'react-icons/fa';

type Props = {
  name: string;
  description: string;
  image: string;
  alt: string;
  link: string;
};

// preciso criar links agora, tanto nos cards quanto no social midia

const ResourceContent: FC<Props> = ({ name, description, image, alt, link }) => {
  console.log(image, alt);

  return (
    <a href={link} target='_blank' rel='noreferrer' className='no-link'>
      <div className={classes.resource}>
        <div>
          <Image src={image} alt={alt} width='50' height='50' />
          <FaShare size={35} />
        </div>
        <h3>{name}</h3>
        <span></span>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default ResourceContent;
