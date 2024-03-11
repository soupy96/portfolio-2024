import { Helmet } from 'react-helmet';

import Hero from '../components/Hero';
import Body from '../components/Body';
import ProjectSection from '../components/ProjectSection';

function MainPage() {
  return (
    <div>
      <Helmet>
        <title>Big Mike ✌</title>
      </Helmet>
      <Hero />
      <Body />
      <ProjectSection />
    </div>
  );
}

export default MainPage;
