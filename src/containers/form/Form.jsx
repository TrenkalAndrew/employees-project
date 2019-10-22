import React, { PureComponent } from 'react';
import TextInput from '../input/TextInput';
import Textarea from '../textarea/Textarea';
import {
  MATCH_REGEXP_RULE, MATCH_RULE_ERROR_MESSAGE,
  MAX_LENGTH_ERROR_MESSAGE,
  MAX_LENGTH_RULE,
  MIN_LENGTH_ERROR_MESSAGE,
  MIN_LENGTH_RULE,
  REQUIRED_ERROR_MESSAGE,
  REQUIRED_RULE,
} from '../../const';

class Form extends PureComponent {
  state = {
    isValidForm: false,
    label: '',
    text: '',
    phone: '',
    isValidFields: {
      label: false,
      text: false,
      phone: false
    },
    errorMessages: {
      label: '',
      text: '',
      phone: ''
    },
    rules: {
      label: {
        required: true,
        minLength: 5,
        maxLength: 80
      },
      text: {
        required: true,
        maxLength: 128
      },
      phone: {
        required: true,
        match: /(?:\+|\d)[\d\-() ]{9,}\d/g
      }
    }
  };

  onHandleChange = ({target}) => {
    const {name, value} = target;

    this.setState(state => {
      const newState = {...state};
      newState[name] = value;
      return newState;
    }, () => {this.checkValidField(name)})
  };

  checkValidField = (field) => {
    const value = this.state[field];
    const rules = this.state.rules[field];

    for(let rule in rules) {
      if (rule === REQUIRED_RULE) {
        if (!value) {
          this.setState(state => {
            const newState = {...state};

            newState.errorMessages[field] = REQUIRED_ERROR_MESSAGE;
            newState[`${field}Valid`] = false;
            newState.isValidFields[field] = false;

            return newState;
          }, () => this.checkValidForm());

          return false;
        }
      }
      else if (rule === MIN_LENGTH_RULE) {
        if (value.length < rules[rule]) {
          this.setState(state => {
            const newState = {...state};

            newState.errorMessages[field] = `${MIN_LENGTH_ERROR_MESSAGE} ${rules[rule]} symbols`;
            newState.isValidFields[field] = false;
            return newState;

          }, () => this.checkValidForm());

          return false;
        }
      }
      else if (rule === MAX_LENGTH_RULE) {
        if (value.length > rules[rule]) {
          this.setState(state => {
            const newState = {...state};

            newState.errorMessages[field] = `${MAX_LENGTH_ERROR_MESSAGE} ${rules[rule]} symbols`;
            newState.isValidFields[field] = false;

            return newState;
          }, () => this.checkValidForm());

          return false;
        }
      }
      else if (rule === MATCH_REGEXP_RULE) {
        const pattern = rules[rule];

        if (!pattern.test(value)) {
          this.setState(state => {
            const newState = {...state};

            newState.errorMessages[field] = `${MATCH_RULE_ERROR_MESSAGE} 0-9, '-', '+', '(', ')'`;
            newState.isValidFields[field] = false;

            return newState;
          }, () => this.checkValidForm());

          return false;
        }
      }
    }

    this.setState(state => {
      const newState = {...state};
      newState.isValidFields[field] = true;
      newState.errorMessages[field] = '';

      return newState;
    }, () => this.checkValidForm());
  };

  checkValidForm = () => {
    const {isValidFields} = this.state;

    for(let field in isValidFields) {
      if (!isValidFields[field]) {
        this.setState(state => {
          return {...state, isValidForm: false}
        });

        return false;
      }
    }

    this.setState((state) => {
      return {...state, isValidForm: true}
    })
  };

  render() {
    const {isValidForm} = this.state;

    return (
      <form>
        <TextInput label='Label' size={12} onChange={this.onHandleChange} name="label" />
        <Textarea label='Text' size={12} onChange={this.onHandleChange} name="text" />
        <TextInput label='Phone' size={12} onChange={this.onHandleChange} name="phone" />
        <button className="btn waves-effect waves-light" disabled={!isValidForm}>Submit</button>
      </form>
    );
  }
}

export default Form;
