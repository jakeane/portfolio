import styles from 'styles/AngledCorner.module.css';

interface Props {
  styling: string
  right?: boolean
  small?: boolean
}

const AngledCorner: React.FC<Props> = (props) => (
  <div
    className={`
      ${styles.box} 
      ${props.styling} 
      ${props.right ? styles.right : styles.left} 
      ${props.small ? styles.small : ''}
    `}
  >
    {props.children}
  </div>
);

export default AngledCorner;
