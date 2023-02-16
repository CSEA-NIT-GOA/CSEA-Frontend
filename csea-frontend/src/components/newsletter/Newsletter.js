import React from 'react'
import Herosection from '../HeroSection'
import Navbar from '../Navbar'
import PropTypes from "prop-types";
import './Newsletter.css';
import {Link} from 'react-router-dom';
const Newsletter = (props) => {
  return (
<div className="container mx-auto my-10">
  {/* <!-- ... --> */}

  <div className="Newsletter_title">
    <div className="Newsletter_title_textArea">
    <h1 >{props.title}</h1>
  <div className="date">{props.date}</div>
    </div>

  </div>

  <div className="Newsletter_container my-5">
    <div align="center" className="Newsletter_container_textArea">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim autem minima itaque architecto voluptatum suscipit quasi beatae vitae veritatis ut odit, expedita, quia ratione temporibus. Enim, illo soluta nemo nostrum ad eos nobis distinctio? </p>
<p> {props.aboutText}</p>  
    </div>

  </div>
 
</div>
  )
}

export default Newsletter

Newsletter.prototype = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  date:PropTypes.string.isRequired,
};

Newsletter.defaultProps = {
  title: "The title will go here",
  aboutText: "The text will go here",
  date:"The date goes here",
};