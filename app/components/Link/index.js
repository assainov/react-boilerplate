/**
*
* Link
*
*/

import React from 'react';


import styles from './styles.css';
import IconButton from '../IconButton';

function Link({ link, upvoteLink }) {
  return (
    <div className={styles.link}>
      <div className={styles.votingContainer}>
        <div className={styles.votingCount}>
          {link.voteCount}
        </div>
      </div>
      <div className={styles.detailsContainer}>
        <div>
          <a href={link.url} className={styles.linkAnchor}>
            {link.url}
          </a>
        </div>
        <div className={styles.description}>
          {link.description}
        </div>
      </div>
      <IconButton
        htmlCode="&#10095;"
        buttonClass={styles.votingButton}
        iconClass={styles.votingIcon}
        onClick={() => upvoteLink(link.id)}
      />
    </div>
  );
}

Link.propTypes = {
  link: React.PropTypes.shape({
    voteCount: React.PropTypes.number.isRequired,
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
  }),
  upvoteLink: React.PropTypes.func.isRequired,
};

export default Link;
