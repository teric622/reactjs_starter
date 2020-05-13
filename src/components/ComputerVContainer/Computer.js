import React from "react";
import Cscissors from './compscissors.png';
import Crock from './comprock.png';
import Cpaper from './comppaper.png';
const Computer = ({weapon}) => {
   return (
        <div className="Computer">
        <img className="Computer-image"
         src= {
              weapon === "Crock" ? Crock : weapon === "Cscissors" ? Cscissors : Cpaper
         
          } alt="Crock"
        />
        </div>
   )
}

export default Computer;