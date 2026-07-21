import { useState } from 'react';
import styles from 'styles/customhamburger.module.scss';

const CustomHamburger = ({ isOpen = false, toggle = () => {} }) => {
  const toggleMenu = () => {
    toggle();
  };
  return (
    <div className={styles.customHamburger} onClick={toggleMenu}>
      <div
        className={styles.line1}
        style={
          isOpen
            ? { width: '100%', transform: 'translateY(.8rem) rotate(225deg' }
            : {}
        }
      ></div>
      <div
        className={styles.line2}
        style={isOpen ? { width: '100%', transform: 'rotate(-225deg' } : {}}
      ></div>
      <div
        className={styles.line3}
        style={
          isOpen
            ? { width: '100%', transform: 'translateY(-1rem) rotate(225deg' }
            : {}
        }
      ></div>
    </div>
  );
};

export default CustomHamburger;
