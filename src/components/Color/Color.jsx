import React, { useEffect, useState } from 'react';
import styles from './Color.module.scss';
import { Button, message, Tooltip } from 'antd';
import { LockOutlined, UnlockOutlined } from '@ant-design/icons';

function Color({ myColor, myIndex }) {
  const [isLocked, setIsLocked] = useState({});
  const [thisColor, setThisColor] = useState(Object.keys(isLocked).length ? isLocked : myColor[myIndex]);
  useEffect(() => {
    setThisColor(Object.keys(isLocked).length ? isLocked : myColor[myIndex])
  }, [myColor])
  const success = () => {
    message.success('Color is copy!');
  };

  if (myColor.length <= myIndex) { myIndex = myIndex - myColor.length }
  function getRGB(c) {
    return parseInt(c, 16) || c
  }

  function getsRGB(c) {
    return getRGB(c) / 255 <= 0.03928
      ? getRGB(c) / 255 / 12.92
      : Math.pow((getRGB(c) / 255 + 0.055) / 1.055, 2.4)
  }

  function getLuminance(hexColor) {
    return (
      0.2126 * getsRGB(hexColor.substr(1, 2)) +
      0.7152 * getsRGB(hexColor.substr(3, 2)) +
      0.0722 * getsRGB(hexColor.substr(-2))
    )
  }

  function getContrast(f, b) {
    const L1 = getLuminance(f)
    const L2 = getLuminance(b)
    return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05)
  }

  function getTextColor(bgColor) {
    const whiteContrast = getContrast(bgColor, '#ffffff')
    const blackContrast = getContrast(bgColor, '#000000')

    return whiteContrast > blackContrast ? '#ffffff' : '#000000'
  }
  return (
    <div
      className={styles.color}
      style={{
        'backgroundColor': `${thisColor['hex']}`,
        'color': `${getTextColor(thisColor['hex'])}`
      }}
    >
      <Button
        size='middle'
        className={styles.lock}
        shape="round"
        icon={Object.keys(isLocked).length ? <LockOutlined /> : <UnlockOutlined />}
        onClick={() => {
          Object.keys(isLocked).length ? setIsLocked({}) : setIsLocked(myColor[myIndex])
        }}
      ></Button>
      <button
        style={{
          'color': `${getTextColor(thisColor['hex'])}`,
        }}
        onClick={() => {
          navigator.clipboard.writeText(thisColor.hex);
          success()
        }}
        className={styles['this-color']}>{thisColor['hex']}</button>
      <h3 style={{
        'color': `${getTextColor(thisColor['hex'])}`,
      }} className={styles['color-name']}>{thisColor['name']}</h3>
    </div >
  );
}

export default Color;