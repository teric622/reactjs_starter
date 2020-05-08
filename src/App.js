import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/LoginContainer/Login.js";
import SignUp from "./components/SignUpContainer/SignUp.js";
import WelcomeScreen from "./components/WelcomeContainer/WelcomeScreen.js";
import GameStats from "./components/GameStatsContainer/GameStats.js";
import Donate from "./components/DonateContainer/Donate.js";

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-up"}>Code Strikers ReactJS Starter</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/welcome-screen"}>Welcome</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Log
                in</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
               <li className="nav-item">
                <Link className="nav-link" to={"/game-stats"}>Game stats</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/donate"}>Donate</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
             <Route path="/welcome-screen" component={WelcomeScreen} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/game-stats" component={GameStats} />
            <Route path="/donate" component={Donate}/>
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
