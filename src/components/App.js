import React from 'react';

import Nav from './main-page/nav.js';
import Header from './main-page/header.js';
import Projects from './main-page/projects.js';
import About from './main-page/about.js';
import Others from './main-page/others.js';
import Footer from './main-page/footer.js';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Header />
        <main id="main">
          <Projects />
          <About />
          <Others />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
