import React, { Component } from 'react';

import styles from './MatchCard.scss';

import Goal from './Goal';

const MatchCard = (props) =>
{
  const matchData = props.matchData;


  /* 
    * header element should be 3 column grid. left and right columns containing
    * flag and country name. Middle column the score.
  

    * Extract country flag grabbing to a seperate function that renders out an image with the require link
  */
  return (
    <section className={styles.card}>

      {/* CARD HEADER */}
      <header className={styles.header}>
        <span className={styles.teamHeading}>
          <img src="http://www.countryflags.io/ru/flat/64.png" alt="Russian Flag" />
          <h1>{matchData.firstTeam}</h1>
        </span>

        <span>
          <h1>{matchData.score[0]} - {matchData.score[1]}</h1>
        </span>

        <span className={styles.teamHeading}>
          <h1>{matchData.secondTeam}</h1>
          <img src="http://www.countryflags.io/sa/flat/64.png" alt="Saudi Arabian Flag" />
        </span>
      </header>

      {/* CARD BODY */}
      <div className={styles.body}>
        <span className={styles.goals}>
          <Goal name="Gazinsky" minute="12" />
          <Goal name="Cheryshev" minute="43" />
          <Goal name="Dzyuba" minute="71" />
          <Goal name="Cheryshev" minute="90" />
          <Goal name="Golovin" minute="90" />
        </span>

        <span className={styles.dateInfo}>
          <p>{matchData.date}</p>
          <p>{matchData.time}</p>
        </span>

        <span className={styles.goals}>
        </span>
      </div>


    </section>
  );
}

export default MatchCard;
