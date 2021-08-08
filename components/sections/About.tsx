import React from 'react';
import Image from 'next/image';

import { AngledCorner } from 'components/utils';
import profile from 'public/images/jackkeane.jpg';
import about from 'public/data/about.json';

import styles from 'styles/About.module.css';

const About: React.ForwardRefRenderFunction<HTMLDivElement> = (_props, ref) => (
  <div className={styles.main} ref={ref}>
    <div className={styles.header}>
      <h2>About</h2>
    </div>
    <AngledCorner styling={styles.angled_corner} right>
      <div className={styles.container}>
        <div className={styles.img_container}>
          <Image src={profile} alt='profile' className={styles.img} />
        </div>
        <div className={styles.text_container}>
          {about.map((paragraph, i) => (
            <p key={i} className={styles.body}>{paragraph}</p>
          ))}
        </div>
      </div>
    </AngledCorner>
  </div>
);

export default React.forwardRef(About);
