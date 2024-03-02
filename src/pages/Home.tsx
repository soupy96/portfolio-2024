import { Helmet } from 'react-helmet';

import Body from '../components/Body';
import Projects from '../components/Projects';

function MainPage() {
  return (
    <div>
      <Helmet>
        <title>Big Mike | Home ✌</title>
      </Helmet>
      <Body />
      <Projects />
    </div>
  );
}

export default MainPage;
