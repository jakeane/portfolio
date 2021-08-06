import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import { ProjectItem } from 'types/json';

import betmate from 'public/clays/betmate_black.png';
import therabot from 'public/clays/therabot_black.png';
import whiteboard from 'public/clays/whiteboard_black.png';
import boboddy from 'public/clays/boboddy_black.png';
import x from 'public/icons/x.svg';
import newtab from 'public/icons/open_in_new.svg';

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
  return ReactDOM.createPortal(
    <div className={styles.modal_background} onClick={handleOutsideClick}>
      <div className={styles.modal} ref={modalRef}>
        <div className={styles.x} onClick={handleExitClick}>
          <Image src={x} alt='x' />
        </div>
        <h2 className={styles.modal_title}>{project.name}</h2>
        <div className={styles.modal_summary}>
          <div className={styles.modal_sumitem}>
            <h4>Timeline</h4>
            <p>{project.start} -</p>
            <p>{project.end}</p>
          </div>
          <div className={`${styles.modal_sumitem} ${styles.tools}`}>
            <h4>Tools</h4>
            {project.tools.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>
          <div className={styles.modal_sumitem}>
            <h4>Deliverables</h4>
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
            <Image src={LOGOS[project.clay]} alt={project.clay} />
          </div>
          <p className={styles.modal_explanation}>{project.explanation}</p>
        </div>
      </div>
    </div>,
    document.getElementById('portal') as HTMLElement,
  );
};

export default ProjectModal;
