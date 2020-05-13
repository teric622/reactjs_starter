import React, { Component } from "react";
import './ComputerV.css';
import Player from './Player.js';
import Computer from './Computer.js';
;
const weapons = ["rock", "paper", "scissors"];
class ComputerV extends Component {
  state = {
    playerOne: weapons[0],
    playerTwo: weapons[0],
    winner: ""
  };

  startGame = () => {
    let counter = 0;
    let gameInterval = setInterval(() => {
      counter++;
      this.setState({
        playerTwo: weapons[Math.floor(Math.random() * weapons.length)],
        winner: ""
      });
      if (counter > 5) {
        clearInterval(gameInterval);
        this.setState({
          winner: this.selectWinner()
        });
      }
    }, 100);
  };
// The logic behind the game lines 31-45
  selectWinner = () => {
    const { playerOne, playerTwo } = this.state;

    if (playerOne === playerTwo) {
      return "Oops it's a Tie!";
    } else if (
      (playerOne === "rock" && playerTwo === "scissors") ||
      (playerOne === "scissors" && playerTwo === "paper") ||
      (playerOne === "paper" && playerTwo === "rock")
    ) {
      return "You won!";
    } else {
      return "Computer won";
    }
  };
  selectWeapon = weapon => {
    this.setState({
      playerOne: weapon,
      winner: ""
    });
  };
 // line 57 <h1 style={{ textAlign: "center" }}>Rock Paper Scissors</h1> deleted

  render() {
    const { playerOne, playerTwo, winner } = this.state;
    return (
      <>
       <h3 style={{ textAlign: "center" }}>Code Diffrently  pipeline devshop</h3>
        <div>
          <Player weapon={playerOne} />
          <Player weapon={playerTwo} />
        </div>
        <div>
          <button
            className="weaponBtn"
            onClick={() => this.selectWeapon("rock")}
          >
            rock
          </button>
          <button
            className="weaponBtn"
            onClick={() => this.selectWeapon("paper")}
          >
            paper
          </button>
          <button
            className="weaponBtn"
            onClick={() => this.selectWeapon("scissors")}
          >
            scissor
          </button>
        </div>
        <div className="winner">{winner ? this.selectWinner() : null}</div>
        <button type="button" onClick={this.startGame}>
          Play!
        </button>
      </>
    );
  }
}



export default ComputerV;