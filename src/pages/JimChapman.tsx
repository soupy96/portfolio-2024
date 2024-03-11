import styled from 'styled-components';
import { Helmet } from 'react-helmet';

function JimChapman() {
  return (
    <div>
      <Helmet>
        <title>Big Mike | Jim Chapman</title>
      </Helmet>
      <Text>Jim Chapman</Text>
    </div>
  );
}

const Text = styled.div`
  text-align: center;
  margin: 25% 0px;
`;

export default JimChapman;
