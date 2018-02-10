import React, { Component } from 'react';

class Info extends Component {
  render() {
    return (
      <div className="info-container">
        <div className="info">
          <div className="headshot">
            <img alt="My Face" src="/headshot.jpg" />
          </div>
          <div className="header-text">
            <h1>I'm Mike. A Software Engineer at <a className="header-text-link" href="https://criticalmention.com" target="_blank" rel="noopener noreferrer">Critical Mention</a>.</h1>
          </div>
          <a href="mailto:weeden.mike92@gmail.com?Subject=Saw%20Your%20Site" className="email-button" target="_top" rel="noopener noreferrer">Let's chat.</a>
        </div>
        <div className="footer">
          <div className="social">
            <a href="https://twitter.com/turkey_melon" target="_blank" rel="noopener noreferrer" className="fa fa-twitter"> </a>
            <a href="https://github.com/Mweeden36" target="_blank" rel="noopener noreferrer" className="fa fa-github"> </a>
            <a href="https://www.linkedin.com/in/mikeweeden36" target="_blank" rel="noopener noreferrer" className="fa fa-linkedin"> </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;