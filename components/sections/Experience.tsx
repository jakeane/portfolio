import React, { useEffect, useState } from 'react';

import { AngledCorner } from 'components/utils';
import { ExperienceCard, ExperienceModal } from 'components/subcomponents';
import { ExperienceItem } from 'types/json';
import experience from 'public/data/experience.json';

import styles from 'styles/Experience.module.css';

const Experience: React.ForwardRefRenderFunction<HTMLDivElement> = (_props, ref) => {
  const [currentModal, setCurrentModal] = useState<string>('');
  const [right, setRight] = useState(false);

  useEffect(() => {
    const handleWidthChange = () => {
      const isRight = window.innerWidth <= 1000;
      if (isRight !== right) setRight(isRight);
    };

    window.addEventListener('resize', handleWidthChange);

    return () => window.removeEventListener('resize', handleWidthChange);
  }, [right]);

  const handleLearnMore = (e: ExperienceItem) => {
    document.body.style.overflow = 'hidden';
    setCurrentModal(`${e.company}-${e.position}`);
  };

  return (
    <div className={styles.main} ref={ref}>
      <AngledCorner styling={styles.header} small>
        <h2>Experience</h2>
      </AngledCorner>
      {experience.map((e) => (
        <ExperienceModal
          key={`${e.company}-${e.position}`}
          experience={e}
          current={`${e.company}-${e.position}` === currentModal}
          setCurrentModal={setCurrentModal}
        />
      ))}
      <AngledCorner styling={styles.angled_corner} right={right}>
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
