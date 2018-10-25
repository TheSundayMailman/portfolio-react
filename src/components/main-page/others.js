import React from 'react';

import '../styles/others.css';

function Others(props) {
  return (
    <article className="others">
      <div className="row">
        <section className="col-12 box">
          <h1 className="section-header"><i className="fas fa-camera fa-fw" aria-hidden="true"></i>&nbsp;Fun Stuff</h1>
          <p>On my off times, I'm also ordained to marry photography and collectibles into a lovely blend. Playing with action figures is never out of style.</p>
          <p><span className="focus-text">Bokeh</span> (pronounced <span style={{fontStyle:'italic'}}>BOH-kay</span>, from the Japanese word [<span title="Japanese language text" lang="ja">暈け</span>] meaning "haze") is an aesthetic quality of blur produced by out-of-focus portions of an image. It's also my choice technique for highlighting my subjects.</p>
          <p>Check out some of my work!</p>
        </section>
      </div>
      <div className="row">
        <section className="col-6 box">
          <div className="container">
            <img className="content-pic" src={require('../assets/joker-harley.jpg')} alt="Joker and Harlye Quinn taking a selfie." />
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bokehheroes">
              <div className="overlay">
                <p className="overlay-text" aria-hidden="true">Click for more!</p>
              </div>
            </a>
          </div>
          <p className="caption-text">Joker and Harley, always up to no good...</p>
        </section>
        <section className="col-6 box">
          <div className="container">
            <img className="content-pic" src={require('../assets/kirby-super-star.jpg')} alt="Kirby eating french fries." />
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bokehheroes">
              <div className="overlay">
                <p className="overlay-text" aria-hidden="true">Click for more!</p>
              </div>
            </a>
          </div>
          <p className="caption-text">Kirby, just doing his thing.</p>
        </section>
      </div>
      <div className ="row">
        <section className="col-6 box">
          <div className="container">
            <img className="content-pic" src={require('../assets/big-boss.jpg')} alt="Big Boss prawling in a field of grass." />
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bokehheroes">
              <div className="overlay">
                <p className="overlay-text" aria-hidden="true">Click for more!</p>
              </div>
            </a>
          </div>
          <p className="caption-text">Big Boss, snaking around...</p>
        </section>
        <section className="col-6 box">
          <div className="container">
            <img className="content-pic" src={require('../assets/princess-leia.jpg')} alt="Princess Leia gazing into a hologram." />
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bokehheroes">
              <div className="overlay">
                <p className="overlay-text" aria-hidden="true">Click for more!</p>
              </div>
            </a>
          </div>
          <p className="caption-text">Princess Leia, hologram gazing.</p>
        </section>
      </div>
    </article>
  );
}

export default Others;
