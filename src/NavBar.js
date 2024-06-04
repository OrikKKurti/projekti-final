import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <div>
      <h1>Welcome to Basketball Leagues</h1>
      <p>Select a league from the navigation bar to learn more.</p>
    </div>
  );
}

function NBA() {
  return (
    <div>
      <h2>NBA</h2>
    </div>
  );
}

function Euroleague() {
  return (
    <div>
      <h2>Euroleague</h2>
    </div>
  );
}

function KosovoSuperleague() {
  return (
    <div>
      <h2>Kosovo Basketball Superleague</h2>
 </div>
  );
}

function NavBar() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Basketball Leagues</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/nba">NBA</Link>
              </li>
              <li>
                <Link to="/euroleague">Euroleague</Link>
              </li>
              <li>
                <Link to="/kosovo-superleague">Kosovo Superleague</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/nba" component={NBA} />
            <Route path="/euroleague" component={Euroleague} />
            <Route path="/kosovo-superleague" component={KosovoSuperleague} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default NavBar;