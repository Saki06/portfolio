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
  gap: 1.5rem;
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 110px;
  padding: 1.2rem;
  border: 1px solid var(--glass-border);
  border-radius: 1rem;
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: var(--color-primary-variant);
    border-color: var(--color-primary);
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 242, 255, 0.2);
    cursor: pointer;
  }
`;

export const TechImg = styled.img`
  height: 45px;
  width: 45px;
  margin-bottom: 10px;
  filter: drop-shadow(0 0 5px rgba(255,255,255,0.2));
`;

export const TechName = styled.div`
  font-size: 14px;
  text-align: center;
  color: var(--color-light);
  font-weight: 500;
`;

export const stackList = [
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    name: "Python",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg",
    name: "TensorFlow",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg",
    name: "PyTorch",
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
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    name: "JavaScript",
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
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    name: "Git",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
    name: "Docker",
  },
  {
    img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg",
    name: "Azure",
  },
];
