import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaShoppingBag,
  FaTwitter,
} from "react-icons/fa";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <Container>
        <div className="footer-left">
          <h3>
            The<span>Food Village</span>
          </h3>

          <p className="footer-links">
            <a href="#" className="footer-links-left">
              Home
            </a>
            <a href="#" className="footer-links-left">
              Blog
            </a>
            <a href="#">Profile</a>
          </p>

          <p className="footer-company-name">
            Copyright © 2023 <strong>Ibrahim Hossain</strong> All rights
            reserved
          </p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span className="fw-bold fs-6">Contact Info</span>
              Dhaka, Dhanmondhi.
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+880 1711926258</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:sagar00001.co@gmail.com">
                thefoodvillage@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span className="mb-3">Opening Hour</span>
            <strong className="text-white fw-bold ">Saturday - Thursday</strong>
            <br />
            <p className="text-white mt-2">10.00 AM - 11.00 PM</p>
          </p>
          <div className="">
            <a href="#">
              {" "}
              <FaFacebook className="text-white"></FaFacebook>
            </a>
            <a href="#">
              {" "}
              <FaTwitter className="text-white"></FaTwitter>
            </a>
            <a href="#">
              {" "}
              <FaInstagram className="text-white"></FaInstagram>
            </a>
            <a href="#">
              {" "}
              <FaGoogle className="text-white"></FaGoogle>
            </a>
            <a href="#">
              {" "}
              <FaShoppingBag className="text-white"></FaShoppingBag>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
