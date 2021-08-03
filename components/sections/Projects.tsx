import React, { useState } from 'react';

import projects from 'public/data/projects.json';

import styles from 'styles/Projects.module.css';
import { ProjectItem } from 'types/json';
import ProjectRow from 'components/subcomponents/ProjectRow';
import ProjectModal from 'components/subcomponents/ProjectModal';

const Projects: React.ForwardRefRenderFunction<HTMLDivElement> = (_props, ref) => {
  const [modalData, setModalData] = useState<ProjectItem>(projects[0]);
  const [showModal, setShowModal] = useState(false);

  const handleLearnMore = (p: ProjectItem) => {
    document.body.style.overflow = 'hidden';
    setModalData(p);
    setShowModal(true);
  };

  return (
    <div className={styles.main} ref={ref}>
      {showModal && (
        <ProjectModal
          project={modalData}
          setShowModal={setShowModal}
        />
      )}
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
