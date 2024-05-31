import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Nikhar Arora's personal website. New York based UC Berkeley graduate, "
    + 'McKinsey senior engineer.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Welcome</Link></h2>
          <p>
            Thanks for visiting!
          </p>
        </div>
      </header>
      <p> Welcome to my website! Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        or <Link to="/photography">photography</Link>! {' '}
      </p>
    </article>
  </Main>
);

export default Index;
