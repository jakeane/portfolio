import React from 'react';

import { AngledCorner } from 'components/utils';
import styles from 'styles/Contact.module.css';

import { Links } from 'components/subcomponents';

const Contact: React.ForwardRefRenderFunction<HTMLDivElement> = (_props, ref) => (
  <footer className={styles.main} ref={ref}>
    <AngledCorner styling={styles.angled_corner}>
      <div className={styles.container}>
        <h2>Get in touch</h2>
        <Links />
      </div>
    </AngledCorner>
  </footer>
);

export default React.forwardRef(Contact);
