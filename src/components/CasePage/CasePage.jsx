import { Container, Section, CaseInfo, CaseImgs, PImage, Title, SubTitle, Description, Btns, CodeBtn } from "./styles/CasePageStyle.js";
import GitIcon from "../../assets/icons/github.png";
import LiveIcon from "../../assets/icons/live.png";
import CaseOne from "../../assets/images/product2.png";
import Menu from "../../components/Menu/index.jsx"

function CasePage() {
  const caseData = {
    title: "MOTTO",
    subTitle: "Agency website designed for Motto, global branding agency",
    description: "Motto® is a global branding agency founded by Sunny and Ashleigh. Besides their branding services, they also do a lot of public speaking. The website lets this all shine in a fun way with a lot of micro interactions.",
  };

  const btnsData = [
    { icon: GitIcon, text: "Source Code" },
    { icon: LiveIcon, text: "Live Preview" },
  ];

  const caseImages = [CaseOne, CaseOne, CaseOne];

  return (
    <Container>
      <Menu/>
      <Section>
        <CaseInfo>
          <Title>
            <h1>{caseData.title}</h1>
          </Title>
          <SubTitle>
            <h3>{caseData.subTitle}</h3>
          </SubTitle>
          <Description>
            <p>{caseData.description}</p>
          </Description>
          <Btns>
            {btnsData.map((btn, index) => (
              <CodeBtn key={index}>
                <img src={btn.icon} alt="Icon" />
                {btn.text}
              </CodeBtn>
            ))}
          </Btns>
        </CaseInfo>
        <CaseImgs>
          {caseImages.map((image, index) => (
            <PImage key={index}>
              <img src={image} alt={`Case ${index + 1}`} />
            </PImage>
          ))}
        </CaseImgs>
        <Btns>
          {btnsData.map((btn, index) => (
            <CodeBtn key={index}>
              <img src={btn.icon} alt="Icon" />
              {btn.text}
            </CodeBtn>
          ))}
        </Btns>
      </Section>
    </Container>
  );
}

export default CasePage;
