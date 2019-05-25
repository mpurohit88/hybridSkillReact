import React, { Component } from 'react';

export default class Course extends Component {
  render() {
    return (
      <div className="super_container">
        {/* <Header /> */}
        <div className="counter">
          <div
            className="counter_background"
            style={{ backgroundImage: 'url(images/counter_background.jpg)' }} />
          <div className="container">
            <div className="row">
              <div className="col-lg-6" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
