import React from "react";
import scissors from '../assets/scissors.png';
import rock from '../assets/rock.png';
import paper from '../assets/paper.png';
const Player = ({weapon}) => {
   return (
        <div className="player">
        <img className="player-image"
         src= {
              weapon === "rock" ? rock : weapon === "scissors" ? scissors : paper
         
          } alt="rock"
        />
        </div>
   )
}

export default Player;
