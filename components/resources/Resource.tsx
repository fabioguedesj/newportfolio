import { FC } from 'react';
import ResourceContent from './ResourceContent';
import classes from './Resource.module.scss';

type Props = {
  heading: string;
  list: any;
};

const Resource: FC<Props> = ({ heading, list }) => {
  const resourceContent = list.map((resource: any, i: any) => (
    <ResourceContent
      key={i}
      name={resource.name}
      description={resource.description}
      image={resource.image}
      alt={resource.alt}
      link={resource.link}
    />
  ));

  return (
    <div className={classes.resource}>
      <h2 className='center-text'>{heading}</h2>
      <div className={classes.resources}>{resourceContent}</div>
    </div>
  );
};

export default Resource;
