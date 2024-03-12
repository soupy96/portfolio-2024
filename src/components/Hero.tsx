import styled from 'styled-components';
import hero from '../assets/imgs/oleg-laptev-unsplash.png';

// TODO
// make text look nice

function Hero() {
  return (
    <HeroBG>
      <HeroOneLiner>
        Crafting intuitive user experiences with pixel-perfect precision to
        bring digital visions to life.
      </HeroOneLiner>
    </HeroBG>
  );
}

const HeroBG = styled.div`
  background-image: url(${hero});
  background-size: cover;
  position: absolute;
  left: 0;
  right: 0;
  top: 76px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HeroOneLiner = styled.h2`
  font-size: 5rem;
  width: 40%;
  margin-left: 10%;
`;

export default Hero;
