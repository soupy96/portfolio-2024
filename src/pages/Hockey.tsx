import styled from 'styled-components';
import { Helmet } from 'react-helmet';

function Hockey() {
  return (
    <div>
      <Helmet>
        <title>Big Mike | Hockey</title>
      </Helmet>
      <Text>Hockey</Text>
    </div>
  );
}

const Text = styled.div`
  text-align: center;
  margin: 25% 0px;
`;

export default Hockey;
