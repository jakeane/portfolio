import React, { useRef } from 'react';
import Image from 'next/image';
import { ProjectItem } from 'types/json';

import betmate from 'public/clays/betmate_black.png';
import therabot from 'public/clays/therabot_black.png';
import whiteboard from 'public/clays/whiteboard_black.png';
import boboddy from 'public/clays/boboddy_black.png';
import x from 'public/icons/x.svg';

import styles from 'styles/Projects.module.css';

const LOGOS: Record<string, any> = {
  betmate,
  therabot,
  whiteboard,
  boboddy,
};

interface Props {
  project: ProjectItem
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ProjectModal: React.FC<Props> = ({ project, setShowModal }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleExitClick = () => {
    document.body.style.overflow = 'unset';
    setShowModal(false);
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current?.contains(e.target as Node)) return;
    handleExitClick();
  };
  return (
    <div className={styles.modal_background} onClick={handleOutsideClick}>
      <div className={styles.modal} ref={modalRef}>
        <div className={styles.x} onClick={handleExitClick}>
          <Image src={x} alt='x' />
        </div>
        <h2 className={styles.modal_title}>{project.name}</h2>
        <div className={styles.modal_summary}>
          <div className={styles.modal_sumitem}>
            <h3 className={styles.modal_sumtitle}>Timeline</h3>
            <p className={styles.modal_sumdata}>{project.start} -</p>
            <p className={styles.modal_sumdata}>{project.end}</p>
          </div>
          <div className={styles.modal_sumitem}>
            <h3 className={styles.modal_sumtitle}>Tools</h3>
            {project.tools.map((t) => (
              <p key={t} className={styles.modal_sumdata}>{t}</p>
            ))}
          </div>
          <div>
            <h3 className={styles.modal_sumtitle}>Deliverables</h3>
            {Object.entries(project.deliverables).map(([name, link]) => (
              <a key={name} href={link} target='_blank' rel='noreferrer'>
                <p className={styles.modal_sumdata}>{name}</p>
              </a>
            ))}
          </div>
        </div>
        <div className={styles.modal_content}>
          <div className={`${styles[project.clay]} ${styles.nomargin}`}>
            <Image src={LOGOS[project.clay]} alt={project.clay} />
          </div>
          <p className={styles.modal_explanation}>{project.explanation}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
