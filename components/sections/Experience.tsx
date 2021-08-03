import React, { useRef, useState } from 'react';
import Image from 'next/image';

import styles from 'styles/Experience.module.css';
import AngledCorner from 'components/utils/AngledCorner';

import experience from 'public/data/experience.json';
import dali from 'public/icons/dali.svg';
import bofa from 'public/icons/bofa.svg';
import dartmouth from 'public/icons/dartmouth.svg';
import geisel from 'public/icons/geisel.svg';
import asc from 'public/icons/asc.svg';
import daliBlack from 'public/icons/dali_black.svg';
import bofaBlack from 'public/icons/bofa_black.svg';
import dartmouthBlack from 'public/icons/dartmouth_black.svg';
import geiselBlack from 'public/icons/geisel_black.svg';
import ascBlack from 'public/icons/asc_black.svg';
import x from 'public/icons/x.svg';
import rightArrow from 'public/icons/right_arrow.svg';
import { ExperienceItem } from 'types/json';

const LOGOS: Record<string, any> = {
  dali,
  bofa,
  dartmouth,
  geisel,
  asc,
};

const BLACK_LOGOS: Record<string, any> = {
  dali: daliBlack,
  bofa: bofaBlack,
  dartmouth: dartmouthBlack,
  geisel: geiselBlack,
  asc: ascBlack,
};

const Experience: React.ForwardRefRenderFunction<HTMLDivElement> = (_props, ref) => {
  const [modalData, setModalData] = useState<ExperienceItem>(experience[0]);
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleExitClick = () => {
    document.body.style.overflow = 'unset';
    setShowModal(false);
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current?.contains(e.target as Node)) return;
    handleExitClick();
  };

  const handleLearnMore = (e: ExperienceItem) => {
    document.body.style.overflow = 'hidden';
    setModalData(e);
    setShowModal(true);
  };

  return (
    <div className={styles.main} ref={ref}>
      {showModal && (
        <div className={styles.modal_background} onClick={handleOutsideClick}>
          <div className={styles.modal} ref={modalRef}>
            <div className={styles.x} onClick={handleExitClick}>
              <Image src={x} alt='x' />
            </div>
            <div className={styles.modal_headers}>
              <Image src={BLACK_LOGOS[modalData.logo]} alt={modalData.logo} />
              <h3 className={styles.modal_position}>{modalData.position}</h3>
              <p className={styles.modal_time}>{modalData.start} - {modalData.end}</p>
            </div>
            <div className={styles.modal_description}>
              <p>{modalData.description}</p>
            </div>
          </div>
        </div>
      )}
      <AngledCorner width={60} height={100}>
        <div className={styles.container}>
          {experience.map((e) => (
            <div className={styles.card} key={`${e.company}-${e.position}`}>
              <div className={styles.img}>
                <Image src={LOGOS[e.logo]} alt={e.logo} />
              </div>
              <h3 className={styles.position}>{e.position}</h3>
              <p className={styles.time}>{e.start} - {e.end}</p>
              <div className={styles.learn_more} onClick={() => handleLearnMore(e)}>
                <p className={styles.lm_text}>Learn more</p>
                <Image src={rightArrow} alt='arrow' />
              </div>
            </div>
          ))}
        </div>
      </AngledCorner>
    </div>
  );
};

export default React.forwardRef<HTMLDivElement>(Experience);
