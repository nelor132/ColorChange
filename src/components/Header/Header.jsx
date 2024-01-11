import React from 'react';
import styles from './Header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles['heder-logo-instrucrion']}>
        <div className={styles.logo}></div>
        <span className={styles.instruction}>Press the spacebar to generate color paletts!</span>
      </div>
    </header>
  );
}

export default Header;