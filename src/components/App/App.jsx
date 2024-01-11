import React, { useState } from 'react';
import Colors from '../Colors/Colors';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './App.module.scss';
import { allColors } from '../../colorDataBase';

export const generateArray = (length, max) => {
  const rands = [];
  while (rands.length < length) {
    const r = Math.floor(Math.random() * max);
    if (rands.indexOf(r) === -1) { rands.push(r) }
  }
  return rands;
};


function App() {
  const [colorIndex1, setColorsIndex1] = useState(getRandomInt());
  const [colorIndex2, setColorsIndex2] = useState(getRandomInt());
  const [colorIndex3, setColorsIndex3] = useState(getRandomInt());

  const [colorsArray, setColorsArray] = useState(generateArray(5, allColors[colorIndex3].length - 1));

  const colorGenerate = () => {
    setColorsIndex1(getRandomInt());
    setColorsIndex2(getRandomInt());
    setColorsIndex3(getRandomInt());
    setColorsArray(generateArray(5, allColors.length - 1));
  }

  function getRandomInt(min = 0, max = 10) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }
  return (
    <div className={styles.container}>
      <Header />
      <Colors
        colorIndex1={colorIndex1}
        colorIndex2={colorIndex2}
        colorIndex3={colorIndex3}
        colorsArray={colorsArray}
        colorGenerate={colorGenerate}
      />
      <Footer
        colorGenerate={colorGenerate}
      />
    </div>
  );
}

export default App;