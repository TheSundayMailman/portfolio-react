import React from 'react';

import '../styles/about.css';

function About(props) {
  return (
    <article className="about">
      <div className="row">
        <section className="col-12 box">
          <h1 className="section-header"><i className="fas fa-user fa-fw" aria-hidden="true"></i>&nbsp;About Me</h1>
          <img className="profile-pic" src={require('../assets/profile-pic.png')} alt="Profile." />
          <p>In college, I took a career test that said I would excel as a "Space Marriage Lawyer". But since no one is getting married in space yet, I decided to marry something else together: <span className="focus-text">programming and user experience.</span> This stemmed from my first experience with a video game. The fantastic blend of programming and UX is not something I take for granted since.</p>
          <p>Today, I strive to replicate that experience for someone else. <span className="focus-text">Solving puzzles behind the scenes, keeping the code light and concise,</span> and delivering an app that users can consume without thinking, all while <span className="focus-text">working with a crew of fellow do'ers</span> is what keeps me going.</p>
        </section>
      </div>
      <div className="row">
        <section className="col-6 box">
          <ul><i className="fas fa-graduation-cap fa-fw" aria-hidden="true"></i>&nbsp;<span className="list-header">School</span>
            <li><span className="list-title">Thinkful,</span>Web Development Intensive, Spring 2018</li>
            <li><span className="list-title">University of California Los Angeles,</span>B.A. of Economics, Summer 2007</li>
          </ul>
        </section>
        <section className="col-6 box">
          <ul><i className="fas fa-briefcase fa-fw" aria-hidden="true"></i>&nbsp;<span className="list-header">Work</span>
            <li><span className="list-title">Full Stack Developer,</span>Thinkful - Academic Projects, May 2018 - present</li>
            <li><span className="list-title">Teaching Assistant,</span>Thinkful - Live Workshops, October 2018 - present</li>
            <li><span className="list-title">Tax Accountant,</span>Tony Quach & Co CPA, May 2007 - April 2018</li>
        </ul>
        </section>
      </div>
    </article>
  );
}

export default About;
