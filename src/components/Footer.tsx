import styled from 'styled-components';

import BackToTopArrow from '../assets/imgs/backtotoparrow.svg';
import Github from '../assets/imgs/github.svg';
import LinkedIn from '../assets/imgs/linkedin.svg';

function Footer() {
  return (
    <FooterBox>
      <MarqueeBox>
        <ul>
          <li>
            <a href='mailto:michael.campbell14@gmail.com'>
              michael.campbell14@gmail.com |
            </a>
          </li>
          <li>
            <a href='mailto:michael.campbell14@gmail.com'>
              michael.campbell14@gmail.com |
            </a>
          </li>
          <li>
            <a href='mailto:michael.campbell14@gmail.com'>
              michael.campbell14@gmail.com |
            </a>
          </li>
        </ul>
        <ul aria-hidden='true'>
          <li>
            <a href='mailto:michael.campbell14@gmail.com'>
              michael.campbell14@gmail.com |
            </a>
          </li>
          <li>
            <a href='mailto:michael.campbell14@gmail.com'>
              michael.campbell14@gmail.com |
            </a>
          </li>
          <li>
            <a href='mailto:michael.campbell14@gmail.com'>
              michael.campbell14@gmail.com |
            </a>
          </li>
        </ul>
      </MarqueeBox>
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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 500px;
  background-color: #f27830;
`;

const MarqueeBox = styled.div`
  --gap: 1rem;
  display: flex;
  overflow: hidden;
  /* user-select: none; */
  gap: var(--gap);
  font-size: 7rem;
  background-color: #f2e1c2;

  ul {
    flex-shrink: 0;
    display: flex;
    justify-content: space-around;
    /* min-width: 100%; */
    max-width: 100%;
    gap: var(--gap);
    animation: scroll 20s linear infinite;
    color: #f27830;
    font-style: italic;
    text-transform: uppercase;
  }

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - var(--gap)));
    }
  }
`;

const BackToTop = styled.div`
  border-radius: 50%;
  border: 1px #f3e1c2 solid;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.5s;

  &:hover {
    background-color: #f3e1c2;
  }

  &:hover .arrow {
    filter: invert(82%) sepia(57%) saturate(4284%) hue-rotate(331deg)
      brightness(90%) contrast(92%);
  }
`;

const Arrow = styled.img`
  filter: invert(99%) sepia(3%) saturate(3199%) hue-rotate(319deg)
    brightness(99%) contrast(93%);
  transition: filter 0.5s;
`;

const Socials = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 100px;
`;

const SocialImgs = styled.img`
  width: 35px;
  filter: invert(99%) sepia(3%) saturate(3199%) hue-rotate(319deg)
    brightness(99%) contrast(93%);
`;

export default Footer;
