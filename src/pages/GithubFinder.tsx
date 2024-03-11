import styled from 'styled-components';
import { Helmet } from 'react-helmet';

function GithubFinder() {
  return (
    <div>
      <Helmet>
        <title>Big Mike | Github Finder</title>
      </Helmet>
      <Text>Github Finder</Text>
    </div>
  );
}

const Text = styled.div`
  text-align: center;
  margin: 25% 0px;
`;

export default GithubFinder;
