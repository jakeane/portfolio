import Head from 'next/head';

import Landing from 'components/sections/Landing';
import Experience from 'components/sections/Experience';
import Projects from 'components/sections/Projects';
import About from 'components/sections/About';
import Contact from 'components/sections/Contact';
import NavBar from 'components/subcomponents/NavBar';
import Heading from 'components/subcomponents/Heading';
import styles from 'styles/Home.module.css';
import { useEffect, useRef, useState } from 'react';

const SECTIONS = ['Home', 'Experience', 'Projects', 'About', 'Links'];

const Home: React.FC = () => {
  const navRefs = useRef<(HTMLDivElement | null)[]>(Array(5).fill(null));
  const [closestSection, setClosestSection] = useState(0);

  const scrollTo = (s: string) => {
    const i = SECTIONS.indexOf(s);
    const el = navRefs.current[i];
    if (!el) return;
    const offset = i === 0 ? 200 : 40;
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const getClosestPoint = (r: HTMLDivElement | null, i: number) => {
    const endOffset = i === 4 ? 200 : 40;
    const rect = r?.getBoundingClientRect();
    if (!rect) return 10000;
    const { top, bottom } = rect;
    return Math.min(Math.abs(top) - endOffset, Math.abs(bottom));
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const closest = navRefs.current
        .map((r, i) => ({ y: getClosestPoint(r, i), i }))
        .reduce((best, curr) => (
          best.y < curr.y ? best : curr
        ));
      setClosestSection(closest.i);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Jack Keane</title>
        <meta name="description" content="Portfolio website for Jack Keane" />
        <link rel="icon" href="/icons/logo_black.svg" />
      </Head>

      <main className={styles.main}>
        <NavBar scrollTo={scrollTo} closestSection={closestSection} />
        <Heading />

        <Landing ref={(el) => { navRefs.current[0] = el; }} scrollTo={scrollTo} />
        <div className={styles.exp_transition}/>
        <Experience ref={(el) => { navRefs.current[1] = el; }} />
        <div className={styles.proj_transition} />
        <Projects ref={(el) => { navRefs.current[2] = el; }} />
        <div className={styles.about_transition}/>
        <About ref={(el) => { navRefs.current[3] = el; }} />
        <div className={styles.contact_transition}/>
        <Contact ref={(el) => { navRefs.current[4] = el; }} />
      </main>

    </div>
  );
};

export default Home;
