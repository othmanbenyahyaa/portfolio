import PropTypes from 'prop-types';
import { Container, InfoSection, AboutInfo, Items, BtnSection, ButtonContainer, ButtonInner, Portrait } from "./styles/AboutMe.js";
import { Link } from 'react-router-dom';
import PortraitImg from "../../assets/graphs/av2.png";

function AboutMe({ name, bio }) {
  const aboutMeData = {
    title: "HELLO I AM ",
    buttonText: "SEE MORE",
    buttonLink: "/about",
    portraitAltText: "Portrait image"
  };

  return (
    <Container>
      <h1>{aboutMeData.title}{name}</h1>
      <InfoSection>
        <AboutInfo>
          <Items>
            <p>{bio}</p>
          </Items>
          <BtnSection>
            <ButtonContainer>
              <ButtonInner as={Link} to={aboutMeData.buttonLink}>
                <span>{aboutMeData.buttonText}</span>
              </ButtonInner>
            </ButtonContainer>
          </BtnSection>
        </AboutInfo>

        <Portrait>
          <img src={PortraitImg} alt={aboutMeData.portraitAltText} />
        </Portrait>
      </InfoSection>
    </Container>
  );
}

// Define PropTypes for name and bio
AboutMe.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired
};

export default AboutMe;


