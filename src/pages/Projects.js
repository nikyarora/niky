import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main
    title="Projects"
    description="Learn about Nikhar Arora's projects."
    fullPage={true}
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2><Link to="/projects">Projects</Link></h2>
        </div>
      </header>
      <div class="grid-container">
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
      </div>
    </article>
  </Main>
);

export default Projects;
