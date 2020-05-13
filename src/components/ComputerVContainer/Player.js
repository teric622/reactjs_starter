import React from "react";
import scissors from './scissors.png';
import rock from './rock.png';
import paper from './paper.png';
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
