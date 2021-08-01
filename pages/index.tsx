import Head from 'next/head';

import Landing from 'components/sections/Landing';
import Experience from 'components/sections/Experience';
import Projects from 'components/sections/Projects';
import About from 'components/sections/About';
import Contact from 'components/sections/Contact';
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
      <div className={styles.proj_transition}/>
      <Projects />
      <div className={styles.about_transition}/>
      <About />
      <div className={styles.contact_transition}/>
      <Contact />
    </main>

  </div>
);

export default Home;
