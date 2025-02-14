import styles from './FormInput.module.css';

const FormInput = ({ icon, ...inputProps }) => {
  return (
    <div className={styles.input_wrapper}>
      <span className={styles.icon_wrapper}>{icon}</span>

      <input className={styles.input} {...inputProps} />
    </div>
  );
};

export default FormInput;
