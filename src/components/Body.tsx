import styled from 'styled-components';
import hero from '../assets/imgs/oleg-laptev-unsplash.png';

// TODO
// make text look nice

function Body() {
  return (
    <BodyBG>
      {/* rewrite the about to make believable */}
      <BodyBox>
        <p>
          I'm all about chasing my career dreams while squeezing in time for
          what I love. Whether it's getting lost in the great outdoors, gaming
          with friends, or just kicking back with a good book, I'm all about
          balancing work and play. Connecting with friends over shared interests
          keeps me grounded, and I'm always up for trying something new. Life's
          a journey, and I'm just enjoying the ride, one adventure at a time.
        </p>
        <p>
          In the midst of chasing my career dreams and enjoying life's
          adventures, I've found a true passion for web development. There's
          something incredibly rewarding about bringing ideas to life online and
          creating meaningful digital experiences. Whether I'm coding late into
          the night or collaborating with fellow developers, I'm constantly
          honing my skills and pushing the boundaries of what's possible. It's a
          dynamic field that keeps me engaged and inspired, and I can't wait to
          see where this journey takes me next.
        </p>
        <p>
          Detail-oriented and creative Front-End Web Developer with 4 years of
          experience in designing and implementing responsive and user-friendly
          web applications. Proficient in a wide range of front-end technologies
          and dedicated to delivering high-quality, visually appealing websites.
        </p>
        <p>Let's create captivating online experiences together!</p>
      </BodyBox>
    </BodyBG>
  );
}

const BodyBG = styled.div`
  background-image: url(${hero});
  background-size: cover;
  position: absolute;
  left: 0;
  right: 0;
  height: 100vh;
`;

const BodyBox = styled.div`
  width: 50%;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  height: 100%;
  color: #401515;
  text-transform: uppercase;
  font-size: 20px;
`;

export default Body;
