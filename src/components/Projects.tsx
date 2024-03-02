import styled from 'styled-components';

function Projects() {
  return (
    <ProjectBox>
      <NumberSide>
        {/* Replace the numbers with the "card" img of each project */}
        {/* have each card slide out and the new card slide in */}
        {/* when hovering the card img make the outline of the img the same as hoving over a video on angusemmerson.com/outback-posthouse */}
        {/* outline the card with a line and the title of the current project */}
        <p>01</p>
        <p>02</p>
        <p>03</p>
      </NumberSide>
      <ProjectSide>
        <SingleProject>
          <Info>
            <h2>This is a test</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae qui
              optio eos omnis odit culpa assumenda quasi ipsum! Laborum in
              quaerat voluptatem eos nemo quae numquam saepe aut quod natus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              consequatur nemo quod earum accusamus consequuntur, aperiam rem
              doloribus? Laudantium magnam laboriosam sed est eius saepe dicta
              ad velit ullam libero.
            </p>
          </Info>
          <Number>01</Number>
        </SingleProject>
        <SingleProject>
          <Info>
            <h2>Michael Campbell</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae qui
              optio eos omnis odit culpa assumenda quasi ipsum! Laborum in
              quaerat voluptatem eos nemo quae numquam saepe aut quod natus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              consequatur nemo quod earum accusamus consequuntur, aperiam rem
              doloribus? Laudantium magnam laboriosam sed est eius saepe dicta
              ad velit ullam libero.
            </p>
          </Info>
          <Number>02</Number>
        </SingleProject>
        <SingleProject>
          <Info>
            <h2>Robyn Walters</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae qui
              optio eos omnis odit culpa assumenda quasi ipsum! Laborum in
              quaerat voluptatem eos nemo quae numquam saepe aut quod natus.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              consequatur nemo quod earum accusamus consequuntur, aperiam rem
              doloribus? Laudantium magnam laboriosam sed est eius saepe dicta
              ad velit ullam libero.
            </p>
          </Info>
          <Number>03</Number>
        </SingleProject>
      </ProjectSide>
    </ProjectBox>
  );
}

const ProjectBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const NumberSide = styled.div`
  width: 40%;
  font-size: 400px;
`;

const ProjectSide = styled.div`
  width: 50%;
`;

const SingleProject = styled.div`
  height: 550px;
  border-top: 1px solid #000;
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  width: 70%;
  font-size: 20px;

  h2 {
    font-size: 100px;
    margin-bottom: 20px;
  }
`;

const Number = styled.div`
  width: 5%;
  text-align: right;
`;

export default Projects;
