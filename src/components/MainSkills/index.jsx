import { Container, Item } from './styles/MainSkillsStyle.js';
import Html from "../../assets/icons/html.png";
import Css from "../../assets/icons/css.png";
import JavaScript from "../../assets/icons/javascript.png";
import ReactLogo from "../../assets/icons/react.png";

const MainSkills = () => {
  // Define an array of skill data
  const skillsData = [
    { image: Html, alt: "HTML Logo" },
    { image: Css, alt: "CSS Logo" },
    { image: JavaScript, alt: "JavaScript Logo" },
    { image: ReactLogo, alt: "React Logo" }
  ];

  return (
    <Container>
      {skillsData.map((skill, index) => (
        <Item key={index}>
          <img src={skill.image} alt={skill.alt} />
        </Item>
      ))}
    </Container>
  );
};

export default MainSkills;



