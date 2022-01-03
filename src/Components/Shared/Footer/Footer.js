import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {faPhoneVolume} from "@fortawesome/free-solid-svg-icons";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1> <span className="text-warning">Gold & </span> Silver </h1>

              

                <div className="row mt-4">
                  <div className="footer-menu-container fw-bold">

                    <Nav.Link as={Link} to="/home#home" className="text-light">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about#about" className="text-light">About Us</Nav.Link>
                    <Nav.Link as={Link} to="/services#services" className="text-light">Products</Nav.Link>
                    <Nav.Link as={Link} to="/register" className="text-light">Register Now</Nav.Link>

                  </div>
                </div>

              </div>
            </div>


            <div className="col ms-auto ">
                 
                  
                <div className=" mt-5 ">
                  <h4>Follow us on social media</h4>
                </div>
                <div className="icons-container d-flex text-center ">

                  <div className="icon">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                </div>
            

                </div>


          
            <div className="col-md-5">
              <div className="right-footer-container">

              <div>       <h3>Our Contact</h3>  <hr /> </div>

                <div className="phone d-flex align-items-center justify-content-center mt-4">
           
                 
  
                  <div className="footer-phone-icon">
                    <FontAwesomeIcon icon={faPhoneVolume} />
                  </div>
                  <div>
                    <h5>001 998 657 4444</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center">
                  <div className="foter-phone-icon">

                  </div>
                  <div>
                    <p className="text-center">
                      © 1996-2021, info@goldish-jew.com
                      <br /> 283 N. Glenwood Street, Levittown, NY 11756
                      <br />
                      Mon - Fri: 10:00 - 18:00
                    </p>

                    



                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className="mt-5">
          <small> © 2022 Goldish Theme. All rights reserved. | Silver | Terms and Conditions | Privacy Policy</small>
        </p>
      </div>
    </div>
  );
};

export default Footer;