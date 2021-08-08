import React from 'react';
import Image from 'next/image';

import { AngledCorner } from 'components/utils';
import profile from 'public/images/jackkeane.jpg';
import about from 'public/data/about.json';

import styles from 'styles/About.module.css';

const About: React.ForwardRefRenderFunction<HTMLDivElement> = (_props, ref) => (
  <div className={styles.main} ref={ref}>
    <AngledCorner styling={styles.angled_corner} right>
      <div className={styles.container}>
        <div className={styles.img_container}>
          <Image src={profile} alt='profile' className={styles.img} />
        </div>
        <div className={styles.text_container}>
          <h2 className={styles.title}>About me</h2>
          {about.map((paragraph, i) => (
            <p key={i} className={styles.body}>{paragraph}</p>
          ))}
        </div>
      </div>
    </AngledCorner>
  </div>
);

export default React.forwardRef(About);
