/**
*
* LinkList
*
*/

import React from 'react';


import styles from './styles.css';
import Link from '../Link';
import IconButton from '../IconButton';

function LinkList({ links, topicName, children, startAdd }) {
  const linkNodes = links.map(l => (
    <Link key={l.id} link={l} />
  ));
  return (
    <div className={styles.linkList}>
      <div className={styles.controlsBar}>
        <h1>{topicName}</h1>
        <IconButton
          htmlCode="&#43;"
          buttonClass={styles.button}
          iconClass={styles.icon}
          onClick={() => startAdd(topicName)}
        />
      </div>
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
  startAdd: React.PropTypes.func.isRequired,
};

export default LinkList;
