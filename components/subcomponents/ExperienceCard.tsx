import Image from 'next/image';

import { ExperienceItem } from 'types/json';

import dali from 'public/icons/dali.svg';
import bofa from 'public/icons/bofa.svg';
import dartmouth from 'public/icons/dartmouth.svg';
import geisel from 'public/icons/geisel.svg';
import asc from 'public/icons/asc.svg';
import rightArrow from 'public/icons/right_arrow.svg';
import styles from 'styles/Experience.module.css';

const LOGOS: Record<string, any> = {
  dali,
  bofa,
  dartmouth,
  geisel,
  asc,
};

interface Props {
  experience: ExperienceItem
  handleLearnMore: (e: ExperienceItem) => void
}

const ExperienceCard: React.FC<Props> = ({ experience, handleLearnMore }) => (
  <div className={styles.card}>
    <div className={styles.img}>
      <Image src={LOGOS[experience.logo]} alt={experience.logo} />
    </div>
    <h3 className={styles.position}>{experience.position}</h3>
    <p className={styles.time}>{experience.start} - {experience.end}</p>
    <div className={styles.learn_more} onClick={() => handleLearnMore(experience)}>
      <p className={styles.lm_text}>Learn more</p>
      <Image src={rightArrow} alt='arrow' />
    </div>
  </div>
);

export default ExperienceCard;
