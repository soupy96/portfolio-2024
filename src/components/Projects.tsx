import styled from 'styled-components';

function Projects() {
  return (
    <div className='projectbox'>
      <div className='card todo-card'>
        <Info>
          <p>Todo App</p>
          <DotBox />
        </Info>
      </div>
      <div className='card hockey-card'>
        <Info>
          <p>The Pro Hockey Group</p>
          <DotBox />
        </Info>
      </div>
      <div className='card skull-split-card'>
        <Info>
          <p>Skull Split</p>
          <DotBox />
        </Info>
      </div>
    </div>
  );
}

const Info = styled.div`
  width: 90%;
  color: #f2e1c2;
  padding: 20px 0px;
  border-top: 1px solid #f2e1c2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
`;

const DotBox = styled.span`
  width: 10px;
  height: 10px;
  background-color: #f2e1c2;
`;

export default Projects;
