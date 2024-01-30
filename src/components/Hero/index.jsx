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

          <p>{titles.sub}</p>
          <h1>{titles.role0}</h1>
          <h1>{titles.role1}</h1>

        </Infos>
      </ProfileSection>
    </Container>
  );
}

export default Hero;




