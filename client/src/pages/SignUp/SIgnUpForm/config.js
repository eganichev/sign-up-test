export const INITIAL_FORM_STATE = {
  email: '',
  password: '',
  password_confirmation: '',
  terms_and_conditions: false,
};

export const INITIAL_ERRORS_STATE = {
  email: [],
  password: [],
  password_confirmation: [],
};

export const PASSWORD_REGEX_PATTERN =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

export const EMAIL_REGEX =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)])/;

export const PASSWORD_REQUIREMENTS = [
  {
    value: '14',
    error: 'Password must contain two digits of Pi after the decimal point.',
  },
  {
    value: '1969',
    error: 'Password must include the year humans landed on the Moon.',
  },
  {
    value: '404',
    error: 'Password must include the number 404 - errors are important.',
  },
  {
    value: '100',
    error:
      'Password must include the boiling point of water, because a strong password should be hot too!',
  },
];
