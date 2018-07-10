import React, { Component } from 'react';

import styles from './App.scss';

import MatchCard from './MatchCard';


class App extends Component
{
  state =
    {
      rounds: [],
      currentRound: 0
    };

  round1 = [];

  componentDidMount()
  {
    this.getWorldCupData();
  }

  storeRoundData = (data) =>
  {
    if (data)
    {
      let rounds = this.state.rounds;

      for (let i = 0; i < data.rounds.length; i++)
      {
        let round = [];

        for (let j = 0; j < data.rounds[i].matches.length; j++)
        {
          let match = data.rounds[i].matches[j];

          round.push(
            {
              matchNumber: match.num,
              firstTeam: match.team1.name,
              secondTeam: match.team2.name,
              score: [match.score1, match.score2],
              firstTeamGoals: match.goals1,
              secondTeamGoals: match.goals2,
              stage: data.rounds[i].name,
              date: match.date,
              time: match.time
            });

          rounds.push(round);
        }
      }

      this.setState({ rounds });
    }
  }

  getWorldCupData()
  {
    fetch("https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json")
      .then((response) =>
      {
        return response.json();
      })
      .then((response) =>
      {
        this.storeRoundData(response);
      });
  }

  renderMatchCards = () =>
  {
    if (this.state.rounds.length > 0)
    {
      if (this.state.rounds[this.state.currentRound].length > 0)
      {
        let matchCards = [];

        for (let i = 0; i < this.state.rounds[this.state.currentRound].length; i++)
        {
          matchCards.push(<MatchCard key={this.state.rounds[this.state.currentRound][i].matchNumber} matchData={this.state.rounds[this.state.currentRound][i]} />);
        }

        return matchCards;
      }
      else
      {
        return <p>No Matches To Show 😞</p>;
      }
    }
  }

  render()
  {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <h1> World Cup 2018 </h1>
        </header>

        {this.renderMatchCards()}
      </div>
    );
  }
}

export default App;
