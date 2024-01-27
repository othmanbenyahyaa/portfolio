import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "./styles/AppStyle.js";
import Home from "./containers/Home/Home.jsx";
import About from "./containers/About/About.jsx";
import Work from "./containers/Work/Work.jsx";
import Contact from "./containers/Contact/Contact.jsx"
import CasePage from "./components/CasePage/CasePage.jsx";


function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/casePage" element={<CasePage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;

