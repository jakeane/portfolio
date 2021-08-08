import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';

import {
  About,
  Contact,
  Experience,
  Landing,
  Projects,
} from 'components/sections';
import { NavBar, Heading } from 'components/subcomponents';
import { SECTIONS } from 'utils/constants';

import styles from 'styles/Home.module.css';

const Home: React.FC = () => {
  const navRefs = useRef<(HTMLDivElement | null)[]>(Array(5).fill(null));
  const pageRef = useRef<HTMLDivElement>(null);
  const [closestSection, setClosestSection] = useState(0);
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  const scrollTo = (s: string) => {
    setNavBarOpen(false);
    document.body.style.overflow = 'unset';

    const i = SECTIONS.indexOf(s);
    const el = navRefs.current[i];
    if (!el) return;
    const offset = i === 0 ? 200 : 100;
    const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const newClosest = navRefs.current
        .map((r) => r?.getBoundingClientRect().top ?? -10000)
        .map((d) => (d > 400 ? -10000 : d))
        .reduce((best, curr, i, arr) => (arr[best] > curr ? best : i), 0);

      setClosestSection(newClosest);
      setProgress(window.scrollY / ((pageRef.current?.clientHeight ?? 5500) - window.innerHeight));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Jack Keane</title>
        <meta name="description" content="Portfolio website for Jack Keane" />
        <link rel="icon" href="/icons/logo_black.svg" />
      </Head>

      <main className={styles.main} ref={pageRef}>
        <div className={styles.progress} style={{ width: `${progress * 100}%` }} />
        <NavBar
          scrollTo={scrollTo}
          closestSection={closestSection}
          open={navBarOpen}
          setOpen={setNavBarOpen}
        />
        <Heading />

        <Landing ref={(el) => { navRefs.current[0] = el; }} scrollTo={scrollTo} />
        <div className={styles.exp_transition}/>
        <Experience ref={(el) => { navRefs.current[1] = el; }} />
        <Projects ref={(el) => { navRefs.current[2] = el; }} />
        <About ref={(el) => { navRefs.current[3] = el; }} />
        <Contact ref={(el) => { navRefs.current[4] = el; }} />
      </main>

    </div>
  );
};

export default Home;
