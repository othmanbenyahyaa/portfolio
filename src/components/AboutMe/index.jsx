import { Container, InfoSection, AboutInfo, Items, BtnSection, ButtonContainer, ButtonInner, Portrait } from "./styles/AboutMe.js";
import { Link } from 'react-router-dom';
import PortraitImg from "../../assets/av2.png";

function AboutMe() {
  // Define an object with your data
  const aboutMeData = {
    title: "HELLO I AM OTHMAN",
    content: "MY NAME IS OTHMAN BENYAHYA. I AM A FRONTEND DEVELOPER BASED IN MOROCCO. I USE MY PASSION AND SKILLS TO CREATE DIGITAL PRODUCTS AND EXPERIENCES. NATIONAL AND INTERNATIONAL CUSTOMERS RELY ON ME FOR DESIGN, IMPLEMENTATION, AND MANAGEMENT OF THEIR DIGITAL PRODUCTS. I HAVE MANY YEARS OF EXPERIENCE AS A FRONTEND WEB DEVELOPER. I LOVE NATURE, FOOTBALL, AND COFFEE.",
    buttonText: "SEE MORE",
    buttonLink: "/about",
    portraitAltText: "Portrait image"
  };

  return (
    <Container>
      <h1>{aboutMeData.title}</h1>
      <InfoSection>
        <AboutInfo>
          <Items>
            <p>{aboutMeData.content}</p>
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

export default AboutMe;

