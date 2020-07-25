
import styles from './Badge.module.css';
import React from "react";

const potato = () => {
  return (
    <div className={styles.potato}>

        <img src={require('../src/image/감자.png')} width="27"/>

  );
}

export default potato;