import { seasons } from '../../data/seasons.js';
import parse from 'html-react-parser';

export const getStaticPaths = () => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/users');
  // const data = await res.json();

  const paths = seasons.map((season) => {
    console.log(season.year.toString());
    return { params: { year: season.year.toString() } };
  });

  console.log('paths:', paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  console.log(context.params);
  const year = context.params.year;
  // const res = await fetch('https://jsonplaceholder.typicode.com/users/'+id);
  // const data = await res.json();

  let season = seasons.find((s) => s.year === Number(year));

  return {
    props: { season },
  };
};

const Details = ({ season }) => {
  console.log('seasons:', seasons);
  return (
    <div>
      <h2>Season {season.year}</h2>
      {parse(season.data)}
    </div>
  );
};

export default Details;
