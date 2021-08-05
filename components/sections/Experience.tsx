import React, { useState } from 'react';

import styles from 'styles/Experience.module.css';
import AngledCorner from 'components/utils/AngledCorner';

import experience from 'public/data/experience.json';
import { ExperienceItem } from 'types/json';
import ExperienceCard from 'components/subcomponents/ExperienceCard';
import ExperienceModal from 'components/subcomponents/ExperienceModal';

const Experience: React.ForwardRefRenderFunction<HTMLDivElement> = (_props, ref) => {
  const [modalData, setModalData] = useState<ExperienceItem>(experience[0]);
  const [showModal, setShowModal] = useState(false);

  const handleLearnMore = (e: ExperienceItem) => {
    document.body.style.overflow = 'hidden';
    setModalData(e);
    setShowModal(true);
  };

  return (
    <div className={styles.main} ref={ref}>
      {showModal && (
        <ExperienceModal
          experience={modalData}
          setShowModal={setShowModal}
        />
      )}
      <AngledCorner width={60}>
        <div className={styles.container}>
          {experience.map((e) => (
            <ExperienceCard
              key={`${e.company}-${e.position}`}
              experience={e}
              handleLearnMore={handleLearnMore}
            />
          ))}
        </div>
      </AngledCorner>
    </div>
  );
};

export default React.forwardRef<HTMLDivElement>(Experience);
