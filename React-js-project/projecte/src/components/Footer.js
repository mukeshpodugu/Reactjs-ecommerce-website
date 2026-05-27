/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Branches</h3>
          <a href="#"> <FaMapMarkerAlt />Beside Main Road</a>
          <a href="#">Srikakulam</a>
          <a href="#">Srikakulam Dist</a>
          <a href="#">Andhra Pradesh</a>
        </div>

        <div className="box">
          <h3>Contact info</h3>
          <a href="tel:+918143999463"> <FaPhone /> +91-8143999463 </a>
          <a href="mailto:mukeshpodugu123@gmail.com"> <FaEnvelope /> mukeshpodugu123@gmail.com </a>
          <a href="#"> <FaMapMarkerAlt /> Andhra Pradesh, Srikakulam, India - 532001</a>
        </div>

        <div className="box">
          <h3>Follow Us</h3>
          {/* Update href attributes to link to actual social media pages */}
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon"> 
            <FaFacebookF /> facebook 
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon"> 
            <FaTwitter /> twitter 
          </a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon"> 
            <FaInstagram /> instagram 
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon"> 
            <FaLinkedinIn /> linkedin 
          </a>
        </div>
      </div>

      <div className="credit">
        created by <span>PODUGU MUKESH</span> | © all rights reserved
      </div>
    </section>
  );
};

export default Footer;