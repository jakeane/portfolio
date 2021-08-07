import React, { useRef } from 'react';
import Image from 'next/image';

import dali from 'public/icons/dali_black.svg';
import bofa from 'public/icons/bofa_black.svg';
import dartmouth from 'public/icons/dartmouth_black.svg';
import geisel from 'public/icons/geisel_black.svg';
import asc from 'public/icons/asc_black.svg';
import x from 'public/icons/x.svg';
import styles from 'styles/Experience.module.css';
import { ExperienceItem } from 'types/json';

const LOGOS: Record<string, any> = {
  dali,
  bofa,
  dartmouth,
  geisel,
  asc,
};

interface Props {
  experience: ExperienceItem
  setCurrentModal: React.Dispatch<React.SetStateAction<string>>
  current: boolean
}

const ExperienceModal: React.FC<Props> = ({ experience, setCurrentModal, current }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleExitClick = () => {
    document.body.style.overflow = 'unset';
    setCurrentModal('');
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current?.contains(e.target as Node)) return;
    handleExitClick();
  };

  return (
    <div className={styles.modal_background} onClick={handleOutsideClick} style={current ? undefined : { display: 'none' }}>
      <div className={styles.modal} ref={modalRef}>
        <div className={styles.x} onClick={handleExitClick}>
          <Image src={x} alt='x' />
        </div>
        <div className={styles.modal_headers}>
          <Image src={LOGOS[experience.logo]} alt={experience.logo} />
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
