import styled, { keyframes } from 'styled-components';
import theme from "../../../styles/Theme.js"
const marqueeAnim = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const Container = styled.div`
display: flex;
width: 100%; 
flex-direction:column;
padding:20px 84px;
top:0;
right:0;
box-sizing: border-box;
gap:60px;
@media (max-width: 600px) {
  gap:42px;
  padding:20px 42px;

}
@media (min-width:601px) {
  gap:48px;
  padding:20px 42px;


}
@media (min-width: 768px) {
  gap:52px;
  padding:20px 42px;

}
@media (min-width: 992px) { 
  gap:58px;
  padding:20px 42px;

}
@media (min-width: 1220px) {
  gap:60px;
  padding:20px 84px;

}

`;
export const TitleSec=styled.div`
width:100%;
display:flex;
h1{
    margin:0;
    color:${theme.primaryTextColor};
      font-family: "Inter", sans-serif;
      font-size: 42px;
      font-style: normal;
      font-weight: 600;
      letter-spacing: -1.3px;
      line-height: 26px;
      text-decoration: none;
      text-transform: none;
      @media (max-width: 600px) {
        font-size: 18px;
        line-height: 0px;
      }
      @media (min-width:601px) {
        font-size: 22px;
        line-height: 0px;
      
      }
      @media (min-width: 768px) {
        font-size: 32px;
        line-height: 0px;
      }
      @media (min-width: 992px) { 
        font-size: 38px;
        line-height: 0px;
      }
      @media (min-width: 1220px) {
        font-size: 42px;
        line-height: 0px;
      }
}
`;
export const CasesSec=styled.div`
width:100%;
display:flex;
justify-content:center;
flex-direction:column;
gap:20px;

`;
export const BtnsSec=styled.div`
width:100%;
display:flex;
align-items:center;
gap:0px 18px;
justify-content:center;
@media (max-width: 600px) {
  gap:0px 4px;
}
@media (min-width:601px) {
  gap:0px 6px;
}
@media (min-width: 768px) {
  gap:0px 8px;
}
@media (min-width: 992px) { 
  gap:0px 12px;
}
@media (min-width: 1220px) {
  gap:0px 18px;
}
`;
export const TxtItem=styled.div`
display:flex;
h1{

    margin:0;
    color:${theme.primaryTextColor};
      font-family: "Inter", sans-serif;
      font-size: 22px;
      font-style: bold;
      font-weight: 900;
      letter-spacing: -1.3px;
      line-height: 26px;
      text-decoration: none;
      text-transform: none;
      @media (max-width: 600px) {
        font-size: 12px;
        line-height: 10px;
      }
      @media (min-width:601px) {
        font-size: 14px;
        line-height: 14px;
      
      }
      @media (min-width: 768px) {
        font-size: 16px;
        line-height: 16px;
      }
      @media (min-width: 992px) { 
        font-size: 18px;
        line-height: 18px;
      }
      @media (min-width: 1220px) {
        font-size: 22px;
        line-height: 26px;

      }
}
`;
  //-----------------  Button with No Background

export const BtnWiBg=styled.div`
display:flex;
`;
export const ButtonContainerBg = styled.a`
  display: flex;
  padding: 0px 0px;
  margin: 0;
  color:${theme.btnTextColor};
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  text-decoration: none;
  border: 1px solid ${theme.btnBorderColor};
  border-radius: 50px;
  transition: all 0.2s ease-out;
  overflow: hidden;
  cursor: pointer;
  @media (max-width: 600px) {
    font-size: 4px;
  }
  @media (min-width:601px) {
    font-size: 10px;
  
  }
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 992px) { 
    font-size: 18px;
  }
  @media (min-width: 1220px) {
    font-size: 18px;
  }

  &:hover {
    color:${theme.btnTextColor};
    border-color:${theme.btnBorderColor};

  }
`;



export const ButtonInnerBg = styled.div`
  display: flex;
  position: relative;
  padding: 7px 7px;
  color: ${theme.btnTextColor};
  text-decoration: none;
  @media (max-width: 600px) {
    padding: 2px 7px;
  }
  @media (min-width:601px) {
    padding: 2px 7px;
  
  }
  @media (min-width: 768px) {
    padding: 4px 7px;
  }
  @media (min-width: 992px) { 
    padding: 4px 7px;
  }
  @media (min-width: 1220px) {
    padding: 7px 7px;
  }
  span::after {
    color: ${theme.btnTextColor};
    content: attr(data-text);
    position: absolute;
    right: 0;
    width: 100%;
    text-align: center;
  }

  ${ButtonContainerBg}:hover & {
    animation: ${marqueeAnim} 1.5s linear infinite;
    animation-play-state: running;
  }
`;


  //-----------------  Button with Background
export const Btnbr=styled.div`
display:flex;

`;
   export const BtnItem=styled.div`
   display:flex;

 
   `;
  export const ButtonContainer = styled.a`
   display: flex;
   background:${theme.btnBgColor};
  color:${theme.btnBgTextColor};
   margin:0;
   font-family: "Inter", sans-serif;
   font-size: 20px;
   font-style: normal;
   font-weight: 500;
   line-height: 26px;
   text-decoration: none;
   border-radius: 50px;
   transition: all 0.2s ease-out;
   overflow: hidden;
   cursor: pointer;
   @media (max-width: 600px) {
    font-size: 4px;
    line-height: 12px;

  }
  @media (min-width:601px) {
    font-size: 10px;
    line-height: 12px;

  
  }
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 26px;

  }
  @media (min-width: 992px) { 
    font-size: 18px;
    line-height: 26px;

  }
  @media (min-width: 1220px) {
    font-size: 18px;
    line-height: 26px;

  }
 
   &:hover {
     background:${theme.btnBgColor};
     color:${theme.btnBgTextColor};
   }
 `;
 
 export const ButtonInner = styled.div`
 display: flex;
 position: relative;
 padding: 7px 10px;
 color: ${theme.btnBgTextColor};
 text-decoration: none;
 @media (max-width: 600px) {
  padding: 2px 7px;
}
@media (min-width:601px) {
  padding: 2px 7px;

}
@media (min-width: 768px) {
  padding: 4px 7px;
}
@media (min-width: 992px) { 
  padding: 4px 7px;
}
@media (min-width: 1220px) {
  padding: 7px 7px;
}
 span::after {
   content: attr(data-text);
   position: absolute;
   right: 0;
   width: 100%;
   text-align: center;
 }

 ${ButtonContainer}:hover & {
  animation: ${marqueeAnim} 1.5s linear infinite;
  animation-play-state: running;
}
`;


 
    /*
${theme.primaryBackgroundColor}
${theme.secondBackgroundColor}
${theme.cpyBackgroundColor}
${theme.primaryTextColor}
${theme.secondTextColor}
${theme.btnBgColor}
${theme.btnBorderColor}
${theme.btnBgTextColor}
${theme.btnTextColor}
${theme.animationColor}
*/
   