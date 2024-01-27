// Import necessary modules
import { Container, ProfileSection, Infos } from "./styles/HeroStyle";
function Hero() {
  // Define the object with titles
  const titles = {
    sub:"CREATIVE",
    role0: "Front-End",
    role1: " Developer",
  };

  return (
    <Container>
      <ProfileSection>
        <Infos>

          <p className="animated-text">{titles.sub}</p>
          <h1 className="animated-text">{titles.role0}</h1>
          <h1 className="animated-text">{titles.role1}</h1>

        </Infos>
      </ProfileSection>
    </Container>
  );
}

export default Hero;




