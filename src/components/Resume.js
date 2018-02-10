import React, { Component } from 'react';

export default class Resume extends Component {
  render() {
    return (
      <div className="resume-container">
        <div className="resume">
          <div className="resume-section about">
            <div className="section-name">
              <p>About me</p>
            </div>
            <div className="text">
              <p>I'm a big fan of JavaScript, and I love building things. I have a <i>beautiful</i> wife, and a very smelly dog. I enjoy a good beer, and a good hockey game. Go Rangers!</p>
            </div>
          </div>
          <div className="resume-section skills">
            <div className="section-name">
              <p>Skills</p>
            </div>
            <div className="text">
              <p>Here are some of the languages, libraries and tools I use:</p>
            </div>
            <ul className="list">
              <li>ReactJS</li>
              <li>Backbone.js</li>
              <li>SASS</li>
              <li>Node.js</li>
              <li>Python</li>
              <li>SQL</li>
              <li>AWS</li>
            </ul>
          </div>
          <div className="resume-section experience">
            <div className="section-name">
              <p>Experience</p>
            </div>
            <div className="table-display">
              <div class="table-row overview">
                <div class="table-detail">Critical Mention</div>
                <div class="table-detail date">2018 - Present</div>
              </div>
              <div class="table-row">Software Engineer</div>
            </div>
            <div className="table-display">
              <div class="table-row overview">
                <div class="table-detail">Trans World Entertainment</div>
                <div class="table-detail date">2017 - 2018</div>
              </div>
              <div class="table-row">Software Engineer III</div>
            </div>
            <div className="table-display">
              <div class="table-row overview">
                <div class="table-detail">Salient Management</div>
                <div class="table-detail date">2015 - 2017</div>
              </div>
              <div class="table-row">Application Engineer II</div>
            </div>
            <div className="table-display">
              <div class="table-row overview">
                <div class="table-detail">Critical Mention</div>
                <div class="table-detail date">2014 - 2015</div>
              </div>
              <div class="table-row">Frontend Developer</div>
            </div>
          </div>
          <div className="resume-section education">
            <div className="section-name">
              <p>Education</p>
            </div>
            <div className="table-display">
              <div class="overview table-row">
                <div class="college table-detail">SUNY New Paltz</div>
                <div class="date table-detail">2010 - 2014</div>
              </div>
              <div className="details table-row">B.S. Computer Science</div>
              <div className="details table-row">3.33 GPA - <i>Cum Laude</i></div>
              <div className="details table-row">Dean's List Fall 2010, Spring 2011, Fall 2012 - Spring 2014</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
