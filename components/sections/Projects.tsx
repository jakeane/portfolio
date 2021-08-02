import React from 'react';
import Image from 'next/image';

import AngledCorner from 'components/utils/AngledCorner';

import projects from 'public/data/projects.json';
import rightArrow from 'public/icons/right_arrow.svg';

import styles from 'styles/Projects.module.css';

const Projects: React.ForwardRefRenderFunction<HTMLDivElement> = (_props, ref) => (
  <div className={styles.main} ref={ref}>
    {projects.map((p, i) => (
      <div key={p.name} className={i > 0 ? styles.tail_proj : undefined}>
        <AngledCorner
          right={!(i % 2)}
          height={60}
          width={!i ? 50 : 45}
        >
          <div className={`${i % 2 ? styles.card_left : styles.card_right}`}>
            <div
              style={
                i % 2
                  ? { marginLeft: -p.clay.width / 2 }
                  : { marginRight: -p.clay.width / 2 }
              }
            >
              <Image
                src={`/clays/${p.clay.file}.png`}
                alt={p.clay.file}
                width={p.clay.width}
                height={p.clay.height}
              />
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
