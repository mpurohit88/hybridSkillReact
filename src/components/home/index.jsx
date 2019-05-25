import React, { Component } from 'react';

// import './global.css';

export default class Home extends Component {
  render() {
    return (
      <div className="super_container">
        <div className="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">
          <div className="menu_close_container">
            <div className="menu_close">
              <div />
              <div />
            </div>
          </div>
          <div className="search">
            <form action="#" className="header_search_form menu_mm">
              <input
                type="search"
                className="search_input menu_mm"
                placeholder="Search"
                required="required" />
              <button
                type="button"
                className="header_search_button d-flex flex-column align-items-center justify-content-center menu_mm">
                <i className="fa fa-search menu_mm" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>

        <div
          className="container-fluid"
          style={{ paddingLeft: '0', marginTop: '185px' }}>
          <img
            src="http://nubeselite.sargatechnology.com/images/logo/Nubeselite.png"
            alt="hybrid skill cloud"
            className="img-responsive"
            height="350" />
        </div>

        <div className="features">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="section_title_container text-center">
                  <h2 className="section_title">Welcome To Nubeselite</h2>
                  <div className="section_subtitle">
                    <p>
                      We are known as to be best training providers in the
                      Bangalore IT market area.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row features_row">
              <div className="col-lg-3 feature_col">
                <div className="feature text-center trans_400">
                  <div className="feature_icon">
                    <img src="images/icon_1.png" alt="" />
                  </div>
                  <h3 className="feature_title">Learn from Experts</h3>
                  <div className="feature_text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 feature_col">
                <div className="feature text-center trans_400">
                  <div className="feature_icon">
                    <img src="images/icon_2.png" alt="" />
                  </div>
                  <h3 className="feature_title">Study Material</h3>
                  <div className="feature_text">
                    <p>Free Study Materials & Tools</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 feature_col">
                <div className="feature text-center trans_400">
                  <div className="feature_icon">
                    <img src="images/icon_3.png" alt="" />
                  </div>
                  <h3 className="feature_title">Best Courses</h3>
                  <div className="feature_text">
                    <p>Industry Oriented Courses</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 feature_col">
                <div className="feature text-center trans_400">
                  <div className="feature_icon">
                    <img src="images/icon_4.png" alt="" />
                  </div>
                  <h3 className="feature_title">Certifications</h3>
                  <div className="feature_text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="courses">
          <div
            className="section_background parallax-window"
            data-parallax="scroll"
            data-image-src="images/courses_background.jpg"
            data-speed="0.8" />
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="section_title_container text-center">
                  <h2 className="section_title">Offered Courses</h2>
                  <div className="section_subtitle">
                    <p>
                      Expert Level Courses and Training Guarantees 100% Job
                      Placements to Help You Get Your Dream Job
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row courses_row">
              <div className="col-lg-4 course_col">
                <div className="course">
                  <div className="course_image">
                    <img src="images/course_1.jpg" alt="" />
                  </div>
                  <div className="course_body">
                    <h3 className="course_title">
                      <a href="course.html">Admin</a>
                    </h3>
                    <div className="course_text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipi elitsed do
                        eiusmod tempor
                      </p>
                    </div>
                  </div>
                  <div className="course_footer">
                    <div className="course_footer_content d-flex flex-row align-items-center justify-content-start">
                      <div className="courses_button trans_200">
                        <a href="http://nubeselite.sargatechnology.com/singlecourse">
                          Explore More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 course_col">
                <div className="course">
                  <div className="course_image">
                    <img src="images/course_2.jpg" alt="" />
                  </div>
                  <div className="course_body">
                    <h3 className="course_title">
                      <a href="course.html">Development</a>
                    </h3>
                    <div className="course_text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipi elitsed do
                        eiusmod tempor
                      </p>
                    </div>
                  </div>
                  <div className="course_footer">
                    <div className="course_footer_content d-flex flex-row align-items-center justify-content-start">
                      <div className="courses_button trans_200">
                        <a href="http://nubeselite.sargatechnology.com/singlecourse">
                          Explore More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 course_col">
                <div className="course">
                  <div className="course_image">
                    <img src="images/course_3.jpg" alt="" />
                  </div>
                  <div className="course_body">
                    <h3 className="course_title">
                      <a href="course.html">Admin + Development</a>
                    </h3>
                    <div className="course_text">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipi elitsed do
                        eiusmod tempor
                      </p>
                    </div>
                  </div>
                  <div className="course_footer">
                    <div className="course_footer_content d-flex flex-row align-items-center justify-content-start">
                      <div className="courses_button trans_200">
                        <a href="http://nubeselite.sargatechnology.com/singlecourse">
                          Explore More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="courses_button trans_200">
                  <a href="http://nubeselite.sargatechnology.com/courses">
                    view all courses
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="counter">
          <div
            className="counter_background"
            style={{ backgroundImage: 'url(images/counter_background.jpg)' }} />
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="counter_content">
                  <h2 className="counter_title">Register Now</h2>
                  <div className="counter_text">
                    <p>
                      Simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry’s standard
                      dumy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book.
                    </p>
                  </div>

                  <div className="milestones d-flex flex-md-row flex-column align-items-center justify-content-between">
                    <div className="milestone">
                      <div className="milestone_counter" data-end-value="90%">
                        90%
                      </div>
                      <div className="milestone_text">Success Rate</div>
                    </div>

                    <div className="milestone">
                      <div
                        className="milestone_counter"
                        data-end-value="7"
                        data-sign-after="Yrs">
                        7
                      </div>
                      <div className="milestone_text">
                        Salesforce Working Experience
                      </div>
                    </div>
                    <div className="milestone">
                      <div className="milestone_counter" data-end-value="529">
                        529
                      </div>
                      <div className="milestone_text">No. of Students</div>
                    </div>

                    <div className="milestone">
                      <div
                        className="milestone_counter"
                        data-end-value="6"
                        data-sign-after="Yrs">
                        6Yrs.
                      </div>
                      <div className="milestone_text">
                        Salesforce Training Experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="counter_form">
              <div className="row fill_height">
                <div className="col fill_height">
                  <form
                    method="POST"
                    action="http://nubeselite.sargatechnology.com"
                    acceptCharset="UTF-8"
                    className="counter_form_content d-flex flex-column align-items-center justify-content-center">
                    <input
                      name="_token"
                      type="hidden"
                      value="EusxcHqvOuFjq3Eo6TUc9ewlrTvMwU30zrRTz5DJ" />
                    <div className="counter_form_title">Register Now</div>
                    <input
                      type="text"
                      className="counter_input"
                      name="name"
                      placeholder="Your Name:"
                      required="required" />
                    <input
                      type="email"
                      className="counter_input"
                      name="email"
                      placeholder="E-mail:"
                      required="required" />
                    <input
                      type="tel"
                      className="counter_input"
                      name="phone"
                      placeholder="Mobile:"
                      required="required" />
                    <select
                      id="counter_select"
                      className="counter_input counter_options"
                      name="coursetype">
                      <option>Course Type</option>
                      <option>Admin + Development</option>
                      <option>Development</option>
                      <option>Admin</option>
                      <option>Lightning</option>
                    </select>
                    <input
                      type="text"
                      className="counter_input"
                      name="city"
                      placeholder="City:"
                      required="required" />
                    <input
                      type="text"
                      className="counter_input"
                      name="country"
                      placeholder="Country:"
                      required="required" />
                    <button type="submit" className="counter_form_button">
                      submit now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="partners">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="partners_slider_container">
                  <div className="owl-carousel owl-theme partners_slider">
                    <div className="owl-item partner_item">
                      <img
                        src="http://nubeselite.sargatechnology.com/images/companies/Accenture.svg_.png"
                        alt="" />
                    </div>

                    <div className="owl-item partner_item">
                      <img
                        src="http://nubeselite.sargatechnology.com/images/companies/aruba-logo-1.png"
                        alt="" />
                    </div>

                    <div className="owl-item partner_item">
                      <img
                        src="http://nubeselite.sargatechnology.com/images/companies/CTS-Logo-1.png"
                        alt="" />
                    </div>

                    <div className="owl-item partner_item">
                      <img
                        src="http://nubeselite.sargatechnology.com/images/companies/Dell_Logo-1.png"
                        alt="" />
                    </div>

                    <div className="owl-item partner_item">
                      <img
                        src="http://nubeselite.sargatechnology.com/images/companies/Deloitte.svg_.png"
                        alt="" />
                    </div>

                    <div className="owl-item partner_item">
                      <img
                        src="http://nubeselite.sargatechnology.com/images/companies/happiest-minds-logo-1.png"
                        alt="" />
                    </div>

                    <div className="owl-item partner_item">
                      <img
                        src="http://nubeselite.sargatechnology.com/images/companies/HCL_Technologies_logo.svg_.png"
                        alt="" />
                    </div>

                    <div className="owl-item partner_item">
                      <img
                        src="http://nubeselite.sargatechnology.com/images/companies/ntt-data.png"
                        alt="" />
                    </div>

                    <div className="owl-item partner_item">
                      <img
                        src="http://nubeselite.sargatechnology.com/images/companies/PricewaterhouseCoopers_Logo.svg_-1.png"
                        alt="" />
                    </div>

                    <div className="owl-item partner_item">
                      <img
                        src="http://nubeselite.sargatechnology.com/images/companies/TATA_Consultancy_Services_Logo_blue.svg_-1.png"
                        alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
