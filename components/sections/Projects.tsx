import styles from 'styles/Projects.module.css';
import projects from 'public/data/projects.json';
import React from 'react';
import AngledCorner from '../utils/AngledCorner';

const Projects: React.ForwardRefRenderFunction<HTMLDivElement> = (_props, ref) => (
  <div className={styles.main} ref={ref}>
    {projects.map((p, i) => (
      <div key={i} className={i > 0 ? styles.tail_proj : undefined}>
        <AngledCorner
          right={i % 2 === 0}
          height={60}
          width={i === 0 ? 50 : 45}
        >
          <div>hi</div>
        </AngledCorner>
      </div>
    ))}
  </div>
);

export default React.forwardRef(Projects);
