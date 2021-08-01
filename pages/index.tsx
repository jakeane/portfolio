import Head from 'next/head';

import Landing from 'components/Landing';
import Experience from 'components/Experience';
import styles from 'styles/Home.module.css';

const Home: React.FC = () => (
  <div className={styles.container}>
    <Head>
      <title>Jack Keane</title>
      <meta name="description" content="Portfolio website for Jack Keane" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <Landing />
      <div className={styles.exp_transition}/>
      <Experience />
    </main>

  </div>
);

export default Home;
