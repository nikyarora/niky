import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Nikhar Arora</h2>
        <p><a href="mailto:nikhararora41@gmail.com">nikhararora41@gmail.com</a></p>
      </header>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Nikhar Arora <Link to="/">nikhar.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
