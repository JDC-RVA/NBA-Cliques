import React, { Component } from "react";
import PlayerCard from "./components/PlayerCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import players from "./players.json";
import "./App.css";

class App extends Component {
  // Setting this.state.players to the players json array
  state = {
    players,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  };

  clickCount = id => {
    this.state.players.find((o, i) => {
      if (o.id === id) {
        if (players[i].count === 0) {
          players[i].count = players[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function() {
            console.log(this.state.score);
          });
          this.state.players.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  };

  // Map over this.state.players and render a PlayerCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} highscore={this.state.highscore}>
          NBA Cliques
        </Title>
        {this.state.players.map(friend => (
          <PlayerCard
            clickCount={this.clickCount}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            team={friend.team}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
