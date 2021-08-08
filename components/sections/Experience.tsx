import React, { useState } from 'react';

import { AngledCorner } from 'components/utils';
import { ExperienceCard, ExperienceModal } from 'components/subcomponents';
import { ExperienceItem } from 'types/json';
import experience from 'public/data/experience.json';

import styles from 'styles/Experience.module.css';

const Experience: React.ForwardRefRenderFunction<HTMLDivElement> = (_props, ref) => {
  const [currentModal, setCurrentModal] = useState<string>('');

  const handleLearnMore = (e: ExperienceItem) => {
    document.body.style.overflow = 'hidden';
    setCurrentModal(`${e.company}-${e.position}`);
  };

  return (
    <div className={styles.main} ref={ref}>
      <div className={styles.header}>
        <h2>Experience</h2>
      </div>
      {experience.map((e) => (
        <ExperienceModal
          key={`${e.company}-${e.position}`}
          experience={e}
          current={`${e.company}-${e.position}` === currentModal}
          setCurrentModal={setCurrentModal}
        />
      ))}
      <AngledCorner styling={styles.angled_corner}>
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
