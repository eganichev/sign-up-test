const FormCheckbox = (props) => {
  return (
    <div className='inline-flex items-center'>
      <input
        id={props.id}
        className='mr-2'
        type='checkbox'
        value={props.value}
        disabled={props.disabled}
        onChange={props.onChange}
      />
      <label htmlFor={props.id} className='-mt-[1px] text-sm text-gray-200'>
        {props.label}
      </label>
    </div>
  );
};

export default FormCheckbox;
