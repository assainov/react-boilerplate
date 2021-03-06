/**
*
* AppBar
*
*/

import React from 'react';
import { Link } from 'react-router';

import styles from './styles.css';
import IconButton from '../IconButton';

function AppBar({ toggleDrawer, email }) {
  const loginLink = email ? <p>{ email }</p> : <Link to="/login">Log in</Link>;
  return (
    <div className={styles.appBar}>
      <IconButton
        htmlCode="&#9776;"
        buttonClass={styles.iconButton}
        iconClass={styles.icon}
        onClick={toggleDrawer}
      />
      <div className={styles.heading}>
        Useful Link Manager
      </div>
      <div className={styles.linkContainer}>
        { loginLink }
      </div>
    </div>
  );
}

AppBar.propTypes = {
  toggleDrawer: React.PropTypes.func.isRequired,
  email: React.PropTypes.string,
};

export default AppBar;
