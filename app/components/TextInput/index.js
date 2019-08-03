/**
*
* TextInput
*
*/

import React from 'react';
import classNames from 'classnames';

import styles from './styles.css';

class TextInput extends React.Component { // eslint-disable-line react/prefer-stateless-function
  value = () => this.field.value;

  render() {
    const { errorText, placeholder } = this.props;

    const fieldError = !!errorText && (
      <div className={styles.errorMessage}>
        { errorText }
      </div>
    );

    return (
      <div>
        <input
          className={classNames(styles.input, this.props.className, { [styles.inputError]: !!errorText })}
          type="text"
          placeholder={placeholder}
          ref={(f) => { this.field = f; }}
        />
        { fieldError }
      </div>
    );
  }
}

TextInput.propTypes = {
  errorText: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  className: React.PropTypes.string,
};

export default TextInput;
