import { useEffect } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import Website from '../assets/imgs/website.svg';
import JimImg from '../assets/imgs/jim-chapman-large.png';

function JimChapman() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  });

  return (
    <div>
      <Helmet>
        <title>Big Mike | Jim Chapman</title>
      </Helmet>
      <ProjectBox>
        <TitleMainImg>
          <h1>Jim Chapman</h1>
          <img src={JimImg} />
        </TitleMainImg>
        <ProjectInfo>
          <ProjectLinks>
            <p>Project Links:</p>
            <a href='https://jimchapman.ca/' target='_blank' rel='nofollow'>
              <img src={Website} />
            </a>
          </ProjectLinks>
          <ProjectBody>
            <p>
              A basic WordPress blog site where Jim would write blog posts about
              his life or his opinions on the political scene in Canada. He also
              is advertising his current and upcoming songs and novels.
            </p>
            <p>
              Creating several custom blog post types for multiple different
              blogs. Using Contact Form 7 and Google recaptcha for his contact
              form and user comments.
            </p>
          </ProjectBody>
        </ProjectInfo>
      </ProjectBox>
    </div>
  );
}

const ProjectBox = styled.div`
  margin: 50px 0px;
`;

const TitleMainImg = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  h1 {
    font-size: 5rem;
    font-family: 'Source Serif 4', serif;
    margin: 50px 0px;
  }
`;

const ProjectInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 0px;
  position: relative;
  height: 100%;
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: sticky;
  top: 50px;
  width: 10%;
  border-top: 1px solid #401515;
  border-bottom: 1px solid #401515;
  padding: 10px 0px;
  height: 150px;

  p {
    font-size: 1.5rem;
    width: 100%;
  }

  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    filter: invert(9%) sepia(15%) saturate(5622%) hue-rotate(331deg)
      brightness(99%) contrast(94%);
  }
`;

const ProjectBody = styled.div`
  width: 60%;

  p {
    font-size: 3rem;
    margin-bottom: 30px;
  }
`;

export default JimChapman;
