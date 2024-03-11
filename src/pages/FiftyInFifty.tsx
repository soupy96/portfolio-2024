import styled from 'styled-components';
import { Helmet } from 'react-helmet';

function FiftyInFifty() {
  return (
    <div>
      <Helmet>
        <title>Big Mike | Fifty In Fifty</title>
      </Helmet>
      <Text>Fifty In Fifty</Text>
    </div>
  );
}

const Text = styled.div`
  text-align: center;
  margin: 25% 0px;
`;

export default FiftyInFifty;
