import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1>About</h1>
      <p>This website provides information about various basketball leagues around the world.</p>
      <p>The reason the creator of this page chose these three specific leagues is because he wants to promote his country's proffesional basketball league the Kosovo Basketball Superleague(Superliga e Kosoves),
        and he chose the 2 best basketball leagues in the world: "The NBA" and "Euroleague".
      </p>
      
<p> 
  For more information about the leagues you can click these links:
  <a href="https://en.wikipedia.org/wiki/Kosovo_Basketball_Superleague">Kosovo Basketball Superleague:</a> <br/>
  <a href="https://en.wikipedia.org/wiki/National_Basketball_Association">NBA:</a> <br/>
  <a href="https://en.wikipedia.org/wiki/EuroLeague">Euroleague:</a> <br/>
</p>   
<p className='logot'>
<img src="https://upload.wikimedia.org/wikipedia/en/3/3b/Kosovo_Basketball_SL_logo.png" alt=""/>
<img src="https://brandcenter.euroleague.net/uploads/2/brand_center_web/492/99//2019-06-28-10-23-1815.png" alt=""/>
<img src="https://cdn.phenompeople.com/CareerConnectResources/NBANBAUS/social/1024x512-1670500646586.jpg" alt=""/>
</p>
    </div>
  );
}

export default About;
