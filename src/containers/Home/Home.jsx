import { Container,Section } from "./HomeStyle.js";
import Menu from "../../components/Menu/index.jsx"
import Footer from "../../components/Footer/index.jsx";
import AboutMe from "../../components/AboutMe/index.jsx";
import SelectedCases from "../../components/SelectedCases/index.jsx"
import MainSkills from "../../components/MainSkills/index.jsx";
import Hero from "../../components/Hero/index.jsx";

function Home() {
 

  return (
    <Container>
       <Menu />
      <Section>
        <Hero/>
        <AboutMe/>
        <SelectedCases/>
        <MainSkills/>
        <Footer />
      </Section>
    </Container>
  );
}

export default Home;

/*

 <SelectedWorkBox>
          <SelectedWork
            company={data.company}
            projectSubtitle={data.projectSubtitle}
            viewCaseText={data.viewCaseText}
            liveDemoText={data.liveDemoText}
            imageUrl={data.imageUrl}
          />
        </SelectedWorkBox>

 const data = {
    company: 'Motto®',
    projectSubtitle: 'Agency website designed for Motto®, global branding agency.',
    imageUrl: ProductImage,
    viewCaseText: 'View Case',
    liveDemoText: 'Live Demo',
  };
    */