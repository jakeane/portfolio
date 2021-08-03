import Image from 'next/image';

import AngledCorner from 'components/utils/AngledCorner';
import { ProjectItem } from 'types/json';

import betmate from 'public/clays/betmate.png';
import therabot from 'public/clays/therabot.png';
import whiteboard from 'public/clays/whiteboard.png';
import boboddy from 'public/clays/boboddy.png';
import rightArrow from 'public/icons/right_arrow.svg';

import styles from 'styles/Projects.module.css';

const CLAYS: Record<string, any> = {
  betmate,
  therabot,
  whiteboard,
  boboddy,
};

interface Props {
  project: ProjectItem
  handleLearnMore: (p: ProjectItem) => void
  i: number
}

const ProjectRow: React.FC<Props> = ({ project, handleLearnMore, i }) => (

  <div key={project.name} className={i > 0 ? styles.tail_proj : undefined}>
    <AngledCorner
      right={!(i % 2)}
      height={60}
      width={!i ? 50 : 45}
    >
      <div className={`${i % 2 ? styles.card_left : styles.card_right} ${i === 0 ? styles.head_proj : ''}`}>
        <div className={styles[project.clay]}>
          <Image src={CLAYS[project.clay]} alt={project.clay} />
        </div>
        <div className={`${i % 2 ? styles.data_left : styles.data_right}`}>
          <h3 className={styles.name}>{project.name}</h3>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.learn_more} onClick={() => handleLearnMore(project)}>
            <p className={styles.lm_text}>Learn more</p>
            <Image src={rightArrow} alt='arrow' />
          </div>
        </div>
      </div>
    </AngledCorner>
  </div>
);

export default ProjectRow;