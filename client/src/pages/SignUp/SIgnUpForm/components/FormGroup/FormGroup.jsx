const FormGroup = ({ children, errors }) => {
  // ! helpers
  const renderError = (error, index) => {
    if (errors.length < 2) return error;
    return `${index + 1}. ${error}`;
  };

  // ! render
  return (
    <fieldset>
      {children}

      {!!errors.length && (
        <div className='text-red-500 text-sm pl-3'>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{renderError(error, index)}</li>
            ))}
          </ul>
        </div>
      )}
    </fieldset>
  );
};

export default FormGroup;
