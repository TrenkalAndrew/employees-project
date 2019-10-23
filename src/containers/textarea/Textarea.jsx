import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Textarea extends PureComponent {
  state = {
    isFocused: false,
  };

  onHandleFocus = () => {
    this.setState({ isFocused: true });
  };

  onHandleBlur = (e) => {
    const {onChange} = this.props;
    if (!e.target.value) this.setState({isFocused: false});

    onChange(e);
  };

  render() {
    const { label, size, name, withError, errorText } = this.props;
    const { isFocused } = this.state;

    return (
      <div className={`input-field col s${size}`}>
        <textarea
          id={name}
          onFocus={this.onHandleFocus}
          className="materialize-textarea"
          onBlur={this.onHandleBlur}
          name={name}
        />
        <label htmlFor={name} className={isFocused ? 'active' : ''}>
          {label}
        </label>
        {withError && <span className={'form-error-message'}>{errorText}</span>}
      </div>
    );
  }
}

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.number,
  onChange: PropTypes.func,
  name: PropTypes.string,
};

Textarea.defaultProps = {
  size: 6,
  value: '',
  onChange: () => {},
  name: '',
};

export default Textarea;
