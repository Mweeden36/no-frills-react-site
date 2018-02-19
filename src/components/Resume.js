import React, { Component } from 'react';
import { resume } from '../config.json';

export default class Resume extends Component {
  renderEmployment() {
    return resume.employmentHistory.map((job) => {
      return (
        <div className="table-display" key={job.company + job.jobTitle}>
          <div className="table-row overview">
            <div className="table-detail">{job.companyName}</div>
            <div className="table-detail date">{job.date}</div>
          </div>
          <div className="table-row">{job.jobTitle}</div>
        </div>
      );
    });
  }

  renderSkills() {
    return resume.skills.map(skill => {
      return (
        <li key={skill}>{skill}</li>
      );
    });
  }

  render() {
    return (
      <div className="resume-container">
        <div className="resume">
          <div className="resume-section about">
            <div className="section-name">
              <p>About me</p>
            </div>
            <div className="text">
              <p>{resume.aboutBlurb}</p>
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
              {this.renderSkills()}
            </ul>
          </div>
          <div className="resume-section experience">
            <div className="section-name">
              <p>Experience</p>
            </div>
            {this.renderEmployment()}
          </div>
          <div className="resume-section education">
            <div className="section-name">
              <p>Education</p>
            </div>
            <div className="table-display">
              <div className="overview table-row">
                <div className="college table-detail">{resume.education.schoolName}</div>
                <div className="date table-detail">{resume.education.date}</div>
              </div>
              <div className="details table-row">{resume.education.degreeName}</div>
              <div className="details table-row">3.33 GPA - <i>Cum Laude</i></div>
              <div className="details table-row">{resume.education.honors}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
