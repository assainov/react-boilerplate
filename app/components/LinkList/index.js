/**
*
* LinkList
*
*/

import React from 'react';


import styles from './styles.css';
import Link from '../Link';

function LinkList({ links, topicName, children }) {
  const linkNodes = links.map(l => (
    <Link key={l.id} link={l} />
  ));
  return (
    <div className={styles.linkList}>
      <h1>{topicName}</h1>
      {linkNodes}
      {children}
    </div>
  );
}

LinkList.propTypes = {
  links: React.PropTypes.arrayOf(React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
  })),
  topicName: React.PropTypes.string.isRequired,
  children: React.PropTypes.element,
};

export default LinkList;
