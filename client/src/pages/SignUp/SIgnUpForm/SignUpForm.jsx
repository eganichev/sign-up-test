import { useCallback, useState } from 'react';
import { INITIAL_ERRORS_STATE, INITIAL_FORM_STATE } from './config.js';
import { SignUpValidator } from './SignUpValidator.js';
import { debounce } from '../../../utils/debounce.js';
import { CheckedLockIcon, LockIcon, PersonIcon } from './icons';
import { FormCheckbox, FormGroup, FormInput } from './components';
import styles from './SignUpForm.module.css';

const SignUpForm = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({ ...INITIAL_FORM_STATE });
  const [formErrors, setFormErrors] = useState({ ...INITIAL_ERRORS_STATE });

  // ! helpers
  const debouncedFieldValidation = useCallback(
    debounce((fieldName, formData) => {
      const validationResult = SignUpValidator.validateField(
        fieldName,
        formData,
      );

      setFormErrors((prev) => ({
        ...prev,
        [fieldName]: validationResult.errors,
      }));
    }),
    [],
  );

  // ! handlers
  const onInputChange = ({ target: { name, value } }) => {
    setFormValues((prev) => {
      const updatedState = { ...prev, [name]: value };

      debouncedFieldValidation(name, updatedState);

      return updatedState;
    });
  };

  const onCheckboxChange = (event) => {
    setFormValues((prev) => ({
      ...prev,
      terms_and_conditions: event.target.checked,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationResult = SignUpValidator.validateForm(formValues);

    if (!validationResult.isValid) {
      setFormErrors({ ...validationResult.errors });
      return;
    }

    const { password_confirmation, terms_and_conditions, ...submitValues } =
      formValues;

    setLoading(true);
    await onSubmit(submitValues);
    setLoading(false);
  };

  const onPasswordPaste = (event) => {
    event.preventDefault();
  };

  // ! render
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.title}>Register Account</h3>

      <div className={styles.form_wrapper}>
        <FormGroup errors={formErrors.email}>
          <FormInput
            icon={<PersonIcon className={styles.icon} />}
            autoFocus
            type='email'
            name='email'
            placeholder='example@habib.me'
            disabled={loading}
            value={formValues.email}
            onChange={onInputChange}
          />
        </FormGroup>

        <FormGroup errors={formErrors.password}>
          <FormInput
            icon={<LockIcon className={styles.icon} />}
            type='password'
            name='password'
            placeholder='Password'
            disabled={loading}
            value={formValues.password}
            onPaste={onPasswordPaste}
            onChange={onInputChange}
          />
        </FormGroup>

        <FormGroup errors={formErrors.password_confirmation}>
          <FormInput
            icon={<CheckedLockIcon className={styles.icon} />}
            type='password'
            name='password_confirmation'
            placeholder='Repeat password'
            disabled={loading}
            value={formValues.password_confirmation}
            onPaste={onPasswordPaste}
            onChange={onInputChange}
          />
        </FormGroup>

        <FormCheckbox
          id='terms-and-conditions'
          label='By signing up, you agree to our Terms and Conditions Policy.'
          disabled={loading}
          value={formValues.terms_and_conditions}
          onChange={onCheckboxChange}
        />

        <button
          type='submit'
          role='button'
          disabled={!formValues.terms_and_conditions || loading}
          className={styles.submit_button}
        >
          {loading ? 'Sending...' : 'Get started'}
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
