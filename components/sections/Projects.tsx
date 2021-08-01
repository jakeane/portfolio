import styles from 'styles/Projects.module.css';
import projects from 'public/projects.json';
import AngledCorner from '../utils/AngledCorner';

const Projects = (): JSX.Element => (
  <div className={styles.main}>
    {projects.map((p, i) => (
      <div key={i} className={i > 0 ? styles.tail_proj : undefined}>
        <AngledCorner
          right={i % 2 === 0}
          height={60}
          width={i === 0 ? 50 : 45}
        >
          <div>hi</div>
        </AngledCorner>
      </div>
    ))}
  </div>
);

export default Projects;
