import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Basketball Leagues</h1>
      </header>
      <main>
        <section>
          <h2>NBA</h2>
          <p>The National Basketball Association (NBA) is a professional basketball league in North America.</p>
        </section>
        <section>
          <h2>Euroleague</h2>
          <p>The EuroLeague is the top-tier European professional basketball league, organized by Euroleague Basketball since 2000.</p>
        </section>
        <section>
          <h2>Kosovo Basketball Superleague</h2>
          <p>The Kosovo Basketball Superleague is the top professional basketball league in Kosovo.</p>
        </section>
      </main>
    </div>
  );
}

export default Home;