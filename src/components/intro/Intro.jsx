import "./intro.css";
import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import img from '../../assets/Sakiththiyan.png';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Rasif Taghizade" />
          </div>
        </div>
        <div className="about__content">
          <p>
            Currently I am reading my Software Engineering Degree at Sri Lanka Institute Of Information Technology (SLIIT).<br></br>
           I have honed my expertise through hands-on experience in university projects, where I extensively applied Object-Oriented Programming (OOP) concepts. My proficiency extends to the MERN stack, showcasing my ability to work with cutting-edge technologies in web development. With a passion for innovation and a solid foundation in software engineering, I am eager to contribute my skills and knowledge to dynamic projects and collaborative teams.
          </p>
          <div className="about__details">
          <h3>
            <IoPersonSharp className="about__icon" /> Sakiththiyan Thankavelu
          </h3>
          <h3>
            <FaPhoneAlt className="about__icon" /> +94 770167675
          </h3>
          <h3>
            <MdEmail className="about__icon" /> thanavelusakiththiyan@gmail.com
          </h3>
          </div>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
