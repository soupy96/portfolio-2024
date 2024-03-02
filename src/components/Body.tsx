import styled from 'styled-components';

// TODO

function Body() {
  return (
    <BodyBox>
      {/* rewrite the about to make believable */}
      <p>
        I find myself at a crucial juncture in life, navigating the transition
        from young adulthood to full independence. I'm in the process of
        establishing myself in my career, considering further education, and
        exploring different avenues to shape my future. It's a time of both
        ambition and self-discovery, where I'm learning to balance new
        responsibilities while still enjoying the freedom of youth. I'm focused
        on building my professional reputation, nurturing meaningful
        relationships, and seizing opportunities for personal growth. Each day
        presents its own set of challenges and adventures, but I approach them
        all with enthusiasm and determination.
      </p>
      {/* insert a space inbetween the two paragraphs */}
      <p>
        Detail-oriented and creative Front-End Web Developer with 4 years of
        experience in designing and implementing responsive and user-friendly
        web applications. Proficient in a wide range of front-end technologies
        and dedicated to delivering high-quality, visually appealing websites.
      </p>
      <p>{/*write a single sentance to end this section*/}</p>
      {/* include work and school experience? */}
      {/* list out the info the same as refire.heycusp.com truck section */}
    </BodyBox>
  );
}

const BodyBox = styled.div`
  text-transform: uppercase;
`;

export default Body;
