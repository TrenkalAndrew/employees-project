import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const TextInput = React.forwardRef(({onChange, type, label, size, name, withError, errorText}, ref) => {
  const [isFocused, setIsFocused] = useState(false);

  const onHandleFocus = () => {
    setIsFocused(true);
  };

  const onHandleBlur = (e) => {
    if (!e.target.value) setIsFocused(false);

    onChange(e);
  };

  return (
    <div className={`input-field col s${size}`}>
      <input type={type} id={name} ref={ref}
         onFocus={onHandleFocus} onBlur={onHandleBlur} name={name}  />
      <label htmlFor={name} className={isFocused ? 'active' : ''}>{label}</label>
      {withError && <span className={'form-error-message'}>{errorText}</span>}
    </div>
  );
});

TextInput.propTypes = {
  type: PropTypes.oneOf(['text', 'password']),
  label: PropTypes.string.isRequired,
  size: PropTypes.number,
  onChange: PropTypes.func,
  name: PropTypes.string,
  withError: PropTypes.bool,
  errorText: PropTypes.string
};

TextInput.defaultProps = {
  type: 'text',
  size: 6,
  onChange: () => {},
  name: '',
  withError: false
};

export default TextInput;
