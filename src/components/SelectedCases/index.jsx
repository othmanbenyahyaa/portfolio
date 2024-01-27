import { Container, TitleSec, CasesSec, BtnsSec, TxtItem, BtnWiBg, Btnbr, ButtonContainer, ButtonInner, ButtonContainerBg, ButtonInnerBg } from './styles/SelectedCasesStyle.js';
import { Link } from 'react-router-dom';
import Case from "../Case/index.jsx";

const SelectedCases = () => {
  // Define an object with your data
  const selectedCasesData = {
    title: "SELECTED CASES",
    buttonTextContact: "CONTACT ME",
    buttonLinkContact: "/contact",
    buttonTextSeeOther: "SEE OTHER CASES",
    buttonLinkSeeOther: "/work",
    additionalText: "Yes, these are some buttons"
  };

  return (
    <Container>
      <TitleSec>
        <h1>{selectedCasesData.title}</h1>
      </TitleSec>

      <CasesSec>
        <Case />
        <Case />
        <Case />
      </CasesSec>

      <BtnsSec>
        <TxtItem>
          <h1>{selectedCasesData.additionalText}</h1>
        </TxtItem>
        <BtnWiBg>
          <ButtonContainerBg>
            <ButtonInnerBg as={Link} to={selectedCasesData.buttonLinkContact}>
              <span>{selectedCasesData.buttonTextContact}</span>
            </ButtonInnerBg>
          </ButtonContainerBg>
        </BtnWiBg>
        <Btnbr>
          <ButtonContainer>
            <ButtonInner as={Link} to={selectedCasesData.buttonLinkSeeOther}>
              <span>{selectedCasesData.buttonTextSeeOther}</span>
            </ButtonInner>
          </ButtonContainer>
        </Btnbr>
      </BtnsSec>
    </Container>
  );
};

export default SelectedCases;
