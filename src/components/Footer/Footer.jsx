import React from 'react';
import styles from './Footer.module.scss';
import { Tooltip } from 'antd';

function Footer({ colorGenerate }) {
  return (
    <footer className={styles.footer}>
      <Tooltip placement="topRight" title="Generate new colow">
        <button
          className={styles.generate}
          onClick={() => { colorGenerate() }}
        >Generate</button>
      </Tooltip>
    </footer>
  );
}

export default Footer;