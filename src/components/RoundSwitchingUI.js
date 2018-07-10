import React from 'react';

import styles from './RoundSwitchingUI.scss';


const Button = (props) =>
{
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={props.onClick} type="button">{props.children}</button>
    </div>
  );
}

const renderButtons = (maxRounds, changeRound) =>
{
  let buttons = [];

  for (let i = 0; i < maxRounds; i++)
  {
    buttons.push(<Button onClick={() => { changeRound(i) }}>Matchday {i}</Button>);
  }

  return buttons;
}

/**
 * take in anon function that sets state to a number that is passed in and then assign
 * each button a number from 0 to max rounds (also via props)
 *
*/
const RoundSwitchingUI = (props) =>
{
  const { maxRounds, changeRound } = props;

  return (
    <div className={styles.ui}>
      {renderButtons(maxRounds, changeRound)}
    </div>
  );
}

export default RoundSwitchingUI;
