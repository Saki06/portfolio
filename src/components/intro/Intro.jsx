import "./intro.css";
import React from "react";
import { FaAward, FaRobot } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/Sakiththiyan.png';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Sakiththiyan Thankavelu" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card glass">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>
            <article className="about__card glass">
              <FaRobot className="about__icon" />
              <h5>AI Solutions</h5>
              <small>5+ Models Deployed</small>
            </article>
            <article className="about__card glass">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>8+ Completed</small>
            </article>
          </div>
          <p>
            I am a forward-thinking undergraduate at SLIIT, specializing in Data Science, with a strong focus on Artificial Intelligence and Full Stack Development. My passion lies in building intelligent systems that solve real-world problems. With expertise in the MERN stack and Python-based AI frameworks, I bridge the gap between complex algorithms and user-friendly interfaces. I am constantly exploring emerging technologies, including Generative AI and Large Language Models, to stay ahead of the curve.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
