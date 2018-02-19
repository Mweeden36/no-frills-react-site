import React, { Component } from 'react';
import config from '../config.json';

class Info extends Component {
  render() {
    return (
      <div className="info-container">
        <div className="info">
          <div className="headshot">
            <img alt="My Face" src="/headshot.jpg" />
          </div>
          <div className="header-text">
            <h1>I'm {config.firstName}. A Software Engineer at <a className="header-text-link" href={config.companyLink} target="_blank" rel="noopener noreferrer">{config.companyName}</a>.</h1>
          </div>
          <a href="mailto:weeden.mike92@gmail.com?Subject=Saw%20Your%20Site" className="email-button" target="_top" rel="noopener noreferrer">Let's chat.</a>
        </div>
        <div className="footer">
          <div className="social">
            <a href={config.twitterLink} target="_blank" rel="noopener noreferrer" className="fa fa-twitter"> </a>
            <a href={config.githubLink} target="_blank" rel="noopener noreferrer" className="fa fa-github"> </a>
            <a href={config.linkedInLink} target="_blank" rel="noopener noreferrer" className="fa fa-linkedin"> </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;