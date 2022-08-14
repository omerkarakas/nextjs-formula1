import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>F1 Seasons | Home</title>
        <meta
          name="description"
          content="This page lists the summary of the latest seasons of Formula 1."
        />
      </Head>
      <div className={styles.container}>
        <h2 className={styles.title}>Home Page</h2>
        <p className={styles.text}>
          A total of 72 World Championship seasons of Formula One (F1) have been
          run.[1] F1 is the highest form of open wheeled auto racing series
          regulated by the Fédération Internationale de l&apos;Automobile (FIA),
          motorsport&apos;s world governing body.[2]
        </p>
        <p className={styles.text}>
          The &quot;formula&quot; in the name alludes to a series of rules
          established by the FIA to which all participants and vehicles are
          required to conform.[2][3] The F1 World Championship season consists
          of a series of races, known as Grands Prix, held usually on
          purpose-built circuits, and in a few cases on closed city streets;[4]
          the most prestigious of the street circuits is the Monaco Grand
          Prix.[5]
        </p>
        <p className={styles.text}>
          As of 2021, the sporting regulations established by the FIA&apos;s
          Statutes state that the minimum number of events needed to form a F1
          season is 8.[6][7] The season can be declared a World Championship if
          F1 visits at least 3 continents in that season according to the
          International Sporting Code.[8] The World Championship rule can be
          declared invalid if the FIA grants F1 an waiver for its
          &quot;long‐established use of the word &apos;World&apos;.&quot;[8]
          Each season throughout F1 history has been made up of between 7 and 22
          Grands Prix,[a][10] and the regulations are regularly amended to
          enable an increase of the maximum number of permitted races each
          year.[2][11]
        </p>
        <Link href="seasons">
          <a className={styles.btn}>See F1 Seasons</a>
        </Link>
        <Image
          src="/f1-crash.jpg"
          alt=""
          width="400"
          height="300"
          priority="false"
          className={styles.img}
        />
      </div>
    </>
  );
}
