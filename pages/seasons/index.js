import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styles from '../../styles/Seasons.module.css';
import { seasons } from '../../data/seasons.js';

export const getStaticProps = async () => {
  // const res = await fetch('https://jsonplaceholder.typicode.com/users');
  // const data = await res.json();
  console.log('get static props...');
  return {
    props: { seasons },
  };
};

const Seasons = ({ seasons }) => {
  return (
    <>
      <Head>
        <title>F1 Seasons | Seasons</title>
        <meta
          name="description"
          content="This page lists the summary of the latest seasons of Formula 1."
        />
      </Head>
      <div>
        <h1 className={styles.title}>All Seasons</h1>

        {seasons.map((season, index) => (
          <Link href={`/seasons/${season.year}`} key={index} className="season">
            <a className={styles.single}>
              <h4>Season {season.year}</h4>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Seasons;
