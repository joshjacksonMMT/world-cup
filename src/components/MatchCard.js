import React from 'react';

import styles from './MatchCard.scss';

import Goal from './Goal';


const renderGoals = (goals) =>
{
  if (goals.length > 0)
  {
    let goalComponents = [];

    for (let i = 0; i < goals.length; i++)
    {
      goalComponents.push(<Goal key={goals[i].name + goals[i].score1 + goals[i].score2} name={goals[i].name} minute={goals[i].minute} />)
    }

    return goalComponents;
  }
  else
  {

    return <p>No Goals 😞</p>;
  }
}

const MatchCard = (props) =>
{
  const matchData = props.matchData;

  return (
    <section className={styles.card}>

      <header className={styles.header}>
        <span className={styles.teamHeading}>
          <img src={require(`../resources/images/flags/${matchData.firstTeam.replace(/\s+/g, '-')}.png`)} alt={`${matchData.firstTeam} flag`} />
          <h1>{matchData.firstTeam}</h1>
        </span>

        <span>
          <h1>{matchData.score[0] === null ? "TBD" : matchData.score[0] + "-" + matchData.score[1]}</h1>
        </span>

        <span className={styles.teamHeading}>
          <h1>{matchData.secondTeam}</h1>
          <img src={require(`../resources/images/flags/${matchData.secondTeam.replace(/\s+/g, '-')}.png`)} alt={`${matchData.secondTeam} flag`} />
        </span>
      </header>

      <div className={styles.body}>
        <span className={styles.goals}>
          {matchData.firstTeamGoals === null || matchData.firstTeamGoals === undefined ? <p></p> : renderGoals(matchData.firstTeamGoals)}
        </span>

        <span className={styles.dateInfo}>
          <p className={styles.stage}>{matchData.stage}</p>
          <p>{matchData.date}</p>
          <p>{matchData.time}</p>
        </span>

        <span className={styles.goals}>
          {matchData.secondTeamGoals === null || matchData.secondTeamGoals === undefined ? <p></p> : renderGoals(matchData.secondTeamGoals)}
        </span>
      </div>


    </section>
  );
}

export default MatchCard;
