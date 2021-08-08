import Image from 'next/image';

import { AngledCorner } from 'components/utils';
import { ProjectItem } from 'types/json';
import { CLAYS, ICONS } from 'utils/images';
import rightArrow from 'public/icons/right_arrow.svg';

import styles from 'styles/Projects.module.css';

interface Props {
  project: ProjectItem
  handleLearnMore: (p: ProjectItem) => void
  i: number
}

const ProjectRow: React.FC<Props> = ({ project, handleLearnMore, i }) => (

  <div key={project.name} className={i > 0 ? styles.tail_proj : undefined}>
    <AngledCorner
      right={!(i % 2)}
      styling={!i ? styles.ac_head : styles.ac_tail}
    >
      <div className={`${i % 2 ? styles.card_left : styles.card_right} ${i === 0 ? styles.head_proj : ''}`}>
        <div className={styles[project.clay]}>
          <Image src={CLAYS[project.clay]} alt={project.clay} placeholder='blur' />
        </div>
        <div className={`${i % 2 ? styles.data_left : styles.data_right}`}>
          <div className={styles.icon}>
            <Image src={ICONS[project.clay]} alt={project.clay} placeholder='blur' />
          </div>
          <h2>{project.name}</h2>
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
