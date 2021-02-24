import React from 'react'
import "./Nav.css";
import {useEffect,useState} from "react";

function Nav() {


    const [show, handleShow] = useState(false);

    
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);


    return (
        <div className={`nav ${show && "nav__black"}`}>
        <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
            <img className="nav__char" src="https://i.pinimg.com/originals/30/db/47/30db479e1558c3ed46b4ed23b3cd98ae.png" alt="character" />
        </div>
    )
}

export default Nav
