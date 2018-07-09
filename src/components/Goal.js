import React from 'react';

import styles from './Goal.scss';

const renderGoalInfo = (name, minute, isReversed) =>
{
  if (isReversed)
  {
    return (
      <section className={styles.goal}>
        <span className={styles.info}>
          <p className={styles.minute}> {minute}' </p>
          <p className={styles.name}> {name} </p>

        </span>
        <img className={styles.footballImage} src={require('../resources/images/football.svg')} alt="Football" />
      </section>
    );
  }
  else
  {
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
}

const Goal = (props) =>
{
  const { name, minute, isReversed } = props;

  return renderGoalInfo(name, minute, isReversed);
}

export default Goal;
