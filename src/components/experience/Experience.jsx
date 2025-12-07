import React from 'react';
import { Technologies, Tech, TechImg, TechName, stackList } from './StyledComponents';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h5>What I Bring to the Table</h5>
      <h2>Technical Arsenal</h2>
      <div className="container experience__container">
        <div className="experience__content glass">
            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInUp" delay={index * 50} key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
        </div>
      </div>
    </section>
  );
};

export default Experience;
