import React from 'react';

import { AngledCorner } from 'components/utils';
import styles from 'styles/Landing.module.css';

interface Props {
  scrollTo: (s: string) => void
}

const Landing: React.ForwardRefRenderFunction<HTMLDivElement, Props> = (props, ref) => (
  <header className={styles.main} ref={ref}>
    <div className={styles.leftpad} />
    <AngledCorner styling={styles.angled_corner} right>
      <h1 className={styles.name}>John Keane</h1>
      <p className={styles.subname}>(You can call me Jack)</p>
      <h2 className={styles.declaration}>Seeking full-time software engineering roles</h2>
      <div className={styles.arrow} onClick={() => props.scrollTo('Experience')}/>
    </AngledCorner>
    <div className={styles.rightpad} />
  </header>
);

export default React.forwardRef(Landing);
