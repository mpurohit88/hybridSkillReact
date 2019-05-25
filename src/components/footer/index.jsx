import React from 'react';
// import PropTypes from 'prop-types';

const Footer = () => (
  <footer className="footer">
    <div
      className="footer_background"
      style={{ backgroundImage: 'url(images/footer_background.png)' }} />
    <div className="container">
      <div className="row footer_row">
        <div className="col">
          <div className="footer_content">
            <div className="row">
              <div className="col-lg-4 footer_col">
                <div className="footer_section footer_about">
                  <div className="footer_logo_container">
                    <a href="#">
                      <div className="footer_logo_text">
                        Nubes
                        <span>Elite</span>
                      </div>
                    </a>
                  </div>
                  <div className="footer_about_text">
                    <p>Best in Salesforce Training and Certification</p>
                  </div>
                  <div className="footer_social">
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/srinusfdconlinetraining/">
                          <i className="fa fa-facebook" aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/c/SrinuSFDCSaleforce">
                          <i
                            className="fa fa-youtube-play"
                            aria-hidden="true" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.urbanpro.com/bangalore/srinivas-s"
                          style={{ paddingTop: '0.7em' }}>
                          <img
                            alt="hybrid skill cloud"
                            src="http://nubeselite.sargatechnology.com/images/urbanpro.png"
                            style={{ width: '16px' }} />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/srinusfdc">
                          <i className="fa fa-twitter" aria-hidden="true" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 footer_col">
                <div className="footer_section footer_contact">
                  <div className="footer_title">Contact Us</div>
                  <div className="footer_contact_info">
                    <ul>
                      <li>BTM 2nd Stage, Bangalore</li>
                      <li>Email: srinu.ind19@gmail.com</li>
                      <li>Phone: 8087988044 </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 footer_col">
                <div className="footer_section footer_links">
                  <div className="footer_title">links</div>
                  <div className="footer_links_container">
                    <ul>
                      <li>
                        <a href="http://nubeselite.sargatechnology.com/faq">
                          FAQs
                        </a>
                      </li>
                      <li>
                        <a href="http://nubeselite.sargatechnology.com/blogs">
                          Blogs
                        </a>
                      </li>
                      <li>
                        <a href="http://nubeselite.sargatechnology.com/privacy">
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href="http://nubeselite.sargatechnology.com/terms">
                          Terms & Conditions
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 footer_col clearfix">
                <div className="footer_section footer_about">
                  <div className="footer_title">Mobile</div>
                  <div className="footer_mobile_content">
                    <div className="footer_image">
                      <a href="#">
                        <img src="images/mobile_1.png" alt="" />
                      </a>
                    </div>
                    <div className="footer_image">
                      <a href="#">
                        <img src="images/mobile_2.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row copyright_row">
        <div className="col">
          <div className="copyright d-flex flex-lg-row flex-column align-items-center justify-content-start">
            <div className="cr_text">
              Copyright &copy;All rights reserved | Nubeselite
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

// Footer.propTypes = {
//   title: PropTypes.string,
// };

export default Footer;
