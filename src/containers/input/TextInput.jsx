import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class TextInput extends PureComponent {
  state = {
    isFocused: false,
  };

  onHandleFocus = () => {
    this.setState({isFocused: true});
  };

  onHandleBlur = (e) => {
    const {onChange} = this.props;
    if (!e.target.value) this.setState({isFocused: false});

    onChange(e);
  };

  render() {
    const {type, label, size, name, withError, errorText} = this.props;
    const {isFocused} = this.state;

    return (
      <div className={`input-field col s${size}`}>
        <input type={type} id={name}
           onFocus={this.onHandleFocus} onBlur={this.onHandleBlur} name={name}  />
        <label htmlFor={name} className={isFocused ? 'active' : ''}>{label}</label>
        {withError && <span className={'form-error-message'}>{errorText}</span>}
      </div>
    );
  }
}

TextInput.propTypes = {
  type: PropTypes.oneOf(['text', 'password']),
  label: PropTypes.string.isRequired,
  size: PropTypes.number,
  onChange: PropTypes.func,
  name: PropTypes.string
};

TextInput.defaultProps = {
  type: 'text',
  size: 6,
  onChange: () => {},
  name: ''
};

export default TextInput;
