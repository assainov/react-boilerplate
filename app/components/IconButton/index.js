/**
*
* IconButton
*
*/

import React from 'react';
import classNames from 'classnames';


import styles from './styles.css';

function IconButton({ onClick, htmlCode, iconClass, buttonClass }) {
  return (
    <div
      className={classNames(styles.iconButton, buttonClass)}
      onClick={onClick}
    >
      <div
        className={iconClass}
      >{htmlCode}</div>
    </div>
  );
}

IconButton.propTypes = {
  htmlCode: React.PropTypes.string.isRequired,
  iconClass: React.PropTypes.string,
  buttonClass: React.PropTypes.string,
  onClick: React.PropTypes.func.isRequired,
};

export default IconButton;
