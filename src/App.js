import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
import Leagues from './Leagues';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/leagues" component={Leagues} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;