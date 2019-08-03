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
    addLink: React.PropTypes.func.isRequired,
    topicName: React.PropTypes.string.isRequired,
    addLinkCancelled: React.PropTypes.func.isRequired,
  }
  state = {
    urlError: '',
    descriptionError: '',
  };

  onAdd = () => {
    const url = this.urlField.value();
    const description = this.descriptionField.value();

    let urlError = null;
    let descriptionError = null;

    if (!url.match(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi)) {
      urlError = 'Please provide a valid URL';
    }
    if (!description) {
      descriptionError = 'Please provide a valid description';
    }

    this.setState({
      urlError,
      descriptionError,
    });

    if (urlError || descriptionError) {
      return;
    }

    this.props.addLink({
      url,
      description,
      topicName: this.props.topicName,
    });
  }

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
            errorText={this.state.urlError}
            ref={(f) => (this.urlField = f)}
          />
          <TextInput
            placeholder="Description"
            className={styles.input}
            errorText={this.state.descriptionError}
            ref={(f) => (this.descriptionField = f)}
          />
          <div className={styles.actionContainer}>
            <div
              className={styles.button}
              onClick={this.props.addLinkCancelled}
            >Cancel</div>
            <div
              className={styles.button}
              onClick={this.onAdd}
            >Add</div>
          </div>
        </div>
      </div>
    );
  }
}

export default LinkForm;
