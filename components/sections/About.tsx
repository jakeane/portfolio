import React from 'react';
import styles from 'styles/About.module.css';
import AngledCorner from '../utils/AngledCorner';

const About: React.ForwardRefRenderFunction<HTMLDivElement> = (_props, ref) => (
  <div className={styles.main} ref={ref}>
    <AngledCorner right width={55} height={60} >
      <div>hi</div>
    </AngledCorner>
  </div>
);

export default React.forwardRef(About);
