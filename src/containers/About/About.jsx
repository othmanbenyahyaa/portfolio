import { Container, ContentSection, HiItem, AboutSection, AboutBox, AbItem, Certification, GetCertificate, SkillsBox, Skills, SItems, Item, GetCv, GetInTouchBox, GetInTouch, GetInTouchBtn } from "./AboutStyle.js";

import { Link } from 'react-router-dom';
import SkillIconJs from "../../assets/icons/i-js.png";
import SkillIconHtml from "../../assets/icons/i-html.png";
import SkillIconCss from "../../assets/icons/i-css.png";
import SkillIconReact from "../../assets/icons/i-react.png";
import IcGraph from "../../assets/icons/i-graph.png";
import IcCode from "../../assets/icons/i-code.png";
import IcGit from "../../assets/icons/i-git.png";
import IcGithub from "../../assets/icons/i-github.png";
import IcNext from "../../assets/icons/i-next.png";
import IcTailwind from "../../assets/icons/i-tailwind.png";
import IcTs from "../../assets/icons/i-ts.png";

import Menu from "../../components/Menu/index.jsx"

const aboutData = {
  title: "ABOUT.",
  bio:"Hi! I am Othman Benyahya, a dedicated Front-End Developer boasting over 2 years of hands-on experience in HTML, CSS, JavaScript, React.js, and Next.js technologies. My passion lies in meticulously crafting user-friendly experiences and relishing the opportunity to unravel inventive solutions for intricate challenges. Among my key competencies are the adept design and implementation of intuitive user interfaces using React.js and Next.js, coupled with the efficient integration of server data through Apollo Client and GraphQL. Rigorous testing, including comprehensive unit and functional testing with Testing-Library, ensures the delivery of high-quality, reliable applications. I pride myself on seamless collaboration with development teams to implement cutting-edge features, with a keen focus on documenting UI components using Storybook. My commitment extends to crafting efficient and reusable code with TypeScript and Styled-Components, producing user-friendly and responsive UI components. In my role, I tackle troubleshooting and debugging of frontend applications to elevate performance and user experience. Excited by the limitless possibilities that technology offers, I am keen to connect with like-minded individuals and explore collaborative opportunities to create impactful digital solutions. Let's embark on a journey together to achieve something truly extraordinary.",
  aboutText: "🚀 I am OTHMAN BENYAHYA Front-end developer",
};

const certificationData = {
  title: "🌐CERTIFICATION",
  description: "I have more than 50 Online certificates, you can delve into my extensive qualifications by clicking on the button below:",
  buttonText: "View Certificates",
};

const skillsData = {
  title: "💡 SKILLS",
  primarySkills: [
    { icon: SkillIconHtml, label: "HTML" },
    { icon: SkillIconCss, label: "CSS" },
    { icon: SkillIconJs, label: "JavaScript" },
    { icon: SkillIconReact, label: "React JS" },
  ],
};

const additionalSkillsData = [
  { icon: IcNext, label: "Next Js" },
  { icon: IcTs, label: "TypeScript" },
  { icon: IcTailwind, label: "Tailwind CSS" },
  { icon: IcGraph, label: "GraphQL" },
  { icon: IcGit, label: "Git" },
  { icon: IcGithub, label: "GitHub" },
  { icon: IcCode, label: "Styled-Components" },
  { icon: IcCode, label: "CSS Flexbox Layouts" },
  { icon: IcCode, label: "Axios" },
  { icon: IcCode, label: "Testing-Library & Jest" },
  { icon: IcCode, label: "Debugging Code" },
  { icon: IcCode, label: "Issuse Management" },
];

const getInTouchData = {
  title: "🔍LET S CONNECT",
  description: "I am actively seeking new opportunities to contribute my skills and expertise. Let s connect and explore how I can bring value to your team or project.",
  buttonText: "Let s Connect",
};

function About() {
  return (
    <Container>
    <Menu/>
      <ContentSection>
        <HiItem>
          <h1>{aboutData.title}</h1>
        </HiItem>
        <AboutSection>
          <AboutBox>
            <h1>{aboutData.aboutText}</h1>
            <AbItem>
              <p>{aboutData.bio}</p>
            </AbItem>
          </AboutBox>

          <Certification>
            <h1>{certificationData.title}</h1>
            <p>{certificationData.description}</p>
            <GetCertificate>{certificationData.buttonText}</GetCertificate>
          </Certification>

          <SkillsBox>
  <h1>{skillsData.title}</h1>

  <Skills>
    <p>My primary skills include: </p>
    <SItems>
      {skillsData.primarySkills.map((skill, index) => (
        <Item key={index}>
          <img src={skill.icon} alt="Icon" />
          {skill.label}
        </Item>
      ))}
    </SItems>
  </Skills>

  <Skills>
    <p>
      Also with working and practice in my own projects have good knowledge with these skills:
    </p>
    <SItems>
      {additionalSkillsData.map((skill, index) => (
        <Item key={index}>
          <img src={skill.icon} alt="Icon" />
          {skill.label}
        </Item>
      ))}
    </SItems>
  </Skills>

  <GetCv>download resume</GetCv>
</SkillsBox>

          <GetInTouchBox>
            <h1>{getInTouchData.title}</h1>
            <GetInTouch>
              <p>{getInTouchData.description}</p>
            </GetInTouch>
            <GetInTouchBtn as={Link} to="/contact">{getInTouchData.buttonText}</GetInTouchBtn>
          </GetInTouchBox>
        </AboutSection>
      </ContentSection>
    </Container>
  );
}

export default About;

