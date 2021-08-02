import AngledCorner from 'components/utils/AngledCorner';
import React from 'react';

import styles from 'styles/Landing.module.css';

interface Props {
  scrollTo: (s: string) => void
}

const Landing: React.ForwardRefRenderFunction<HTMLDivElement, Props> = (props, ref) => (
  <div className={styles.main} ref={ref}>
    <div className={styles.leftpad} />
    <AngledCorner width={60} height={60} right>
      <h1 className={styles.name}>John Keane</h1>
      <p className={styles.subname}>(You can call me Jack)</p>
      <h2 className={styles.declaration}>Seeking full-time software engineering roles</h2>
      <div className={styles.arrow} onClick={() => props.scrollTo('Experience')}/>
    </AngledCorner>
    <div className={styles.rightpad} />
  </div>
);

export default React.forwardRef(Landing);
