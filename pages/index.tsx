import MainWrapper from 'components/layout/MainWrapper';
import Resources from 'components/layout/Resources';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <MainWrapper>
      <Resources />
    </MainWrapper>
  );
};

export default Home;
