import { Container, HiItem, SubItem, WorkInfo, SelectedItems, CasesSec, GetInTouch, ContactMe } from "./WorkStyle.js";
import Case from "../../components/Case/index.jsx";
import Menu from "../../components/Menu/index.jsx"
import { Link } from 'react-router-dom';

const workInfoData = {
  title: "Projects.",
  subTitle: "Have a look at some of the projects I’ve worked on. Clients vary from lifestyle to tech and design companies.",
};

const getInTouchData = {
  text1: "Looking to grow your business through the power of great digital design?",
  text2: "Reach out to me get the conversation started about your digital design needs.",
  buttonText: "CONTACT ME",
};

function Work() {
  return (
    <Container>
      <Menu/>
      <WorkInfo>
        <HiItem>
          <h1>{workInfoData.title}</h1>
        </HiItem>
        <SubItem>
          <h3>{workInfoData.subTitle}</h3>
        </SubItem>
        <SelectedItems>
          <CasesSec>
            <Case />
            <Case />
            <Case />
          </CasesSec>
        </SelectedItems>
        <GetInTouch>
          <p>{getInTouchData.text1}</p>
          <p>{getInTouchData.text2}</p>
          <ContactMe as={Link} to="/contact">
            <span>{getInTouchData.buttonText}</span>
          </ContactMe>
        </GetInTouch>
      </WorkInfo>
    </Container>
  );
}

export default Work;
