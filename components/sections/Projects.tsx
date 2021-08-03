import React from 'react';
import Image from 'next/image';

import AngledCorner from 'components/utils/AngledCorner';

import projects from 'public/data/projects.json';
import rightArrow from 'public/icons/right_arrow.svg';
import betmate from 'public/clays/betmate.png';
import therabot from 'public/clays/therabot.png';
import whiteboard from 'public/clays/whiteboard.png';
import boboddy from 'public/clays/boboddy.png';

import styles from 'styles/Projects.module.css';

const CLAYS: Record<string, any> = {
  betmate,
  therabot,
  whiteboard,
  boboddy,
};

const Projects: React.ForwardRefRenderFunction<HTMLDivElement> = (_props, ref) => (
  <div className={styles.main} ref={ref}>
    {projects.map((p, i) => (
      <div key={p.name} className={i > 0 ? styles.tail_proj : undefined}>
        <AngledCorner
          right={!(i % 2)}
          height={60}
          width={!i ? 50 : 45}
        >
          <div className={`${i % 2 ? styles.card_left : styles.card_right} ${i === 0 ? styles.head_proj : ''}`}>
            <div className={styles[p.clay]}>
              <Image src={CLAYS[p.clay]} alt={p.clay} />
            </div>
            <div className={`${i % 2 ? styles.data_left : styles.data_right}`}>
              <h3 className={styles.name}>{p.name}</h3>
              <p className={styles.description}>{p.description}</p>
              <div className={styles.learn_more}>
                <p className={styles.lm_text}>Learn more</p>
                <Image src={rightArrow} alt='arrow' />
              </div>
            </div>
          </div>
        </AngledCorner>
      </div>
    ))}
  </div>
);

export default React.forwardRef(Projects);
