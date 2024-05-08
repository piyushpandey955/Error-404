import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container1">
        <p>Quick Links</p>
        <a href="#">
          <p>Mandatory Disclosure</p>
        </a>
        <a href="#">
          <p>Approval Letter</p>
        </a>
        <a href="#">
          <p>UG Campus</p>
        </a>
      </div>
      <div className="container1">
        <p>Institution Rules</p>
        <a href="#">
          <p>Guidelines For Students</p>
        </a>
        <a href="#">
          <p>FAQ</p>
        </a>
        <a href="#">
          <p>T&C</p>
        </a>
        
      </div>
      <div className="container1">
        <p>Keep In Touch</p>
        <input
          type="text"
          placeholder="Enter your email address"
          id="emailField"
        />

        <div className="social-icons">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-square-instagram"></i>
        </div>
      </div>
      <div className="container1">
        <div className="original">
          <i className="fa-solid fa-certificate"></i>
          <p>100% Guranteed Placements</p>
        </div>
        <div className="original">
          <i className="fa-solid fa-calendar-days"></i>
          <p>Best Institution Award Winner</p>
        </div>
      </div>
    </footer>
  );
}
