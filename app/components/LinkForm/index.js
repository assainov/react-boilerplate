/**
*
* LinkForm
*
*/

import React from 'react';

import styles from './styles.css';
import TextInput from '../TextInput';

class LinkForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    cancelLogin: React.PropTypes.func.isRequired,
  };
  state = {};

  render() {
    return (
      <div className={styles.overlay}>
        <div className={styles.linkForm}>
          <div className={styles.heading}>
            Add a link
          </div>
          <TextInput
            placeholder="URL"
            className={styles.input}
          />
          <TextInput
            placeholder="Description"
            className={styles.input}
          />
          <div className={styles.actionContainer}>
            <div
              className={styles.button}
              onClick={this.props.cancelLogin}
            >Cancel</div>
            <div
              className={styles.button}
              onClick={this.login}
            >Log in</div>
          </div>
        </div>
      </div>
    );
  }
}

export default LinkForm;
