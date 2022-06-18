import Resource from 'components/resources/Resource';
import resourcesData from 'data/resourcesData';

const Resources = () => {
  const data = resourcesData.map((resource, i) => (
    <Resource key={i} heading={resource.heading} list={resource.list} />
  ));

  return <section>{data}</section>;
};

export default Resources;
