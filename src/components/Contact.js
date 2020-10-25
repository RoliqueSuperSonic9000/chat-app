


import React, {Component} from 'react';
import Contact from "./components/Contact.css";


function Contact() {
  return (
    <div className="Contact">
      <img
        className="avatar"
        src="https://randomuser.me/api/portraits/women/17.jpg"
        alt="Beverley Ryan"
      />
      <div>
        <p className="name">Beverley Ryan</p>
        <div className="status">
          <div className="status-online" />
          <p className="status-text">online</p>
          <div className="statut">
        
        <h3>{online ?'Online':'Offline'}</h3>
      </div> 
        </div>
      </div>
    </div>
  );
}

export default Contact;

