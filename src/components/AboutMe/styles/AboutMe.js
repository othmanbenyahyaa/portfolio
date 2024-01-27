import styled, { keyframes } from 'styled-components';
import theme from "../../../styles/Theme.js"


export const Container = styled.div`
display: flex;
width: 100%; 
padding:20px 42px;
top:0;
right:0;
box-sizing: border-box;
flex-direction:column;
@media (max-width: 600px) {
  padding:5px 42px;
}
@media (min-width:601px) {
  padding:10px 42px;
}
@media (min-width: 768px) {
  padding:10px 42px;
}
@media (min-width: 992px) { 
  padding:16px 42px;
}
@media (min-width: 1220px) {
  padding:20px 42px;
}
  h1{
    margin:0;
    color:${theme.primaryTextColor};
    font-family: 'Anton', sans-serif;
    font-size: 50px;
    font-style: bold;
    font-weight: 900;
    line-height: 6px;
    text-decoration: none;
    text-transform: uppercase;
    @media (max-width: 600px) {
      font-size: 26px;
    }
    @media (min-width:601px) {
      font-size: 28px;
    }
    @media (min-width: 768px) {
      font-size: 38px;
    }
    @media (min-width: 992px) { 
      font-size: 42px;
    }
    @media (min-width: 1220px) {
      font-size: 50px;
    }
  }

  `;
  export const InfoSection=styled.div`
  display:flex;
  align-items:center;
  @media (max-width: 600px) {
    flex-direction:column-reverse;
  }
  @media (min-width:601px) {
    flex-direction:column-reverse;
  }
  @media (min-width: 768px) {
    flex-direction:column-reverse;
  }
  @media (min-width: 992px) { 
    flex-direction:row;
  }
  @media (min-width: 1220px) {
    flex-direction:row;
  }
  `;
  export const AboutInfo=styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  `;
  export const Items=styled.div`
  display:flex;
  flex-direction:column;
  justify-content:flex-start;

  p{
    max-width:900px;
    color:${theme.primaryTextColor};
    font-family: "Inter", sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: -1.3px;
    line-height: 30px;
    text-decoration: none;
    text-transform: none;
    @media (max-width: 600px) {
      font-size: 10px;
      line-height: 18px;
      letter-spacing: -0.1px;


    }
    @media (min-width:601px) {
      font-size: 12px;
      line-height: 20px;
      letter-spacing: -0.2px;
    }
    @media (min-width: 768px) {
      font-size: 14px;
      line-height: 22px;
      letter-spacing: -0.3px;
    }
    @media (min-width: 992px) { 
      font-size: 16px;
      line-height: 26px;
      letter-spacing: -1.1px;
    }
    @media (min-width: 1220px) {
      font-size: 18px;
      letter-spacing: -1.3px;
      line-height: 30px;
    }
  }

  `;

  export const BtnSection=styled.div`
  display:flex;
  `;
  
const marqueeAnim = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const ButtonContainer = styled.a`
  display: flex;
  margin: 0;
  color: ${theme.btnTextColor};
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
    font-size:8px;
  }
  @media (min-width:601px) {
    font-size:10px;

  }
  @media (min-width: 768px) {
    font-size:12px;

  }
  @media (min-width: 992px) { 
    font-size:14px;

  }
  @media (min-width: 1220px) {
    font-size:18px;

  }

  &:hover {
    color:${theme.btnTextColor};
    border-color:${theme.btnBorderColor};
  }
`;

export const ButtonInner = styled.div`
  display: flex;
  position: relative;
  padding: 5px 30px; 
  color:${theme.btnTextColor};
  text-decoration: none; 
  @media (max-width: 600px) {
    padding:2px 16px; 
  }
  @media (min-width:601px) {
    padding:2px 16px; 

  }
  @media (min-width: 768px) {
    padding:4px 20px; 

  }
  @media (min-width: 992px) { 
    padding:4px 26px; 

  }
  @media (min-width: 1220px) {
    padding:5px 30px; 

  }
  span::after {
    font-size:26px;
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

export const Portrait=styled.div`
display:flex;
align-items:center;
justify-content:center;
img{
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
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