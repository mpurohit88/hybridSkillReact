import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="main_nav_contaner ml-auto">
    <ul className="main_nav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="#">Training</Link>
      </li>
      <li>
        <Link to="/courses">Courses</Link>
      </li>
      <li>
        <Link to="/certification">Certification</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link id="apply" to="#">
          Apply Now
        </Link>
      </li>
    </ul>
    <div className="hamburger menu_mm">
      <i className="fa fa-bars menu_mm" aria-hidden="true" />
    </div>
  </nav>
);

// NavBar.propTypes = {
//   title: PropTypes.string,
// };

export default NavBar;
