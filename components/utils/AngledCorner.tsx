import styles from 'styles/AngledCorner.module.css';

interface Props {
  styling: string
  right?: boolean
}

const AngledCorner: React.FC<Props> = (props) => (
  <div className={`${styles.box} ${props.right ? styles.right : styles.left} ${props.styling}`}>
    {props.children}
  </div>
);

export default AngledCorner;
