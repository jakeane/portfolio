import React, { useState } from 'react';

import { ProjectRow, ProjectModal } from 'components/subcomponents';
import { ProjectItem } from 'types/json';
import projects from 'public/data/projects.json';

import styles from 'styles/Projects.module.css';

const Projects: React.ForwardRefRenderFunction<HTMLDivElement> = (_props, ref) => {
  const [currentModal, setCurrentModal] = useState<string>('');

  const handleLearnMore = (p: ProjectItem) => {
    document.body.style.overflow = 'hidden';
    setCurrentModal(p.name);
  };

  return (
    <div className={styles.main} ref={ref}>
      {projects.map((p) => (
        <ProjectModal
          key={p.name}
          project={p}
          current={p.name === currentModal}
          setCurrentModal={setCurrentModal}
        />
      ))}
      {projects.map((p, i) => (
        <ProjectRow
          key={p.name}
          project={p}
          handleLearnMore={handleLearnMore}
          i={i}
        />
      ))}
    </div>
  );
};

export default React.forwardRef(Projects);
