import React, { useRef } from 'react';
import Image from 'next/image';

import { ProjectItem } from 'types/json';
import { CLAYS_BLACK } from 'utils/images';
import x from 'public/icons/x.svg';
import newtab from 'public/icons/open_in_new.svg';

import styles from 'styles/Projects.module.css';

interface Props {
  project: ProjectItem
  setCurrentModal: React.Dispatch<React.SetStateAction<string>>
  current: boolean
}

const ProjectModal: React.FC<Props> = ({ project, current, setCurrentModal }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleExitClick = () => {
    setCurrentModal('');
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current?.contains(e.target as Node)) return;
    handleExitClick();
  };

  return (
    <div className={`${styles.modal_background} ${current ? styles.background_show : styles.background_hide}`} onClick={handleOutsideClick}>
      <div className={`${styles.modal} ${current ? styles.modal_show : styles.modal_hide}`} ref={modalRef}>
        <div className={styles.x} onClick={handleExitClick}>
          <Image src={x} alt='x' />
        </div>
        <h2 className={styles.modal_title}>{project.name}</h2>
        <div className={styles.modal_summary}>
          <div className={`${styles.modal_sumitem} ${styles.timeline}`}>
            <h3 className={styles.modal_sumtitle}>Timeline</h3>
            <p>{project.start} -</p>
            <p>{project.end}</p>
          </div>
          <div className={`${styles.modal_sumitem} ${styles.tools}`}>
            <h3 className={styles.modal_sumtitle}>Tools</h3>
            {project.tools.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
          <div className={`${styles.modal_sumitem} ${styles.deliverables}`}>
            <h3 className={styles.modal_sumtitle}>Deliverables</h3>
            {Object.entries(project.deliverables).map(([name, link]) => (
              <a
                className={styles.modal_anchor}
                key={name}
                href={link}
                target='_blank'
                rel='noreferrer'
              >
                <p className={styles.modal_link}>
                  {name}
                </p>
                <Image src={newtab} alt='new tab' />
              </a>
            ))}
          </div>
        </div>
        <div className={styles.modal_content}>
          <div className={`${styles[project.clay]} ${styles.nomargin}`}>
            <Image src={CLAYS_BLACK[project.clay]} alt={project.clay} placeholder='blur' />
          </div>
          <p className={styles.modal_explanation}>{project.explanation}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
