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
      this.setState({ highscore: this.state.score });
    }
    this.state.players.forEach(player => (player.count = 0));
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({ score: 0 });
  };

  clickCount = id => {
    this.state.players.find((player, i) => {
      if (player.id === id) {
        if (player.count === 0) {
          player.count = player.count + 1;
          this.setState({ score: this.state.score + 1 });
          this.state.players.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.gameOver();
        }
      }
      return false;
    });
  };

  // Map over this.state.players and render a PlayerCard component for each player object
  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} highscore={this.state.highscore}>
          NBA Cliques
        </Title>
        {this.state.players.map(player => (
          <PlayerCard
            clickCount={this.clickCount}
            id={player.id}
            key={player.id}
            name={player.name}
            image={player.image}
            occupation={player.occupation}
            team={player.team}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
