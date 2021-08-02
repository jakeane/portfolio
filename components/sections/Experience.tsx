import React from 'react';
import styles from 'styles/Experience.module.css';
import AngledCorner from '../utils/AngledCorner';

const Experience: React.ForwardRefRenderFunction<HTMLDivElement> = (_props, ref) => (
  <div className={styles.main} ref={ref}>
    <AngledCorner width={60} height={100}>
      <div>hi</div>
    </AngledCorner>
  </div>
);

export default React.forwardRef<HTMLDivElement>(Experience);
