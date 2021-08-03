import React from 'react';
import Image from 'next/image';

import AngledCorner from 'components/utils/AngledCorner';
import styles from 'styles/About.module.css';

import profile from 'public/images/jackkeane.jpg';

const About: React.ForwardRefRenderFunction<HTMLDivElement> = (_props, ref) => (
  <div className={styles.main} ref={ref}>
    <AngledCorner right width={55} height={60}>
      <div className={styles.container}>
        <div className={styles.img_container}>
          <Image src={profile} alt='profile' className={styles.img} />
        </div>
        <div className={styles.text_container}>
          <h2 className={styles.title}>About me</h2>
          <p className={styles.body}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus semper odio, sit amet consequat arcu accumsan tincidunt. Etiam eu elit in arcu feugiat convallis.
          </p>
          <p className={styles.body}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac turpis diam. Quisque iaculis sed.</p>
        </div>
      </div>
    </AngledCorner>
  </div>
);

export default React.forwardRef(About);
