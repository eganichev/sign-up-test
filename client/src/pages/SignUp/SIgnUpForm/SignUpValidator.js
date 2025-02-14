import {
  EMAIL_REGEX,
  PASSWORD_REQUIREMENTS,
  PASSWORD_REGEX_PATTERN,
  INITIAL_FORM_STATE as formData,
} from './config.js';

export class SignUpValidatorClass {
  validateForm(formData) {
    const errors = {
      email: this.#validateEmail(formData.email),
      password: this.#validatePassword(formData.password),
      password_confirmation: this.#validatePasswordConfirmation(
        formData.password,
        formData.password_confirmation,
      ),
    };

    const isValid = Object.values(errors).every((error) => !error.length);

    return { isValid, errors };
  }

  validateField(fieldName, formData) {
    let errors = [];
    const fieldValue = formData[fieldName];

    switch (fieldName) {
      case 'email':
        errors = this.#validateEmail(fieldValue);
        break;
      case 'password':
        errors = this.#validatePassword(fieldValue);
        break;
      case 'password_confirmation':
        errors = this.#validatePasswordConfirmation(
          formData.password,
          fieldValue,
        );
        break;
      default:
        throw new Error(`Unknown field ${fieldName}`);
    }

    return { isValid: !errors.length, errors };
  }

  #validateEmail(email) {
    const errors = [];
    if (!email) {
      errors.push('Email is required');
      return errors;
    }

    if (!EMAIL_REGEX.test(email)) errors.push('Invalid email format');

    return errors;
  }

  #validatePassword(password) {
    const errors = [];
    if (!password) {
      errors.push('Password is required');
      return errors;
    }

    if (!PASSWORD_REGEX_PATTERN.test(password)) {
      errors.push(
        'Password must contain at least 8 characters, including uppercase, lowercase, number, and special character',
      );
    }

    PASSWORD_REQUIREMENTS.forEach(({ value, error }) => {
      if (!password.includes(value)) errors.push(error);
    });

    return errors;
  }

  #validatePasswordConfirmation(password, passwordConfirmation) {
    const errors = [];
    if (!passwordConfirmation) {
      errors.push('Password confirmation is required');
      return errors;
    }

    if (passwordConfirmation !== password)
      errors.push('Passwords do not match');

    return errors;
  }
}

export const SignUpValidator = new SignUpValidatorClass();
