import styled from 'styled-components';
import { Helmet } from 'react-helmet';

function Todo() {
  return (
    <div>
      <Helmet>
        <title>Big Mike | Todo App</title>
      </Helmet>
      <Text>Todo App</Text>
    </div>
  );
}

const Text = styled.div`
  text-align: center;
  margin: 25% 0px;
`;

export default Todo;
