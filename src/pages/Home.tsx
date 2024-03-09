import { Helmet } from 'react-helmet';

import Hero from '../components/Hero';
import Body from '../components/Body';
import Projects from '../components/Projects';

function MainPage() {
  return (
    <div>
      <Helmet>
        <title>Big Mike | Home ✌</title>
      </Helmet>
      <Hero />
      <Body />
      <Projects />
    </div>
  );
}

export default MainPage;
