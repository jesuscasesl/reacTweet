import React from 'react';

import styles from './header.css';

function Header ({headerText}){
  return(
    <div className={styles.root}>
      <h1 className={styles.logo}>{headerText}</h1>
    </div>
  )
}

export default Header;
