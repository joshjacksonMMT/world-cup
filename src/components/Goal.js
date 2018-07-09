import React, { Component } from 'react';

import styles from './Goal.scss';

const Goal = (props) =>
{
  const { name, minute } = props;

  return (
    <section className={styles.goal}>
      <img className={styles.footballImage} src={require('../resources/images/football.svg')} alt="Football" />
      <span className={styles.info}>
        <p className={styles.name}> {name} </p>
        <p className={styles.minute}> {minute}' </p>
      </span>
    </section>
  );
}

export default Goal;
