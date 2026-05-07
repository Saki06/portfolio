import React, { useState } from 'react';
import './experience.css';

const stackList = [
  // AI & Machine Learning
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    name: "Python",
    category: "AI & ML"
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
    name: "TensorFlow",
    category: "AI & ML"
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg",
    name: "PyTorch",
    category: "AI & ML"
  },
  // Frontend
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    name: "ReactJS",
    category: "Frontend"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    name: "JavaScript",
    category: "Frontend"
  },
  // Backend
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    name: "NodeJS",
    category: "Backend"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    name: "Java",
    category: "Backend"
  },
  // Database
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
    category: "Database"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
    name: "MySQL",
    category: "Database"
  },
  // DevOps & Tools
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    name: "Git",
    category: "DevOps"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
    name: "Docker",
    category: "DevOps"
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg",
    name: "Azure",
    category: "DevOps"
  },
];

const categories = ["All", "AI & ML", "Frontend", "Backend", "Database", "DevOps"];

const Experience = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? stackList
    : stackList.filter(s => s.category === activeCategory);

  return (
    <section id="experience">
      <h5>What I Bring to the Table</h5>
      <h2>Technical Arsenal</h2>

      {/* Category Filter Pills */}
      <div className="exp__filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`exp__filter-btn ${activeCategory === cat ? 'exp__filter-btn--active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="container exp__container">
        <div className="exp__grid">
          {filtered.map((stack, index) => (
            <div
              key={stack.name}
              className="exp__card"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <div className="exp__card-glow" />
              <div className="exp__card-icon">
                <img src={stack.img} alt={stack.name} loading="lazy" />
              </div>
              <span className="exp__card-name">{stack.name}</span>
              <span className="exp__card-tag">{stack.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
