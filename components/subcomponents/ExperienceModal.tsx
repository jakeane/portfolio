import React, { useRef } from 'react';
import Image from 'next/image';

import x from 'public/icons/x.svg';
import styles from 'styles/Experience.module.css';
import { ExperienceItem } from 'types/json';
import { LOGOS_BLACK } from 'utils/images';

interface Props {
  experience: ExperienceItem
  setCurrentModal: React.Dispatch<React.SetStateAction<string>>
  current: boolean
}

const ExperienceModal: React.FC<Props> = ({ experience, setCurrentModal, current }) => {
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
        <div className={styles.modal_headers}>
          <Image src={LOGOS_BLACK[experience.logo]} alt={experience.logo} />
          <h3 className={styles.modal_position}>{experience.position}</h3>
          <p className={styles.modal_time}>{experience.start} - {experience.end}</p>
        </div>
        <div className={styles.modal_description}>
          {experience.description.split('. ').map((d, i) => (
            <p key={i} className={styles.statement}>{d}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceModal;
