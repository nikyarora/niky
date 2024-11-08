import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
// import { faDownload } from '@fortawesome/free-brands-svg-icons/faDownload';
import { faCircleDown } from '@fortawesome/free-regular-svg-icons/faCircleDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import { skills, categories } from '../data/resume/skills';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Nikhar Arora's resume"
    fullPage={true}
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <div className='resume-header'>
            <h2>Resume</h2>
            <a className='download-button' href={'/assets/resume.pdf'} aria-label={'resume'}>
              <FontAwesomeIcon icon={faCircleDown} />
            </a>
          </div>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Resume;
