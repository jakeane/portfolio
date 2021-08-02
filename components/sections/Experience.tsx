import React from 'react';
import Image from 'next/image';

import styles from 'styles/Experience.module.css';
import AngledCorner from 'components/utils/AngledCorner';

import experience from 'public/data/experience.json';
import dali from 'public/icons/dali.svg';
import bofa from 'public/icons/bofa.svg';
import dartmouth from 'public/icons/dartmouth.svg';
import geisel from 'public/icons/geisel.svg';
import asc from 'public/icons/asc.svg';
import rightArrow from 'public/icons/right_arrow.svg';

const LOGOS: Record<string, any> = {
  dali,
  bofa,
  dartmouth,
  geisel,
  asc,
};

const Experience: React.ForwardRefRenderFunction<HTMLDivElement> = (_props, ref) => (
  <div className={styles.main} ref={ref}>
    <AngledCorner width={60} height={100}>
      <div className={styles.container}>
        {experience.map((e) => (
          <div className={styles.card} key={`${e.company}-${e.position}`}>
            <div className={styles.img}>
              <Image src={LOGOS[e.logo]} alt={e.logo} />
            </div>
            <h3 className={styles.position}>{e.position}</h3>
            <p className={styles.time}>{e.start} - {e.end}</p>
            <div className={styles.learn_more}>
              <p className={styles.lm_text}>Learn more</p>
              <Image src={rightArrow} alt='arrow' />
            </div>
          </div>
        ))}
      </div>
    </AngledCorner>
  </div>
);

export default React.forwardRef<HTMLDivElement>(Experience);
