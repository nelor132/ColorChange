import React, { useEffect, useState } from 'react';
import styles from './Colors.module.scss';
import { allColors } from '../../colorDataBase';
import Color from '../Color/Color';
import {generateArray} from '../App/App'





function Colors({
  colorIndex1,
  colorIndex2,
  colorIndex3,
  colorsArray,
  colorGenerate={colorGenerate}
}) {


  const spaceBarHandler = (e) => {
    if (e.code === 'Space') {
      colorGenerate()
    }
  }
  useEffect(() => {
    document.addEventListener('keypress', spaceBarHandler);
    return () => {
      document.removeEventListener('keypress', spaceBarHandler);
    }
  }, [])


  return (
    <div className={styles.container}>
      <Color
        myColor={allColors[colorIndex3]}
        myIndex={colorsArray[0]}
      />
      <Color
        myColor={allColors[colorIndex3]}
        myIndex={colorsArray[1]}
      />
      <Color
        myColor={allColors[colorIndex3]}
        myIndex={colorsArray[2]}
      />
      <Color
        myColor={allColors[colorIndex1]}
        myIndex={colorsArray[3]}
      />
      <Color
        myColor={allColors[colorIndex2]}
        myIndex={colorsArray[4]}
      />
    </div>
  );
}

export default Colors;