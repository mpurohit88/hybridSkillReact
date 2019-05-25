import React from 'react';
// import PropTypes from 'prop-types';

import NavBar from '../navbar';

const Header = () => (
  <div>
    <header className="header">
      <div className="top_bar">
        <div className="top_bar_container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="top_bar_content d-flex flex-row align-items-center justify-content-start">
                  <ul className="top_bar_contact_list ml-auto">
                    <li>
                      <i className="fa fa-phone" aria-hidden="true" />
                      <div> 8087988044</div>
                    </li>
                    <li>
                      <i className="fa fa-envelope-o" aria-hidden="true" />
                      <div>srinu.ind19@gmail.com</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header_container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="header_content d-flex flex-row align-items-center justify-content-start">
                <div className="logo_container">
                  <a href="#">
                    <div className="logo_text">
                      <img
                        alt="hybrid skill cloud"
                        src="http://nubeselite.sargatechnology.com/images/logo/Nubeselite.png"
                        className="img-responsive"
                        style={{ width: '8em' }} />
                    </div>
                  </a>
                </div>

                <NavBar />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="header_search_container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="header_search_content d-flex flex-row align-items-center justify-content-end">
                <form action="#" className="header_search_form">
                  <input
                    type="search"
                    className="search_input"
                    placeholder="Search"
                    required="required" />
                  <button
                    type="button"
                    className="header_search_button d-flex flex-column align-items-center justify-content-center">
                    <i className="fa fa-search" aria-hidden="true" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
);

// Header.propTypes = {
//   title: PropTypes.string,
// };

export default Header;
