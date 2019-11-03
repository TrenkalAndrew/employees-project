import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Textarea = ({ onChange, label, size, name, withError, errorText }) => {
  const [isFocused, setIsFocused] = useState(false);

  const onHandleFocus = () => {
    setIsFocused(true);
  };

  const onHandleBlur = e => {
    if (!e.target.value) setIsFocused(false);

    onChange(e);
  };

  return (
    <div className={`input-field col s${size}`}>
      <textarea
        id={name}
        onFocus={onHandleFocus}
        className="materialize-textarea"
        onBlur={onHandleBlur}
        name={name}
      />
      <label htmlFor={name} className={isFocused ? 'active' : ''}>
        {label}
      </label>
      {withError && <span className={'form-error-message'}>{errorText}</span>}
    </div>
  );
};

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.number,
  onChange: PropTypes.func,
  name: PropTypes.string,
  withError: PropTypes.bool,
  errorText: PropTypes.string
};

Textarea.defaultProps = {
  size: 6,
  value: '',
  onChange: () => {},
  name: '',
  withError: false
};

export default Textarea;
