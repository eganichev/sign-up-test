import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AUTH_API } from '../../api/index.js';
import { SignUpForm } from './SignUpForm';
import styles from './SignUp.module.css';

const SignUp = () => {
  const navigate = useNavigate();
  // ! handlers
  const onSignUpSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    try {
      await AUTH_API.signUp(data);
      navigate('/', { replace: true });
    } catch (error) {
      toast.error(error.message, { position: 'top-right' });
    }
  };

  // ! render
  return (
    <section className={styles.page_section}>
      <div className={styles.form_container}>
        <SignUpForm onSubmit={onSignUpSubmit} />
      </div>
    </section>
  );
};

export default SignUp;
