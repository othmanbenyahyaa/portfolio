import {
  Container,
  PImage,
  PInfo,
  Title,
  SubTitle,
  Btns,
  CodeBtn,
  LivePre
} from './styles/CaseStyle.js';
import CaseOne from "../../assets/product2.png";
import GitIcon from "../../assets/github.png";
import LiveIcon from "../../assets/live.png";

const caseData = {
  title: "VICEVERSA",
  subTitle: "UX/UI DESIGN, DEVELOPMENT",
  gitIcon: GitIcon,
  liveIcon: LiveIcon,
};

const Case = () => {
  return (
    <Container>
       <PInfo>
           <Title>
                <h1>
                   {caseData.title}
                </h1>
           </Title>
           <SubTitle>
               <h3>
                  {caseData.subTitle}
               </h3>
           </SubTitle>
           <Btns>
               <CodeBtn>
                  <img src={caseData.gitIcon} alt="Icon" />
                  Source Code
               </CodeBtn>
               <LivePre>
                  <img src={caseData.liveIcon} alt="Icon" />
                  Live Preview
               </LivePre>
           </Btns>
        </PInfo>

        <PImage>
          <img src={CaseOne} alt="Case One" />
        </PImage>
    </Container>
  );
};

export default Case;
