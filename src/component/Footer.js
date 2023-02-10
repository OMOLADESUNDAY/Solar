import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../image/Star.png';
import { FaWhatsapp, FaTwitter, FaFacebookMessenger } from "react-icons/fa";
import { BsLinkedin } from 'react-icons/bs';
import {GoLocation} from 'react-icons/go'

import './footer.css'
const Footer = () => {
    return (
      <section className="footerWrapper">
        <div className="container footerContainer">
          <div className="left">
            <div className="FooterlogoContainer">
              <Link to="/">
                <img src={Logo} alt="solor power" />
              </Link>{" "}
            </div>
            <p>
              We offer solar power solution, convertion of electrical power from
              AC to DC, DC to AC
            </p>
          </div>
          <div className="backlink">
            <p>
              <Link to="/about" className="footerList">
                Know more about us
              </Link>
            </p>
            <p>
              <Link to="gallery" className="footerList">
                Check our gallery
              </Link>
            </p>
            <p>
              <Link to="rate" className="footerList">
                Rate us now
              </Link>
            </p>
            <p className="links">+234-706-925-8526</p>
            <p className="links">Dleadsolar@gmail.com</p>
          </div>
          <div className="socialIcons">
            <div className="locationContainer">
              <span>
                <GoLocation />
              </span>
              <span>39A Ojuelegba Lagos</span>
            </div>
            <div className="linkContainer">
              <a
                href="http://wa.me/07069258526"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp className="whatsapp" />
              </a>
              <a
                href="https://www.facebook.com/omolade.sunday.75"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookMessenger className="facebook" />
              </a>
              <a
                href="https://www.https://twitter.com/Omolade_Sunday1"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter className="twitter" />
              </a>
              <a
                href="https://www.linkedin.com/in/sunday-omolade-6b6a69227"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin className="linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Footer