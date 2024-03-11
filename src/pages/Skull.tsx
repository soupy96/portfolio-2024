import styled from 'styled-components';
import { Helmet } from 'react-helmet';

function Skull() {
  return (
    <div>
      <Helmet>
        <title>Big Mike | Skull Split</title>
      </Helmet>
      <Text>Skull Split</Text>
    </div>
  );
}

const Text = styled.div`
  text-align: center;
  margin: 25% 0px;
`;

export default Skull;
