import React from 'react';

import '../styles/footer.css';

function Footer(props) {
  return (
    <footer role="contentinfo">
      <div className="row">
        <section className="col-4 box">
          <h1>This is Albert Sare!</h1>
          <p>Problem solver by day. Photographer and toy collector by night.</p>
        </section>
        <section className="col-4 box">
          <ul>&nbsp;<span className="list-header">Contact Me</span>
            <li><i className="fas fa-mobile-alt fa-fw" aria-hidden="true"></i>&nbsp;415.244.9340</li>
            <li><a target="_blank" rel="noopener noreferrer" href="mailto:alsare@ucla.edu"><i className="fas fa-envelope fa-fw" aria-hidden="true"></i>&nbsp;alsare@ucla.edu</a></li>
          </ul>
        </section>
        <section className="col-4 box">
          <ul><span className="list-header">Check Me Out</span>
            <li><a target="_blank" rel="noopener noreferrer" href="https://thesundaymailman.github.io/portfolio-page/files/albert-sare-resume.pdf"><i className="fas fa-file-alt fa-fw" aria-hidden="true"></i>&nbsp;Résumé</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/TheSundayMailman"><i className="fab fa-github fa-fw" aria-hidden="true"></i>&nbsp;GitHub</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/albert-sare"><i className="fab fa-linkedin fa-fw" aria-hidden="true"></i>&nbsp;LinkedIn</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bokehheroes"><i className="fab fa-instagram fa-fw" aria-hidden="true"></i>&nbsp;Instagram</a></li>
          </ul>
        </section>
        <a id="footer-footer" href="#top"><i className="fas fa-arrow-circle-up fa-fw" aria-hidden="true"></i>&nbsp;Back to top</a>
      </div>
    </footer>
  );
}

export default Footer;
