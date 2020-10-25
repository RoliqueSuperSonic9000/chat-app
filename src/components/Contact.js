


import React from "react";
import Contact from "./Contact.css";


function Contact() {
  return (
    <div className="Contact">
      <img
        className="avatar"
        src="https://randomuser.me/api/portraits/women/17.jpg"
        alt="Beverley Ryan"
      />
      <div>
        <h2 className="name">Beverley Ryan</h2>
        <div className="status">
          <span className="status-online"></span>
          <span className="status-text">online</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;

