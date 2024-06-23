import React from 'react';
import { Technologies, Tech, TechImg, TechName, stackList } from './StyledComponents';
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

const Experience = () => {
  return (
    <section id="experience">
      <h2>Skills</h2>
      <h5>The Skills I Have</h5>
      <div className="container experience__container">
        <div className="experience__frontend">
          <div className="experience__content">
            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
