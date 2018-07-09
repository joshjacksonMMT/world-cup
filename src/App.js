import React, { Component } from 'react';

import styles from './App.scss';

import MatchCard from './components/MatchCard';

class App extends Component
{
  mockMatchData =
    {
      firstTeam: "Russia",
      secondTeam: "Saudi Arabia",
      score: [5, 0],
      firstTeamGoals: [{ name: "Gazinsky", minute: "12" }, { name: "Cheryshev", minute: "43" }, { name: "Dzyuba", minute: "71" }, { name: "Cheryshev", minute: "90" }, { name: "Golovin", minute: "90" }]
      date: "2018-06-14",
      time: "18:00"
    };

  render()
  {
    return (
      <div className={styles.app}>
        <MatchCard matchData={this.mockMatchData} />
      </div>
    );
  }
}

export default App;
