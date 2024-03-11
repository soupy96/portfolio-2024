import styled from 'styled-components';
import { Helmet } from 'react-helmet';

function Updraft() {
  return (
    <div>
      <Helmet>
        <title>Big Mike | Updraft</title>
      </Helmet>
      <Text>Updraft</Text>
    </div>
  );
}

const Text = styled.div`
  text-align: center;
  margin: 25% 0px;
`;

export default Updraft;
