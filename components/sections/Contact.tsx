import React from 'react';
import styles from 'styles/Contact.module.css';
import AngledCorner from '../utils/AngledCorner';

const Contact: React.ForwardRefRenderFunction<HTMLDivElement> = (_props, ref) => (
  <div className={styles.main} ref={ref}>
    <AngledCorner width={60} height={60}>
      <div>hi</div>
    </AngledCorner>
  </div>
);

export default React.forwardRef(Contact);
