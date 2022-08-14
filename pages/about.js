import Head from 'next/head';
import React from 'react';

const About = () => {
  return (
    <>
      <Head>
        <title>F1 Seasons | About</title>
        <meta
          name="description"
          content="This page lists the summary of the latest seasons of Formula 1."
        />
      </Head>
      <div>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, nihil,
          assumenda animi consequatur ipsum deserunt ratione amet, placeat unde
          quos asperiores nobis error iste magni porro officiis accusantium
          commodi aliquam?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          nisi nesciunt officia aut suscipit ducimus. In perferendis illo
          inventore tempore?
        </p>
      </div>
    </>
  );
};

export default About;
