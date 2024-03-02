import styled from 'styled-components';

import BackToTopArrow from '../assets/imgs/backtotoparrow.svg';
import Github from '../assets/imgs/github.svg';
import LinkedIn from '../assets/imgs/linkedin.svg';

function Footer() {
  return (
    <FooterBox>
      <BackToTop>
        <Arrow className='arrow' src={BackToTopArrow} />
      </BackToTop>
      <Socials>
        <a
          href='https://www.linkedin.com/in/michaelcampbell14/'
          rel='nofollow'
          target='_blank'
        >
          <SocialImgs src={LinkedIn} />
        </a>
        <a href='https://github.com/soupy96' rel='nofollow' target='_blank'>
          <SocialImgs src={Github} />
        </a>
      </Socials>
    </FooterBox>
  );
}

const FooterBox = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 400px;
  background-color: #f27830;
  /* background-color: #f3e1c2; */
`;

const BackToTop = styled.div`
  border-radius: 50%;
  /* border: 1px #de813c solid; */
  border: 1px #f3e1c2 solid;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.5s;
  margin-bottom: 50px;

  &:hover {
    background-color: #f3e1c2;
    /* background-color: #de813c; */
  }

  &:hover .arrow {
    /* wt pepo colour */
    /* filter: invert(94%) sepia(6%) saturate(1080%) hue-rotate(345deg) brightness(95%) contrast(99%); */
    /* orange colour */
    filter: invert(82%) sepia(57%) saturate(4284%) hue-rotate(331deg)
      brightness(90%) contrast(92%);
  }
`;

const Arrow = styled.img`
  /* orange colour */
  /* filter: invert(82%) sepia(57%) saturate(4284%) hue-rotate(331deg) brightness(90%) contrast(92%); */
  /* wt pepo colour */
  filter: invert(99%) sepia(3%) saturate(3199%) hue-rotate(319deg)
    brightness(99%) contrast(93%);
  transition: filter 0.5s;
`;

const Socials = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 200px;
`;

const SocialImgs = styled.img`
  width: 50px;
  /* Dark Brown */
  /* filter: invert(10%) sepia(62%) saturate(965%) hue-rotate(321deg) brightness(102%) contrast(98%); */
  /* Orange */
  /* filter: invert(82%) sepia(57%) saturate(4284%) hue-rotate(331deg) brightness(90%) contrast(92%); */
  /* Light Brown */
  /* filter: invert(28%) sepia(22%) saturate(1346%) hue-rotate(346deg) brightness(98%) contrast(85%); */
  /* Green */
  /* filter: invert(39%) sepia(56%) saturate(1707%) hue-rotate(124deg) brightness(97%) contrast(92%); */
  /* wt pepo colour */
  filter: invert(99%) sepia(3%) saturate(3199%) hue-rotate(319deg)
    brightness(99%) contrast(93%);
`;

export default Footer;
