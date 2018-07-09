import React, { Component } from 'react';

import styles from './App.scss';

import MatchCard from './MatchCard';


class App extends Component
{
  mockMatchData =
    {
      firstTeam: "Russia",
      secondTeam: "Saudi Arabia",
      score: [5, 0],
      firstTeamGoals: [{ name: "Gazinsky", minute: "12", goalNumber: 1 }, { name: "Cheryshev", minute: "43", goalNumber: 2 }, { name: "Dzyuba", minute: "71", goalNumber: 3 }, { name: "Cheryshev", minute: "90", goalNumber: 4 }, { name: "Golovin", minute: "90", goalNumber: 5 }],
      secondTeamGoals: [],
      stage: "Round 1",
      date: "2018-06-14",
      time: "18:00"
    };

  state =
    {
      data: {},
      round1: []
    };

  round1 = [];

  componentDidMount()
  {
    this.getWorldCupData();
  }


  initialLoadComplete = false;

  componentDidUpdate()
  {
    const data = this.state.data;

    if (data)
    {
      let round = [];
      for (let i = 0; i < data.rounds[1].matches.length; i++)
      {
        let match = data.rounds[1].matches[i];

        round.push(
          {
            firstTeam: match.team1.name,
            secondTeam: match.team2.name,
            score: [match.score1, match.score2],
            firstTeamGoals: match.goals1,
            secondTeamGoals: match.goals2,
            stage: data.rounds[1].name,
            date: match.date,
            time: match.time
          });
      }

      if (!this.initialLoadComplete)
      {
        this.setState({ round1: round });
        this.initialLoadComplete = true;
      }
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
        this.setState({ data: response });
      });
  }

  renderMatchCards = () =>
  {
    if (this.state.round1.length > 0)
    {
      let matchCards = [];

      for (let i = 0; i < this.state.round1.length; i++)
      {
        matchCards.push(<MatchCard matchData={this.state.round1[i]} />);
      }

      return matchCards;
    }
    else
    {
      return <p>No Matches To Show 😞</p>;
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
