import React from 'react';

import styles from 'styles/Contact.module.css';
import AngledCorner from 'components/utils/AngledCorner';

import Links from 'components/subcomponents/Links';

const Contact: React.ForwardRefRenderFunction<HTMLDivElement> = (_props, ref) => (
  <div className={styles.main} ref={ref}>
    <AngledCorner styling={styles.angled_corner}>
      <div className={styles.container}>
        <h2>Get in touch</h2>
        <Links />
      </div>
    </AngledCorner>
  </div>
);

export default React.forwardRef(Contact);
