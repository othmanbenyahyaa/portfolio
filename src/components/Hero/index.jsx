// hero.js
import { Container, ProfileSection, Desgin, Infos, BtnZone } from "./styles/HeroStyle";
import PropTypes from "prop-types";
import Emoji from "../../assets/graphs/emoji4.png";
import CodeIcon from "../../assets/graphs/av2.png";
import BtnWithIcon from "../BtnWithIcon/BtnWithIcon";

function Hero({ myName, role }) {
  const buttons = [
    { text: "CONTACT ME", link: "/contact" },
    { text: "FIND PROJECT", link: "/work" },
  ];
  return (
    <Container>
      <ProfileSection>
        <Desgin>
          <img src={CodeIcon} alt="Code" />
        </Desgin>
        <Infos>
          <p>HELLO !</p>
          <h1>I am {myName}<img src={Emoji} alt="emoji" /></h1>
          <h1>{role}</h1>
          <BtnZone>
           {buttons.map((button, index) => (
              <BtnWithIcon key={index} buttonText={button.text} link={button.link} />
            ))}
          </BtnZone>
        </Infos>
      </ProfileSection>
    </Container>
  );
}
Hero.propTypes = {
  myName: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
};

export default Hero;






