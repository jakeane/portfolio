import React from 'react';
import Image from 'next/image';

import AngledCorner from 'components/utils/AngledCorner';
import styles from 'styles/About.module.css';

import profile from 'public/images/jackkeane.jpg';

const About: React.ForwardRefRenderFunction<HTMLDivElement> = (_props, ref) => (
  <div className={styles.main} ref={ref}>
    <AngledCorner right width={55} height={60}>
      <div className={styles.container}>
        <div className={styles.img}>
          <Image src={profile} alt='profile' />
        </div>
      </div>
    </AngledCorner>
  </div>
);

export default React.forwardRef(About);
