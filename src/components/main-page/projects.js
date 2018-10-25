import React from 'react';

import '../styles/projects.css';

function Projects(props) {
  return (
    <article className="projects">
      <div className="row">
        <section className="col-12 box">
          <h1 className="section-header"><i className="fas fa-code fa-fw" aria-hidden="true"></i>&nbsp;Projects</h1>
        </section>
      </div>
      <div className="row">
        <section className="col-6 box">
          <h2>DailyVerse</h2>
          <p>Explore the universe, one day at a time. DailyVerse uses NASA's API to access their 20 years worth of daily content called Astronomy Picture of the Day (or APoD). Just enter a day, sit back, and enjoy.</p>
          <hr />
          <p>Tech Stack: HTML5, CSS3, JavaScript, React, Redux, and Moment.</p>
        </section>
        <section className="col-6 box">
          <img id="no-shadow" className="content-pic" src={require('../assets/dailyverse.png')} alt="Pokémon Learning Center screenshot." />
          <a className="repo-link" target="_blank" rel="noopener noreferrer" href="https://dailyverse.netlify.com">Demo</a>
          <a className="repo-link" target="_blank" rel="noopener noreferrer" href="https://github.com/TheSundayMailman/daily-verse">Client</a>
        </section>
      </div>
      <div className="row">
        <section className="col-6 box">
          <h2>Pokémon Learning Center</h2>
          <p>An app for learning the names of a few popular Pokémon. Designed to help with memorizing via repetition, this app uses an algorithm that determines which Pokémon should be reviewed based on a user's history of guesses and misses. A Pokémon is more likely to reappear if the user forgets its name.</p>
          <hr />
          <p>Tech Stack: HTML5, CSS3, JavaScript, React, Redux, Node, Express, MongoDB, and Mongoose.</p>
        </section>
        <section className="col-6 box">
          <img className="content-pic" src={require('../assets/pokemon-learning-center.png')} alt="Pokémon Learning Center screenshot." />
          <a className="repo-link" target="_blank" rel="noopener noreferrer" href="https://pokemon-learning-center-client.herokuapp.com">Demo</a>
          <a className="repo-link" target="_blank" rel="noopener noreferrer" href="https://github.com/thinkful-ei21/alex-albert-spaced-repitition-client">Client</a>
          <a className="repo-link" target="_blank" rel="noopener noreferrer" href="https://github.com/thinkful-ei21/alex-albert-spaced-repitition-server">Server</a>
        </section>
      </div>
      <div className="row">
        <section className="col-6 box">
          <h2>Acceptable Losses</h2>
          <p>An expense tracking app complete with graphs, email reminders, and billing history. Enter an income source to compare against your monthly expenses. See all upcoming bills and mark them as paid so they reappear on their next due date, all done in this convenient app.</p>
          <hr />
          <p>Tech Stack: HTML5, CSS3, JavaScript, React, Redux, Moment, Nivo, Big Calendar, Cron, and NodeMailer. Uses APIs from Cloudinary.</p>
        </section>
        <section className="col-6 box">
          <img className="content-pic" src={require('../assets/acceptable-losses.png')} alt="Acceptable Losses screenshot." />
          <a className="repo-link" target="_blank" rel="noopener noreferrer" href="https://acceptable-losses.herokuapp.com">Demo</a>
          <a className="repo-link" target="_blank" rel="noopener noreferrer" href="https://github.com/thinkful-ei21/acceptable-losses-client">Client</a>
          <a className="repo-link" target="_blank" rel="noopener noreferrer" href="https://github.com/thinkful-ei21/acceptable-losses-server">Server</a>
        </section>
      </div>
      <div className="row">
        <section className="col-6 box">
          <h2>Pixel Adventures</h2>
          <p>A browser RPG adventure reminiscent of 90's console era video games. Play as a Knight, Cleric, or Wizard, each donning unique stats and abilities. Defeat the evil Arch-Mage and restore peace to the land of Astera. Talk to town folks, battle monsters, and earn powerful new skills.</p>
          <hr />
          <p>Tech Stack: HTML5, CSS3, JavaScript, React, Redux, Node, Express, BCryptJS, JWT, and Passport.</p>
        </section>
        <section className="col-6 box">
          <img className="content-pic" src={require('../assets/pixel-adventures.png')} alt="Pixel Adventures screenshot." />
          <a className="repo-link" target="_blank" rel="noopener noreferrer" href="https://pixel-adventures-client.herokuapp.com">Demo</a>
          <a className="repo-link" target="_blank" rel="noopener noreferrer" href="https://github.com/TheSundayMailman/pixel-adventures-client">Client</a>
          <a className="repo-link" target="_blank" rel="noopener noreferrer" href="https://github.com/TheSundayMailman/pixel-adventures-server">Server</a>
        </section>
      </div>
    </article>
  );
}

export default Projects;
