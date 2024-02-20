import { useEffect, useState } from "react";
import { Container, Section } from "./HomeStyle.js";
import Footer from "../../components/Footer/index.jsx";
import AboutMe from "../../components/AboutMe/index.jsx";
import SelectedCases from "../../components/SelectedCases/index.jsx";
import MainSkills from "../../components/MainSkills/index.jsx";
import Hero from "../../components/Hero/index.jsx";
import axios from "axios";
import LoadingPage from "../../components/LoadingPage/LoadingPage.jsx";
import Menu from "../../components/Menu/index.jsx"

function Home() {
  const [aboutMeData, setAboutMeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/aboutMeData");
        setAboutMeData(response.data);

        setTimeout(() => {
          setLoading(false);
        }, 200);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Section>
        {loading ? (
          <LoadingPage />
        ) : (
          <>
          <Menu/>
            <Hero myName={aboutMeData[0].name} role={aboutMeData[0].role} />
            <AboutMe name={aboutMeData[0].name} bio={aboutMeData[0].bio} />
            <SelectedCases />
            <MainSkills />
            <Footer />
          </>
        )}
      </Section>
    </Container>
  );
}

export default Home;

/*

*/



