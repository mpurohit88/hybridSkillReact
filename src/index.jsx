import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/home';
import About from './components/about';

import Course from './components/course';
import Header from './components/header';
import Footer from './components/footer';

render(
  <Fragment>
    <Router>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/courses" exact={false} component={Course} />
      <Route path="/certification" exact={false} component="" />
      <Route path="/about" exact={false} component={About} />
      <Route path="/contact" exact={false} component="" />
      <Footer />
    </Router>
  </Fragment>,
  document.getElementById('app'),
);
