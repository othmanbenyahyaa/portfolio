import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container,ContentSection,HeadSection } from "./styles/AppStyle.js";
import Home from "./containers/Home/Home.jsx";
import About from "./containers/About/About.jsx";
import Work from "./containers/Work/Work.jsx";
import Contact from "./containers/Contact/Contact.jsx"
import CasePage from "./components/CasePage/CasePage.jsx";
import HomePage from "./containers/HoPage/HomePage.jsx"
//import Menu from "./components/Menu/index.jsx"

function App() {
  return (
    <Container>
      <HeadSection>
      </HeadSection>
      <ContentSection>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/casePage" element={<CasePage />} />
        </Routes>
      </BrowserRouter>
      </ContentSection>
      
    </Container>
  );
}

export default App;

