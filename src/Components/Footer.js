import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="mt-5">
        <div className="card mx-5 carddx">
          <div className="row mb-4">
            <div className="col-md-4 col-sm-11 col-xs-11">
              <div className="footer-text pull-left">
                <div style={{ display: "flex" }} className="d-flex">
                  <h1
                    className="font-weight-bold mr-2 px-3"
                    style={{
                      //   color: "#16151a",
                      //   backgroundColor: "#957bda",
                      backgroundColor: "white",
                      padding: "5px",
                      //   fontStyle: "oblique",
                    }}
                  >
                    <img
                      alt="..please Refresh"
                      width={"230px"}
                      height={"90px"}
                      src="https://www.sprih.com/wp-content/uploads/2023/12/Sprih-Logo-1.svg"
                    ></img>
                    {""}
                  </h1>
                  {/* <h1 style={{ color: "#957bda", fontStyle: "oblique" }}>
                    Sprih
                  </h1> */}
                </div>
                <p className="card-text">
                  Create a sustainability strategy that goes beyond regulatory
                  demands to create business impact. Sprih’s enterprise
                  sustainability platform turns decarbonization into a
                  competitive edge.
                </p>
                <div className="social mt-2 mb-3">
                  <i className="fa fa-facebook-official fa-lg"></i>
                  <i className="fa fa-instagram fa-lg"></i>
                  <i className="fa fa-twitter fa-lg"></i>
                  <i className="fa fa-linkedin-square fa-lg"></i>
                  <i className="fa fa-facebook"></i>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-1 col-xs-1 mb-2"></div>
            <div className="col-md-2 col-sm-4 col-xs-4">
              <h5 className="heading">Services</h5>
              <ul>
                <li>IT Consulting -</li>
                <li>Development</li>
                <li>Cloud</li>
                <li>DevOps & Support</li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-4">
              <h5 className="heading">Industries</h5>
              <ul className="card-text">
                <li>Finance</li>
                <li>Public Sector</li>
                <li>Smart Office</li>
                <li>Retail</li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-4">
              <h5 className="heading">Company</h5>
              <ul className="card-text">
                <a
                  style={{
                    textDecoration: "none",
                    color: "rgb(100, 103, 113)",
                  }}
                  href="https://www.sprih.com/about-us/"
                >
                  <li>About Us</li>
                </a>
                <li>Blog</li>
                <li>Contact</li>
                <li>Join Us</li>
              </ul>
            </div>
          </div>
          <div className="divider mb-4"></div>
          <hr></hr>
          <div className="row" style={{ fontSize: "10px" }}>
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="pull-left">
                <p>
                  <i className="fa fa-copyright"></i> 2024 Sprih Plan, track,
                  report, and reduce emissions
                  <p>
                    GENERAL & SALES ENQUIRIES at <p>sales@sprih.com</p>
                  </p>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-6">
              <div className="pull-right mr-4 d-flex policy">
                <div>Terms of Use</div>
                <div>Privacy Policy</div>
                <div>Cookie Policy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
