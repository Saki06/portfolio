import styled from "@emotion/styled";

export const ContactWrapper = styled.div`
  margin-top: 5rem;
`;

export const Image = styled.img`
  max-width: 120px;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 18px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background: var(--color-bg-variant);
  transition: background 0.3s ease-in-out;

  &:hover {
    background: transparent;
    border-color: var(--color-bg-variant);
    cursor: pointer;
    
  }
`;

export const TechImg = styled.img`
  height: 40px;
  width: 40px;
  margin-bottom: 5px;
`;

export const TechName = styled.div`
  font-size: 14px;
  text-align: center;
`;



export const stackList = [
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    name: "HTML",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    name: "CSS",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    name: "JavaScript",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    name: "ReactJS",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    name: "NodeJS",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    name: "MongoDB",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    name: "Python",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
    name: "C",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    name: "Java",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
    name: "MySQL",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
    name: "Bootstrap",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
    name: "Figma",
  },
];
