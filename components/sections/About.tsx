import React from 'react';
import Image from 'next/image';

import AngledCorner from 'components/utils/AngledCorner';
import styles from 'styles/About.module.css';

import profile from 'public/images/jackkeane.jpg';

const About: React.ForwardRefRenderFunction<HTMLDivElement> = (_props, ref) => (
  <div className={styles.main} ref={ref}>
    <AngledCorner styling={styles.angled_corner} right>
      <div className={styles.container}>
        <div className={styles.img_container}>
          <Image src={profile} alt='profile' className={styles.img} />
        </div>
        <div className={styles.text_container}>
          <h2 className={styles.title}>About me</h2>
          <p className={styles.body}>
            I am a senior at Dartmouth College majoring in Computer Science and minoring in Quantitative Social Sciences.
            My interests are strongest in artificial intelligence and full-stack web development, especially where the two areas intersect.
          </p>
          <p className={styles.body}>
            Ask me about the time I broke both of my hands within 3 days, or when I broke my leg, or one of the 5 times I broke my wrist.
          </p>
        </div>
      </div>
    </AngledCorner>
  </div>
);

export default React.forwardRef(About);
